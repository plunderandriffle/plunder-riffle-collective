import { useEffect, useState } from "react";
import { ArrowUpRight, Radio, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { canEmbedShowcase, mergeShowcase, parseShowcase, REFRESH_MS, ROTATION_MS, SHOWCASE_URL, type ShowcaseItem } from "@/lib/showcase";

export function LivePhone() {
  const [items, setItems] = useState<ShowcaseItem[]>([]);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [status, setStatus] = useState("loading");
  const [embedAllowed, setEmbedAllowed] = useState(false);
  const [retry, setRetry] = useState(0);
  const [frameFailed, setFrameFailed] = useState(false);
  const current = items.find(item => item.id === currentId) ?? items[0];

  useEffect(() => {
    setEmbedAllowed(canEmbedShowcase(window.location.origin));
    let disposed = false;
    let active: AbortController | undefined;
    async function refresh() {
      active?.abort();
      const controller = new AbortController();
      active = controller;
      const timeout = setTimeout(() => controller.abort(), 12_000);
      try {
        const response = await fetch(SHOWCASE_URL, { signal: controller.signal });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const next = parseShowcase(await response.json());
        if (disposed) return;
        setItems(previous => mergeShowcase(previous, next));
        setStatus(next.length ? "live" : "empty");
      } catch {
        if (!disposed) setStatus("unavailable");
      } finally { clearTimeout(timeout); }
    }
    void refresh();
    const interval = setInterval(() => void refresh(), REFRESH_MS);
    return () => { disposed = true; active?.abort(); clearInterval(interval); };
  }, [retry]);

  useEffect(() => {
    if (items.length < 2) return;
    const timer = setInterval(() => setCurrentId(previous => {
      const index = items.findIndex(item => item.id === previous);
      return items[((index < 0 ? 0 : index) + 1) % items.length]?.id ?? null;
    }), ROTATION_MS);
    return () => clearInterval(timer);
  }, [items]);

  useEffect(() => { setFrameFailed(false); }, [current?.id]);

  return <div className="phone-showcase">
    <div className="showcase-eyebrow"><Radio size={12} /><span>{items.length ? "LIVE FROM THE MEME ENGINE" : "THE MEME ENGINE / SHOWCASE"}</span></div>
    <div className="phone-bevel">
      <span className="phone-button phone-mute" /><span className="phone-button phone-volume" /><span className="phone-button phone-power" />
      <div className="phone-screen">
        <div className="dynamic-island"><span /></div>
        {current && embedAllowed && !frameFailed ? <iframe key={current.id} src={current.pageUrl} title={current.title} allow="autoplay; fullscreen" referrerPolicy="no-referrer" onError={() => setFrameFailed(true)} /> : <div className="phone-fallback">
          <div className="fallback-monogram">m<span>e</span>.</div>
          <p className="fallback-kicker">{current ? "A REAL CREATION" : "LIVE SHOWCASE"}</p>
          <h3>{current?.title ?? (status === "loading" ? "Connecting to the engine." : status === "empty" ? "The next idea is on its way." : "The showcase is temporarily unavailable.")}</h3>
          {current ? <><p className="fallback-note">This preview isn’t permitted to embed the showcase. Watch the original instead.</p><Button asChild className="mt-5"><a href={current.pageUrl} target="_blank" rel="noopener noreferrer">Watch creation <ArrowUpRight /></a></Button></> : status !== "loading" ? <Button variant="outline" className="mt-5" onClick={() => setRetry(value => value + 1)}><RefreshCw /> Retry showcase</Button> : <span className="loading-line" />}
        </div>}
        <div className="home-indicator" />
      </div>
    </div>
    <div className="showcase-caption" aria-live="polite"><span>{current?.title ?? "Fresh ideas, straight from the bots."}</span>{current && <small>{current.handle}{current.pinned ? " · PINNED" : ""}</small>}</div>
    <div className="showcase-dots" aria-label="Showcase creations">{items.map(item => <Button key={item.id} variant="ghost" size="icon" title={item.title} aria-label={`Show ${item.title}`} aria-pressed={current?.id === item.id} className="showcase-dot" onClick={() => setCurrentId(item.id)}><span /></Button>)}</div>
    {items.length > 0 && (status === "unavailable" || status === "empty") && <p className="refresh-note">Showing the latest available creations.</p>}
  </div>;
}
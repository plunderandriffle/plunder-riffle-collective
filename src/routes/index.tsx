import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Bitcoin, Bot, ShoppingBag, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LivePhone } from "@/components/live-phone";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "THE MEME ENGINE — Plunder & Riffle" },
    { name: "description", content: "Whatever you can create, you can automate. Watch real creations from the Meme Engine and find your bot. One thought. Infinite content." },
    { property: "og:title", content: "THE MEME ENGINE — Plunder & Riffle" },
    { property: "og:description", content: "One thought. Infinite content. Any language in. Any language out. Explore four Meme Engine bots." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const bots = [
  { name: "BankrMEMEbot", description: "Crypto, AI agents, and internet culture.", action: "TRY BANKR", icon: Bot, url: null },
  { name: "VC Meme Engine", description: "AI spending, startup satire, and who's paying for all this.", action: "TRY THE VC BOT", icon: TrendingUp, url: null },
  { name: "Memeazon", description: "Hilarious product reviews and shopping content.", action: "TRY MEMEAZON", icon: ShoppingBag, url: "https://t.me/TheMEMEazonbot" },
  { name: "BTC Meme Engine", description: "Bitcoin narratives, culture, and crypto memes.", action: "TRY BTC BOT", icon: Bitcoin, url: "https://t.me/theBTCMEMEBOT" },
];

function Index() {
  return <main className="meme-home">
    <header className="site-header">
      <a className="brand-mark" href="#top" aria-label="Plunder and Riffle home">p<span>&</span>r<span className="brand-period">.</span></a>
      <Button asChild variant="ghost" className="nav-bots"><a href="#bots">EXPLORE THE BOTS <ArrowUpRight /></a></Button>
    </header>
    <section id="top" className="meme-hero">
      <div className="hero-copy">
        <p className="brand-label"><span /> PLUNDER &amp; RIFFLE PRESENTS</p>
        <h1>WHATEVER<br />{" "}YOU CAN<br />{" "}<span className="headline-outline">CREATE,</span><br />{" "}YOU CAN<br />{" "}<span className="text-primary">AUTOMATE.</span></h1>
        <p className="hero-support">One thought. Infinite content.<br />Any language in. Any language out.</p>
        <p className="hero-tagline">TIMELESS. AGELESS. BORDERLESS.</p>
      </div>
      <LivePhone />
      <a className="hero-scroll" href="#bots" aria-label="Explore the four bots"><ArrowDown size={15} /> FOUR BOTS. ZERO BLANK PAGES.</a>
    </section>
    <section id="bots" className="bots-section">
      <div className="section-heading"><h2>PICK YOUR ENGINE.</h2><span>ONE IDEA IS ALL IT TAKES.</span></div>
      <div className="bots-grid">{bots.map((bot, i) => <article className="bot-card" key={bot.name}>
        <div className="bot-card-top"><bot.icon size={23} strokeWidth={1.5} /><span>0{i + 1}</span></div>
        <h3>{bot.name}</h3><p>{bot.description}</p>
        {bot.url ? <Button asChild variant="ghost" className="bot-cta"><a href={bot.url} target="_blank" rel="noopener noreferrer">{bot.action}<ArrowUpRight /></a></Button> : <div className="bot-unconfigured"><Button variant="ghost" className="bot-cta" disabled>{bot.action}<ArrowUpRight /></Button><small>Bot link not yet configured</small></div>}
      </article>)}</div>
    </section>
    <section className="closing-section"><p>23 languages.<br /><span>Endless ways to make an idea travel.</span></p><Button asChild variant="link" className="closing-cta"><a href="#bots">FIND YOUR BOT <ArrowUpRight /></a></Button></section>
    <footer className="site-footer"><a href="#top">PLUNDER &amp; RIFFLE</a><span>THE MEME ENGINE</span><span>© 2026</span></footer>
  </main>;
}

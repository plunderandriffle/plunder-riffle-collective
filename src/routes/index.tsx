import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Bot, Check, ChevronRight, CircleDollarSign, Menu, Send, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Plunder & Riffle — The Tokenized Marketing Engine" },
      { name: "description", content: "Launch a branded AI meme engine that turns your community into a token-powered distribution network." },
      { property: "og:title", content: "Plunder & Riffle — The Tokenized Marketing Engine" },
      { property: "og:description", content: "Turn holders, customers, and fans into a token-powered marketing network." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const outcomes = ["Image memes", "Video memes", "Captions", "Campaigns"];
const rewards = ["Giveaways", "Competitions", "Cashback", "Token burns", "Buybacks", "Treasury"];
const businesses = [
  ["Restaurants", "Trade branded memes for meals."],
  ["Skating rinks", "Turn local competition into shared culture."],
  ["Companies", "Reward teams for creative campaigns."],
  ["Consumer brands", "Make customers the content studio."],
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-10">
          <a href="#top" className="font-display text-sm font-bold uppercase tracking-[0.08em]">Plunder <span className="text-primary">&amp;</span> Riffle</a>
          <div className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground md:flex">
            <a href="#engine" className="transition-colors hover:text-foreground">Engine</a>
            <a href="#tokenize" className="transition-colors hover:text-foreground">Tokenize</a>
            <a href="#use-cases" className="transition-colors hover:text-foreground">Use cases</a>
          </div>
          <a href="#launch" className="hidden items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-xs font-semibold uppercase text-primary-foreground md:flex">Launch engine <ArrowUpRight size={14} /></a>
          <Menu className="md:hidden" size={20} aria-label="Menu" />
        </nav>
      </header>

      <section id="top" className="relative overflow-hidden border-b border-border px-5 pt-12 md:px-10 md:pt-20">
        <div className="mx-auto max-w-[1440px]">
          <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground"><span className="signal-pulse size-2 rounded-full bg-primary" />The tokenized marketing engine</p>
          <h1 className="mt-6 max-w-[1100px] font-display text-[clamp(3.2rem,8vw,8.5rem)] font-semibold leading-[0.9] tracking-normal">Your token needs more than holders. It needs <span className="text-primary">distribution.</span></h1>
          <div className="mt-8 grid gap-8 pb-12 md:grid-cols-[1fr_1fr] md:items-end">
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">Launch your own AI-powered meme engine. Put content creation in the hands of your community. Reward engagement with tokens. Turn everyday users into your marketing network.</p>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <a href="#launch" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground">Launch Your Meme Engine <ArrowUpRight size={17} /></a>
              <a href="#engine" className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-6 py-4 text-sm font-semibold">See How It Works <ArrowDown size={17} /></a>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[1440px] border-x border-t border-border bg-card">
          <div className="flex items-center justify-between border-b border-border px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground"><span>Live engine / Campaign 014</span><span className="text-accent">● Online</span></div>
          <div className="grid min-h-[300px] md:grid-cols-[0.8fr_1.4fr_0.8fr]">
            <div className="border-b border-border p-5 md:border-b-0 md:border-r"><p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Input</p><div className="mt-5 flex items-center gap-3"><div className="grid size-10 place-items-center rounded-md bg-primary font-display font-bold text-primary-foreground">R</div><div><p className="font-medium">Launch day energy</p><p className="text-xs text-muted-foreground">Brand context loaded</p></div></div></div>
            <div className="relative grid place-items-center overflow-hidden border-b border-border p-7 md:border-b-0 md:border-r"><div className="absolute inset-x-0 top-1/2 h-px bg-border"/><div className="relative z-10 w-full max-w-md rotate-[-2deg] rounded-md border border-primary/40 bg-background p-6"><div className="flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-muted-foreground"><span>Generated 0.8s</span><Sparkles size={14} className="text-primary" /></div><p className="mt-8 font-display text-3xl font-semibold leading-none">HOLDERS WATCH.<br/><span className="text-primary">CREATORS MOVE.</span></p><p className="mt-8 text-xs text-muted-foreground">#DistributionIsTheMoat</p></div></div>
            <div className="p-5"><p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Distribution</p><div className="mt-5 space-y-3">{["Telegram", "X / Twitter", "TikTok"].map((item, i) => <div key={item} className="flex items-center justify-between border-b border-border pb-3 text-sm"><span>{item}</span><span className={i === 0 ? "text-primary" : "text-muted-foreground"}>{["2.4k", "18.9k", "41.2k"][i]}</span></div>)}</div></div>
          </div>
        </div>
      </section>

      <section id="engine" className="border-b border-border py-20 md:py-32"><div className="mx-auto max-w-[1440px] px-5 md:px-10"><div className="grid gap-12 md:grid-cols-2"><div><p className="text-xs uppercase tracking-[0.18em] text-primary">01 / The engine</p><h2 className="mt-5 font-display text-5xl font-semibold leading-none md:text-7xl">One engine.<br/><span className="text-muted-foreground">Endless possibilities.</span></h2></div><div className="grid grid-cols-2 border-l border-t border-border">{outcomes.map((item, i) => <div key={item} className="min-h-40 border-b border-r border-border p-5"><span className="text-xs text-muted-foreground">0{i+1}</span><p className="mt-16 font-display text-xl font-medium">{item}</p></div>)}</div></div><p className="mt-16 max-w-3xl text-2xl leading-snug text-muted-foreground">Create around any brand, token, product, or idea—then publish across the platforms where culture moves.</p></div></section>

      <section id="tokenize" className="overflow-hidden border-b border-border bg-card py-20 md:py-32"><div className="mx-auto max-w-[1440px] px-5 md:px-10"><p className="text-xs uppercase tracking-[0.18em] text-primary">02 / Reward rail</p><div className="mt-5 grid gap-10 md:grid-cols-2"><h2 className="font-display text-5xl font-semibold leading-none md:text-7xl">Tokenize your marketing.</h2><p className="max-w-xl text-lg leading-relaxed text-muted-foreground">Pair your meme engine with any token. Gate generations, reward creators, and choose the incentive mechanics that move your community.</p></div><div className="relative mt-20 py-12"><div className="absolute inset-x-0 top-1/2 h-px bg-border"/><span className="packet-flow absolute left-0 top-[calc(50%-0.35rem)] size-3 rounded-full bg-primary shadow-[0_0_18px_var(--primary)]"/><div className="relative flex justify-between">{["CREATE", "VERIFY", "REWARD", "DISTRIBUTE"].map((item) => <div key={item} className="bg-card px-2 text-center"><div className="mx-auto size-3 rounded-full border border-primary bg-card"/><p className="mt-4 text-[10px] font-semibold tracking-[0.16em] text-muted-foreground">{item}</p></div>)}</div></div><div className="flex flex-wrap gap-2">{rewards.map(item => <span key={item} className="rounded-full border border-border px-4 py-2 text-xs text-muted-foreground">{item}</span>)}</div></div></section>

      <section className="border-b border-border py-20 md:py-32"><div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-10"><div><p className="text-xs uppercase tracking-[0.18em] text-primary">03 / Launch infrastructure</p><h2 className="mt-5 font-display text-5xl font-semibold leading-none md:text-7xl">A meme engine for every launch.</h2><p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">Give every new project a branded marketing and distribution layer their community can use immediately.</p></div><div className="border border-border bg-card p-5 md:p-8"><div className="flex items-center justify-between border-b border-border pb-5"><span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Project launch stack</span><span className="text-xs text-accent">Ready</span></div><div className="mt-8 space-y-4">{["Token deployed", "Brand engine configured", "Community rewards active", "Distribution network live"].map((x,i)=><div key={x} className="flex items-center gap-4"><span className="grid size-8 place-items-center rounded-full border border-accent/30 text-accent"><Check size={14}/></span><div className="h-px flex-1 bg-border"/><span className="w-40 text-sm">{x}</span><span className="text-xs text-muted-foreground">0{i+1}</span></div>)}</div></div></div></section>

      <section id="use-cases" className="border-b border-border py-20 md:py-32"><div className="mx-auto max-w-[1440px] px-5 md:px-10"><p className="text-xs uppercase tracking-[0.18em] text-primary">04 / Beyond crypto</p><h2 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-none md:text-7xl">Every brand needs a meme engine.</h2><div className="mt-16 grid border-l border-t border-border md:grid-cols-4">{businesses.map(([title,copy])=><article key={title} className="min-h-72 border-b border-r border-border p-6 transition-colors hover:bg-card"><CircleDollarSign className="text-primary" size={24}/><h3 className="mt-24 font-display text-2xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p></article>)}</div></div></section>

      <section id="launch" className="border-b border-border bg-card py-20 md:py-32"><div className="mx-auto max-w-[1440px] px-5 md:px-10"><div className="grid gap-14 md:grid-cols-2"><div><p className="text-xs uppercase tracking-[0.18em] text-primary">05 / Simple to start</p><h2 className="mt-5 font-display text-5xl font-semibold leading-none md:text-7xl">From Telegram to live in three moves.</h2><p className="mt-7 text-lg text-muted-foreground">One click opens the bot. Bring your own API keys where applicable.</p></div><ol className="border-t border-border">{[["01","Open the bot","Start in Telegram."],["02","Set your rules","Add brand, token, and rewards."],["03","Start creating","Your community becomes the network."]].map(([n,t,c])=><li key={n} className="grid grid-cols-[3rem_1fr_auto] items-center gap-3 border-b border-border py-6"><span className="text-xs text-primary">{n}</span><div><p className="font-display text-xl font-medium">{t}</p><p className="mt-1 text-sm text-muted-foreground">{c}</p></div><ChevronRight className="text-muted-foreground" size={20}/></li>)}</ol></div></div></section>

      <section className="px-5 py-24 md:px-10 md:py-40"><div className="mx-auto max-w-[1440px]"><p className="max-w-6xl font-display text-[clamp(3rem,7vw,7.5rem)] font-semibold leading-[0.92]">Don’t just launch a token. Launch its <span className="text-primary">marketing engine.</span></p><a href="https://t.me" className="mt-10 inline-flex items-center gap-3 rounded-md bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground">Launch in Telegram <Send size={17}/></a></div></section>

      <footer className="border-t border-border px-5 py-8 md:px-10"><div className="mx-auto flex max-w-[1440px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><span className="font-display text-sm font-bold uppercase tracking-[0.08em]">Plunder <span className="text-primary">&amp;</span> Riffle</span><p className="text-xs text-muted-foreground">Infrastructure for tokenized content, rewards, and distribution. © 2026</p><div className="flex gap-5 text-xs text-muted-foreground"><a href="#engine">Engine</a><a href="#tokenize">Tokenize</a><a href="#launch">Launch</a></div></div></footer>
    </main>
  );
}

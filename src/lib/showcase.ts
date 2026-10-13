export const SHOWCASE_URL = "https://bot.plunderandriffle.com/api/showcase/feed?limit=12&format=imessage-ad,carousel,single-meme,hybrid-slideshow";
export const ROTATION_MS = 8_000;
export const REFRESH_MS = 60_000;
export const PREVIEW_ORIGIN = "https://id-preview--017feecc-f869-423b-91eb-4489513f321b.lovable.app";
export type ShowcaseItem = { id: string; pageUrl: string; title: string; format: string; handle: string; pinned: boolean };

export function parseShowcase(payload: unknown): ShowcaseItem[] {
  if (!payload || typeof payload !== "object" || !("items" in payload) || !Array.isArray(payload.items)) throw new Error("Invalid showcase response");
  if ("success" in payload && payload.success === false) throw new Error("Showcase unavailable");
  return payload.items.filter((item): item is ShowcaseItem => {
    if (!item || typeof item !== "object" || typeof item.id !== "string" || typeof item.title !== "string" || typeof item.pageUrl !== "string") return false;
    try { const url = new URL(item.pageUrl); return url.origin === "https://bot.plunderandriffle.com" && url.pathname.startsWith("/m/"); } catch { return false; }
  });
}

export function mergeShowcase(previous: ShowcaseItem[], incoming: ShowcaseItem[]) {
  // An empty refresh must not remove a creation already on screen.
  return incoming.length ? incoming : previous;
}

export function canEmbedShowcase(origin: string) {
  return ["https://plunderandriffle.com", "https://www.plunderandriffle.com", "https://bot.plunderandriffle.com", PREVIEW_ORIGIN].includes(origin);
}

// The external showcase currently omits the preview origin from frame-ancestors.
// Keep an honest direct-view fallback there until its owner updates that header.
export function upstreamPermitsEmbed(origin: string) {
  return canEmbedShowcase(origin) && origin !== PREVIEW_ORIGIN;
}
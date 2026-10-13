import { describe, expect, it } from "vitest";
import { canEmbedShowcase, mergeShowcase, parseShowcase, REFRESH_MS, ROTATION_MS } from "@/lib/showcase";

const item = (id: string, pinned = false) => ({ id, pageUrl: `https://bot.plunderandriffle.com/m/${id}/`, title: id, format: "carousel", handle: "Meme Engine", pinned });
describe("Public showcase rules", () => {
  it("rotates every eight seconds", () => expect(ROTATION_MS).toBe(8000));
  it("refreshes every sixty seconds", () => expect(REFRESH_MS).toBe(60000));
  it("preserves pinned-first and newest-next server ordering", () => expect(parseShowcase({items:[item("pinned",true),item("new"),item("old")]}).map(x=>x.id)).toEqual(["pinned","new","old"]));
  it("retains current content on an empty refresh", () => expect(mergeShowcase([item("current")],[])).toEqual([item("current")]));
  it("rejects fabricated or untrusted page destinations", () => expect(parseShowcase({items:[{...item("bad"),pageUrl:"https://example.com/fake"}]})).toEqual([]));
  it("honors the showcase domain embedding restriction", () => {expect(canEmbedShowcase("https://www.plunderandriffle.com")).toBe(true);expect(canEmbedShowcase("http://localhost:8080")).toBe(false);});
});
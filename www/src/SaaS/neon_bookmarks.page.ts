import { loadMarkdown } from "../../helpers.ts";

export const title = "Neon Bookmarks";

export default async function (data: Lume.Data, helpers: Lume.Helpers) {
    const content = await loadMarkdown("https://raw.githubusercontent.com/cyberNKYX/neon_bookmarks/main/README.md")
    return helpers.md(content);
}
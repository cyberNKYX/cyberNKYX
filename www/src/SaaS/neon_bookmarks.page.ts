import { loadMarkdown } from "../../helpers.ts";

export const title = "Neon Bookmarks";
export const external_links = [
    { title: "Check source codes on GitHub", url: "https://github.com/cyberNKYX/neon_bookmarks", icon: "github-logo" },
    { title: "Become fan of Neon bookmarks on Patreon", url: "https://www.patreon.com/posts/supercharge-your-115451366", icon: "patreon-logo" },
    { title: "Available on the Chrome Web Store", icon: "puzzle-piece", url: "https://chromewebstore.google.com/detail/neon-bookmarks/boohehmkdinflfjbkcbakkfdpihfdpem" },
    { title: "Buy the dev a piece of pizza", icon: "pizza", url: "https://buymeacoffee.com/cybernkyx"}
];

export default async function (data: Lume.Data, helpers: Lume.Helpers) {
    const content = await loadMarkdown("https://raw.githubusercontent.com/cyberNKYX/neon_bookmarks/main/README.md")
    return helpers.md(content);
}
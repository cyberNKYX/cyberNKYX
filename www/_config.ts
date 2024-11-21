import lume from "lume/mod.ts";
import theme from "./mod.ts";
import ogimages from "lume/plugins/og_images.ts";
import metas from "lume/plugins/metas.ts";

const site = lume({
  src: "./src",
});

site.data("social_links", [
  {
    url: "https://x.com/cyberNKYX",
    icon: "x-logo",
    title: "Follow me on X.com"
  },
  {
    url: "https://github.com/cyberNKYX",
    icon: "github-logo",
    title: "Find me on GitHub"
  },
  {
    url: "https://patreon.com/cyberNKYX",
    icon: "patreon-logo",
    title: "Become a fan on Patreon"
  },
  {
    url: "https://buymeacoffee.com/cybernkyx",
    icon: "pizza",
    title: "Buy me a piece of pizza"
  },
]);

site.use(theme());
site.use(ogimages());
site.use(metas());

export default site;

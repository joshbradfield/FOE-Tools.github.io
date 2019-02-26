import { JSDOM } from "jsdom";

import { i18next, defaultLocale, supportedLocales } from "./scripts/i18n";
import { gbs } from "./lib/foe-data/gbs";

/**
 * Return locale based on route
 * @param route {string} Route where get locale
 * @return {string} Renvoie les paramètres régionaux associés à cette route
 */
const getLocale = route => {
  for (let locale of supportedLocales) {
    if (route.indexOf("/" + locale) === 0) {
      return locale;
    }
  }
  return defaultLocale;
};

const getPageKey = path => {
  let result = path.replace(/-/g, "_");
  result = /(\/[a-z]{2})?\/(.*)/.exec(result);
  if (result[2] === "") {
    return ["home"];
  }

  result = result[2].split("/");

  if (result[0] === "gb_investment" && result.length === 1) {
    result[0] = "gb_investment_gb_chooser";
  }

  return result;
};

/**
 * Modify HTML to add some SEO attributes
 * @param page Reference of the page
 * @param locale Current locale
 * @return {string} Return the modified HTML raw
 */
const modifyHtml = (page, locale) => {
  const { window } = new JSDOM(page.html).window;
  let pageKey = getPageKey(page.route);
  let text;
  let node;

  // Set locale (lang attribute of html tag)
  window.document.querySelector("html").lang = locale;

  // Set the title
  if (pageKey[0] === "gb_investment") {
    text = i18next.t(`routes.${pageKey[0]}.title`, {
      lng: locale,
      gb_key: "foe_data.gb." + pageKey[1]
    });
  } else {
    text = i18next.t(`routes.${pageKey[0]}.title`, { lng: locale });
  }
  window.document.querySelector("title").innerHTML = text;

  // Set meta description
  text = i18next.t(
    [
      `routes.${pageKey[0] === "gb_investment" ? "gb_investment_gb_chooser" : pageKey[0]}.hero.subtitle`,
      "components.site_layout.hero.slogan_html"
    ],
    { lng: locale }
  );
  node = window.document.createElement("p");
  node.innerHTML = text;
  text = node.textContent;
  node = window.document.createElement("meta");
  node.name = "description";
  node.content = text;
  window.document.querySelector("head").appendChild(node);

  // Set keywords
  text = [
    "wiki",
    "faq",
    "foe",
    "forge of empires",
    "tools suite",
    "tool",
    "Arvahall",
    "Brisgard",
    "Cirgard",
    "Dinegu",
    "East-nagach",
    "Fel Dranghyr",
    "Greifental",
    "Houdsmoor",
    "Jaims",
    "Korch",
    "Langendorn",
    "Mount Killmore",
    "Noarsil",
    "Odhrovar",
    "Parkog",
    "Qunrir",
    "Rugnir",
    "Sinerania",
    "Tuulech",
    "Uceria",
    "Beta",
    "upgrade",
    i18next.t("seo.keywords.gb", { lng: locale }),
    i18next.t("seo.keywords.great_building", { lng: locale }),
    i18next.t("seo.keywords.fp", { lng: locale }),
    i18next.t("seo.keywords.forge_point", { lng: locale }),
    i18next.t("seo.keywords.medals", { lng: locale }),
    i18next.t("seo.keywords.military_units", { lng: locale }),
    i18next.t("foe_data.age.NoAge", { lng: locale }),
    i18next.t("foe_data.age.BronzeAge", { lng: locale }),
    i18next.t("foe_data.age.IronAge", { lng: locale }),
    i18next.t("foe_data.age.EarlyMiddleAges", { lng: locale }),
    i18next.t("foe_data.age.HighMiddleAges", { lng: locale }),
    i18next.t("foe_data.age.LateMiddleAges", { lng: locale }),
    i18next.t("foe_data.age.ColonialAge", { lng: locale }),
    i18next.t("foe_data.age.IndustrialAge", { lng: locale }),
    i18next.t("foe_data.age.ProgressiveEra", { lng: locale }),
    i18next.t("foe_data.age.ModernEra", { lng: locale }),
    i18next.t("foe_data.age.PostmodernEra", { lng: locale }),
    i18next.t("foe_data.age.ContemporaryEra", { lng: locale }),
    i18next.t("foe_data.age.Tomorrow", { lng: locale }),
    i18next.t("foe_data.age.TheFuture", { lng: locale }),
    i18next.t("foe_data.age.ArcticFuture", { lng: locale }),
    i18next.t("foe_data.age.OceanicFuture", { lng: locale })
  ].join(", ");

  node = window.document.createElement("meta");
  node.name = "keywords";
  node.content = text;
  window.document.querySelector("head").appendChild(node);

  // Set alternatives lang
  for (let supportedLocale of supportedLocales) {
    if (supportedLocale === locale) {
      continue;
    }
    node = window.document.createElement("link");
    node.rel = "alternate";
    node.hreflang = supportedLocale;
    if (locale === defaultLocale) {
      node.href = `/${supportedLocale}${page.route}`;
    } else {
      if (supportedLocale === defaultLocale) {
        if (page.route === `/${locale}/`) {
          node.href = "/";
        } else {
          node.href = page.route.substr(locale.length + 1);
        }
      } else {
        if (page.route === `/${locale}/`) {
          node.href = `/${supportedLocale}/`;
        } else {
          node.href = `/${supportedLocale}${page.route.substr(locale.length + 1)}`;
        }
      }
    }
    window.document.querySelector("head").appendChild(node);
  }

  return window.document.querySelector("html").outerHTML;
};

function generateSitemapRoutes(baseURL, locales, routes) {
  const result = [];
  const lastmodISO = new Date().toISOString();
  for (let route of routes) {
    let obj = {};
    obj.url = `${baseURL}${route.route}`;
    obj.changefreq = "weekly";
    obj.lastmodISO = lastmodISO;
    const links = [];
    for (let locale of locales) {
      if (locale === defaultLocale) {
        links.push({ lang: locale, url: `${baseURL}${route.route}` });
      } else {
        links.push({ lang: locale, url: `${baseURL}/${locale}${route.route}` });
      }
    }
    obj.links = links;

    result.push(obj);
    for (let subRoute of route.dynamic) {
      let subObj = {};
      subObj.url = `${baseURL}${route.route}/${subRoute}`;
      subObj.changefreq = "weekly";
      subObj.lastmodISO = lastmodISO;
      const links = [];
      for (let locale of locales) {
        if (locale === defaultLocale) {
          links.push({ lang: locale, url: `${baseURL}${route.route}/${subRoute}` });
        } else {
          links.push({ lang: locale, url: `${baseURL}/${locale}${route.route}/${subRoute}` });
        }
      }
      subObj.links = links;

      result.push(subObj);
    }
  }

  return result;
}

// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          base: "/"
        }
      }
    : {};

const hostname = process.env.DEPLOY_ENV === "GH_PAGES" ? "https://foe-tools.github.io" : "";

const sitemap =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        sitemap: {
          hostname: "https://foe-tools.github.io"
        }
      }
    : {};

const defaultRoutes = [
  { route: "/", dynamic: [] },
  { route: "/about", dynamic: [] },
  { route: "/contributors", dynamic: [] },
  { route: "/changelog", dynamic: [] },
  {
    route: "/gb-investment",
    dynamic: Object.keys(gbs),
    payload(gb) {
      return require("./lib/foe-data/gbs-data/" + gb);
    }
  },
  { route: "/secure-position", dynamic: [] },
  { route: "/cf-calculator", dynamic: [] },
  { route: "/gb-statistics", dynamic: [] },
  { route: "/gb-forecast-cost", dynamic: [] },
  { route: "/trade", dynamic: [] },
  { route: "/campaign-cost", dynamic: [] }
];

module.exports = {
  ...routerBase,
  ...sitemap,

  loading: {
    color: "#3498db",
    failedColor: "#e74c3c"
  },

  router: {
    middleware: "i18next",
    scrollBehavior() {
      return { x: 0, y: 0 };
    }
  },
  plugins: [
    { src: "~/plugins/i18next.js" },
    { src: "~/plugins/clipboard.js" },
    { src: "~/plugins/numeral-plugin.js" },
    { src: "~/plugins/moment.js" }
  ],
  generate: {
    fallback: true,
    routes: function() {
      let result = [];
      let prefix;
      for (let locale of supportedLocales) {
        prefix = locale === defaultLocale ? "" : `/${locale}`;
        for (let route of defaultRoutes) {
          result.push(prefix + route.route);
          for (let subRoute of route.dynamic) {
            if (route.payload) {
              result.push({
                route: `${prefix}${route.route}/${subRoute}`,
                payload: route.payload(subRoute)
              });
            } else {
              result.push(`${prefix}${route.route}/${subRoute}`);
            }
          }
        }
      }
      return result;
    }
  },

  modules: ["@nuxtjs/sitemap", "cookie-universal-nuxt", "nuxt-buefy"],
  buefy: { defaultIconPack: "fas", materialDesignIcons: false },
  mode: "spa",
  hooks(hook) {
    /**
     * This hook will add some SEO attributes for each generated files
     */
    hook("generate:page", page => {
      page.html = modifyHtml(page, getLocale(page.route));
    });
  },
  sitemap: {
    generate: true,
    routes: generateSitemapRoutes(hostname, supportedLocales, defaultRoutes)
  }
};

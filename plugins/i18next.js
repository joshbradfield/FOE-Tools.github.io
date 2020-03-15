import Utils from "~/scripts/utils";

import Vue from "vue";
import VueI18Next from "@panter/vue-i18next";
import common from "../locales/common";

import i18next from "i18next";

import { defaultLocale, numeral, numeralSpecialLocales, supportedLocales } from "~/scripts/locales";
const languageList = ["common"].concat(supportedLocales);

i18next.init({
  lng: defaultLocale,
  debug: false,
  whitelist: languageList,
  ns: ["translation"],
  defaultNS: "translation",
  fallbackLng: "en",
  fallbackNS: "common",
  preload: ["en"],
  interpolation: {
    format: function(value, format, lng) {
      if (format === "number") {
        if (numeralSpecialLocales[lng]) {
          numeral.locale(numeralSpecialLocales[lng]);
        } else {
          numeral.locale(lng);
        }
        return numeral(value).format("0,0");
      }
      return value;
    }
  }
});

Vue.use(VueI18Next);

export default async ({ app, store, route }) => {
  if (app.$cookies.get("locale") === null || supportedLocales.indexOf(app.$cookies.get("locale")) === -1) {
    app.$cookies.set("locale", route.params.lang || defaultLocale, {
      path: "/",
      expires: Utils.getDefaultCookieExpireTime()
    });
  }

  i18next.changeLanguage(app.$cookies.get("locale"));
  i18next.language = app.$cookies.get("locale");
  i18next.loadLanguages(["en", app.$cookies.get("locale")]);
  i18next.addResourceBundle("en", "common", common.common, true, true);
  const enRess = await app.$axios.$get("/locales/en/translation.json");
  const ress = await app.$axios.$get(`/locales/${app.$cookies.get("locale")}/translation.json`);
  i18next.addResourceBundle("en", "translation", enRess.translation, true, true);
  i18next.addResourceBundle(app.$cookies.get("locale"), "translation", ress.translation, true, true);

  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18Next(i18next);
  app.defaultLocale = defaultLocale;
  store.state.supportedLocales = supportedLocales;

  Vue.prototype.$t = i18next.t.bind(i18next);
  Vue.prototype.$i18next = i18next;
  Vue.prototype.$i18nExists = i18next.exists.bind(i18next);
  Vue.prototype.$i18nPath = link => {
    if (app.i18n.i18next.language === app.defaultLocale) {
      return `${link.charAt(0) === "/" ? "" : "/"}${link}`;
    }

    if (link === "/") {
      return `/${app.i18n.i18next.language}/`;
    }

    return `/${app.i18n.i18next.language}/${link}`;
  };
};

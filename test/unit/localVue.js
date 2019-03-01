import { config } from "@vue/test-utils";
import { createLocalVue, RouterLinkStub } from "@vue/test-utils";

import Vuex from "vuex";
import * as storeStructure from "~/store/index";
import VueClipboards from "vue-clipboards";
import VueI18Next from "@panter/vue-i18next";
import { i18next, defaultLocale, supportedLocales, initializeI18next } from "~/scripts/i18n";
import VueNumeral from "~/plugins/numeral";
import Buefy from "buefy";

import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
momentDurationFormatSetup(moment);

export function getView() {
  // create an extended `Vue` constructor
  const localVue = createLocalVue();

  //////////
  // Vuex //
  //////////

  localVue.use(Vuex);
  const store = new Vuex.Store(storeStructure);

  ///////////////
  // Clipboard //
  ///////////////

  localVue.use(VueClipboards);

  ///////////////
  // Clipboard //
  ///////////////

  localVue.use({
    install(Vue) {
      Vue.prototype.$moment = moment;
    }
  });

  /////////////
  // i18next //
  /////////////

  initializeI18next();
  localVue.use(VueI18Next);

  const i18n = new VueI18Next(i18next);

  localVue.use({
    install(Vue) {
      Vue.prototype.i18n = i18n;
      Vue.prototype.$i18next = i18next;
      Vue.prototype.$i18nExists = (...args) => i18n.i18next.exists(...args);
      Vue.prototype.$t = (...args) => i18n.i18next.t(...args);
      Vue.prototype.defaultLocale = defaultLocale;
      store.state.supportedLocales = supportedLocales;

      Vue.prototype.$i18nPath = link => {
        if (i18n.i18next.language === defaultLocale) {
          return `${link.charAt(0) === "/" ? "" : "/"}${link}`;
        }

        if (link === "/") {
          return `/${i18n.i18next.language}/`;
        }

        return `/${i18n.i18next.language}/${link}`;
      };
    }
  });

  /////////////
  // Numeral //
  /////////////

  localVue.use(VueNumeral);

  ///////////
  // Buefy //
  ///////////

  localVue.use(Buefy, { defaultIconPack: "fas", materialDesignIcons: false });

  ////////////////
  // Clear mock //
  ////////////////

  config.mocks.$cookies.set.mockClear();

  return {
    localVue,
    store,
    i18n
  };
}

///////////////////
// Global Config //
///////////////////

config.mocks["$cookies"] = {
  get: jest.fn().mockImplementation(key => {
    switch (key) {
      case "locale":
        return i18next.language;
      case "yourArcBonus":
        return 90.6;
    }
    return undefined;
  }),
  set: jest.fn()
};

const url = "https://test.foe-tools.github.io";
config.mocks["$nuxt"] = {
  $route: {
    path: url
  }
};

config.stubs["NuxtLink"] = RouterLinkStub;

global.window = Object.create(window);
Object.defineProperty(window, "location", {
  value: {
    href: url
  },
  writable: true
});

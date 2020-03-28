import { config } from "@vue/test-utils";
import { createLocalVue, RouterLinkStub } from "@vue/test-utils";
import { defaultPromotionMessages } from "~/scripts/promotion-message-builder";
import clone from "lodash.clonedeep";
import merge from "lodash.merge";

import Vuex from "vuex";
import * as storeStructure from "~/store/index";
import * as storeGlobalStructure from "~/store/global";
import * as storeProfilesStructure from "~/store/profile";
import VueClipboards from "vue-clipboards";
import VueI18Next from "@panter/vue-i18next";
import { defaultLocale, supportedLocales } from "~/scripts/locales";
import { i18next, initializeI18next } from "~/scripts/i18n";
import VueNumeral from "~/plugins/numeral";
import Buefy from "buefy";

import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
momentDurationFormatSetup(moment);

export function getView(storeConf) {
  let globalStore = {};
  let profileStore = {};

  if (storeConf) {
    globalStore = "globalStore" in storeConf ? storeConf.globalStore : {};
    profileStore = "profileStore" in storeConf ? storeConf.profileStore : {};
  }

  // create an extended `Vue` constructor
  const localVue = createLocalVue();

  //////////
  // Vuex //
  //////////

  localVue.use(Vuex);
  const store = new Vuex.Store({
    ...storeStructure,
    modules: {
      global: { namespaced: true, ...merge(clone(storeGlobalStructure), { state: globalStore }) },
      profile: { namespaced: true, ...merge(clone(storeProfilesStructure), { state: profileStore }) },
      foe: {
        namespaced: true,
        state: {
          campaignCost: require("~/lib/foe-data/campaign-cost.js"),
          gbs: require("~/lib/foe-data/gbs.js"),
          goods: require("~/lib/foe-data/goods.js")
        }
      }
    }
  });

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
      store.set("supportedLocales", supportedLocales);

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

const getAllCookies = () => {
  return {
    locale: i18next.language,
    cookieDisclaimerDisplayed: false,
    survey: [],
    gbSelectMode: "select",
    fixedMainMenu: true,
    haveReadLocaleInfoAvailable: false,
    customPromotionMessagesTemplates: [],
    displayTableCard: false,
    haveReadTipAboutAddInvestor: false,
    dayNightMode: "day",
    dayStart: "07:00",
    nightStart: "18:30",
    lastVisitVersion: "",

    gbShowPrefix: true,
    gbShowSuffix: true,
    displayGbName: true,
    showSnipe: false,
    yourAge: "BronzeAge",
    shortName: false,
    showLevel: true,
    yourArcBonus: 90.6,
    yourCfBoost: 0,
    gbPrefix: "",
    gbSuffix: "",
    showOnlySecuredPlaces: false,
    promotionMessageList: defaultPromotionMessages
  };
};

config.mocks["$cookies"] = {
  getAll: jest.fn().mockImplementation(getAllCookies),
  get: jest.fn().mockImplementation(key => {
    const cookies = getAllCookies();
    if (key in cookies) {
      return cookies[key];
    }

    return undefined;
  }),
  set: jest.fn(),
  remove: jest.fn()
};

const url = "https://test.foe-tools.github.io";
config.mocks["$nuxt"] = {
  $route: {
    path: url
  }
};

config.mocks["$clone"] = value => clone(value);

config.stubs["NuxtLink"] = RouterLinkStub;

global.window = Object.create(window);
Object.defineProperty(window, "location", {
  value: {
    href: url
  },
  writable: true
});

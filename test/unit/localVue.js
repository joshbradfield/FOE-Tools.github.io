import { config } from "@vue/test-utils";
import { createLocalVue, RouterLinkStub } from "@vue/test-utils";

import Vuex from "vuex";
import * as storeStructure from "~/store/index";
import VueClipboards from "vue-clipboards";
import VueI18Next from "@panter/vue-i18next";
import { i18next, defaultLocale, supportedLocales } from "~/scripts/i18n";
import VueNumeral from "~/plugins/numeral";
import Buefy from "buefy";

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

  /////////////
  // i18next //
  /////////////

  localVue.use(VueI18Next);

  const i18n = new VueI18Next(i18next);

  localVue.use({
    install(Vue) {
      Vue.prototype.i18n = i18n;
      Vue.prototype.$t = key => i18next.t(key);
      Vue.prototype.defaultLocale = defaultLocale;
      store.state.supportedLocales = supportedLocales;

      Vue.prototype.$i18nPath = link => {
        if (i18n.language === defaultLocale) {
          return `${link.charAt(0) === "/" ? "" : "/"}${link}`;
        }

        if (link === "/") {
          return `/${i18n.language}/`;
        }

        return `/${i18n.language}/${link}`;
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
    return null;
  }),
  set: jest.fn()
};

config.stubs["NuxtLink"] = RouterLinkStub;

import { defaultLocale } from "~/scripts/i18n";
import * as Errors from "~/scripts/errors";

import Vue from "vue";

const hero = {
  title: "components.site_layout.hero.title",
  subtitle: "components.site_layout.hero.slogan_html"
};

export const state = () => ({
  /**
   * Contains all no-dynamic routes
   */
  routes: {
    home: { key: "home", link: "" },
    gb_investment: { key: "gb_investment", link: "gb-investment" },
    secure_position: { key: "secure_position", link: "secure-position" },
    cf_calculator: { key: "cf_calculator", link: "cf-calculator" },
    about: { key: "about", link: "about" },
    contributors: { key: "contributors", link: "contributors" },
    changelog: { key: "changelog", link: "changelog" },
    gb_statistics: { key: "gb_statistics", link: "gb-statistics" },
    gb_forecast_cost: { key: "gb_forecast_cost", link: "gb-forecast-cost" },
    trade: { key: "trade", link: "trade" },
    campaign_cost: { key: "campaign_cost", link: "campaign-cost" },
    help_to_translate_the_site: { key: "help_to_translate_the_site", link: "help-to-translate-the-site" },
    survey: { key: "survey", link: "survey" },
    contact: { key: "contact", link: "contact" }
  },

  /**
   * Current locale used
   */
  locale: defaultLocale,

  /**
   * Current location
   */
  currentLocation: "",

  /**
   * Hero info
   */
  hero,

  /**
   * Array that contains URL query (for permalink)
   */
  urlQuery: {},

  /**
   * Namespace for URL Query (to have different url query in a single page)
   */
  urlQueryNamespace: {},

  /**
   * Check if current location is permalink. True if permalink, False otherwise
   */
  isPermalink: false,

  /**
   * True for dark theme, false for light theme
   */
  isDarkTheme: false,

  /**
   * True for main menu always visible, false otherwise
   */
  isFixedMainMenu: false,

  /**
   * True for datalist (auto-complete) mode for the gb selector, false for select
   */
  isGbSelectModeDatalist: false,

  /**
   * Contains survey
   */
  survey: []
});

export const mutations = {
  /**
   * Mutator of locale
   * @param state Reference of state
   * @param value New value
   */
  SET_LANG(state, value) {
    Vue.set(state, "locale", value);
  },

  /**
   * Mutator of hero
   * @param state Reference of state
   * @param value New value
   */
  SET_HERO(state, value) {
    Vue.set(state, "hero", value);
  },

  /**
   * Restore default value of hero
   * @param state
   */
  RESTORE_HERO(state) {
    Vue.set(state, "hero", hero);
  },

  /**
   * Restore global state of page
   * @param state Reference of state
   */
  RESET_LOCATION(state) {
    Vue.set(state, "urlQuery", {});
    Vue.set(state, "urlQueryNamespace", {});
    Vue.set(state, "isPermalink", false);
  },

  /**
   * Mutator of currentLocation
   * @param state Reference of state
   * @param value New value
   */
  SET_CURRENT_LOCATION(state, value) {
    Vue.set(state, "currentLocation", value);
  },

  /**
   * Add a query parameter into urlQuery
   * @param state Reference of state
   * @param obj {object} Contains an element 'key' and 'value'
   */
  ADD_URL_QUERY: ({ urlQuery, urlQueryNamespace }, obj) => {
    if ("ns" in obj && obj.ns && obj.ns.length > 0) {
      if (obj.key in urlQuery || (obj.ns in urlQueryNamespace && obj.key in urlQueryNamespace[obj.ns])) {
        /* FIXME: Nuxt bug
         * This bug can occur due to a Nuxt bug. Indeed, components can be rendered twice…
         * See: https://github.com/nuxt/nuxt.js/issues/4757
         */
        // throw new Errors.keyAlreadyExistsInUrlQueryOrUrlQueryNamespaceException({ key: obj.key });
        console.error(new Errors.keyAlreadyExistsInUrlQueryOrUrlQueryNamespaceException({ key: obj.key }));
        return;
      }
      if (!(obj.ns in urlQueryNamespace)) {
        Vue.set(urlQueryNamespace, obj.ns, {});
      }
      Vue.set(urlQueryNamespace[obj.ns], obj.key, obj.value);
    } else {
      if (obj.key in urlQuery) {
        /* FIXME: Nuxt bug
         * This bug can occur due to a Nuxt bug. Indeed, components can be rendered twice…
         * See: https://github.com/nuxt/nuxt.js/issues/4757
         */
        // throw new Errors.keyAlreadyExistsInUrlQueryException({ key: obj.key });
        console.error(new Errors.keyAlreadyExistsInUrlQueryException({ key: obj.key }));
        return;
      }
      Vue.set(urlQuery, obj.key, obj.value);
    }
  },

  /**
   * Update a query parameter
   * @param state Reference of state
   * @param obj {object} Contains an element 'key' and 'value'
   */
  UPDATE_URL_QUERY: ({ urlQuery, urlQueryNamespace }, obj) => {
    if ("ns" in obj && obj.ns && obj.ns.length > 0) {
      if (!(obj.ns in urlQueryNamespace)) {
        /* FIXME: Nuxt bug
         * This bug can occur due to a Nuxt bug. Indeed, components can be rendered twice…
         * See: https://github.com/nuxt/nuxt.js/issues/4757
         */
        // throw new Errors.namespaceNotFoundException({ key: obj.ns });
        console.error(new Errors.namespaceNotFoundException({ key: obj.ns }));
        return;
      }
      const { ns, key, value } = obj;
      Vue.set(urlQueryNamespace[ns], key, value);
    } else {
      const key = obj.key;
      Vue.set(urlQuery, key, obj.value);
    }
  },

  /**
   * Mutator of isPermalink
   * @param state Reference of state
   * @param value New value
   */
  IS_PERMALINK: (state, value) => {
    Vue.set(state, "isPermalink", value);
  },

  /**
   * Mutator of darkTheme
   * @param state Reference of state
   * @param value New value
   */
  IS_DARK_THEME: (state, value) => {
    Vue.set(state, "isDarkTheme", value);
  },

  /**
   * Mutator of fixedMainMenu
   * @param state Reference of state
   * @param value New value
   */
  IS_FIXED_MAIN_MENU: (state, value) => {
    Vue.set(state, "isFixedMainMenu", value);
  },

  /**
   * Mutator of isGbSelectModeDatalist
   * @param state Reference of state
   * @param value New value
   */
  IS_GB_SELECT_MODE_DATALIST: (state, value) => {
    Vue.set(state, "isGbSelectModeDatalist", value);
  },

  SET_SURVEY: /* istanbul ignore next */ (state, data) => {
    state.survey = data;
  }
};

export const getters = {
  getUrlQuery: state => (ns = "") => {
    if (!ns || ns.length === 0) {
      return state.urlQuery;
    }
    return Object.assign(JSON.parse(JSON.stringify(state.urlQuery)), state.urlQueryNamespace[ns]);
  }
};

export const actions = {
  nuxtServerInit: /* istanbul ignore next */ async function(elt) {
    let urlParam = "";
    if (
      this.$cookies.get("survey") &&
      this.$cookies.get("survey") instanceof Array &&
      this.$cookies.get("survey").length
    ) {
      urlParam = "?_id_nin=" + this.$cookies.get("survey").join("&_id_nin=");
    }
    const { data } = await this.$axios.get(`${process.env.surveyURL}${urlParam}`);
    if (data && data instanceof Array) {
      elt.commit("SET_SURVEY", data);
    }
  }
};

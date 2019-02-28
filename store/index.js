import { defaultLocale } from "~/scripts/i18n";
import {
  keyAlreadyExistsInUrlQueryException,
  keyAlreadyExistsInUrlQueryOrUrlQueryNamespaceException,
  namespaceNotFoundException
} from "~/scripts/errors";

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
    campaign_cost: { key: "campaign_cost", link: "campaign-cost" }
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
   * Array that contains URL query (for perma-link)
   */
  urlQuery: {},

  /**
   * Namespace for URL Query (to have differenet url query in a single page)
   */
  urlQueryNamespace: {},

  /**
   * Check if current location is permalink. True if permalink, False otherwise
   */
  isPermalink: false
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
   * Mutator of currentLocation
   * @param state Reference of state
   * @param value New value
   */
  SET_CURRENT_LOCATION(state, value) {
    Vue.set(state, "currentLocation", value);
    Vue.set(state, "urlQuery", {});
    Vue.set(state, "urlQueryNamespace", {});
    Vue.set(state, "isPermalink", false);
  },

  /**
   * Add a query parameter into urlQuery
   * @param state Reference of state
   * @param obj {object} Contains an elemenet 'key' and 'value'
   */
  ADD_URL_QUERY: ({ urlQuery, urlQueryNamespace }, obj) => {
    if ("ns" in obj && obj.ns && obj.ns.length > 0) {
      if (obj.key in urlQuery || (obj.ns in urlQueryNamespace && obj.key in urlQueryNamespace[obj.ns])) {
        throw keyAlreadyExistsInUrlQueryOrUrlQueryNamespaceException(obj.key);
      }
      if (!(obj.ns in urlQueryNamespace)) {
        Vue.set(urlQueryNamespace, obj.ns, {});
      }
      Vue.set(urlQueryNamespace[obj.ns], obj.key, obj.value);
    } else {
      if (obj.key in urlQuery) {
        throw keyAlreadyExistsInUrlQueryException(obj.key);
      }
      Vue.set(urlQuery, obj.key, obj.value);
    }
  },

  /**
   * Update a query parameter
   * @param state Reference of state
   * @param obj {object} Contains an elemenet 'key' and 'value'
   */
  UPDATE_URL_QUERY: ({ urlQuery, urlQueryNamespace }, obj) => {
    if ("ns" in obj && obj.ns && obj.ns.length > 0) {
      if (!(obj.ns in urlQueryNamespace)) {
        throw namespaceNotFoundException(obj.ns);
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

const i18nPrefix = "routes.about.";

export default {
  head() {
    return { title: this.$t(i18nPrefix + "title") };
  },
  data() {
    this.$store.commit("SET_CURRENT_LOCATION", "about");
    this.$store.commit("RESTORE_HERO");

    return {
      i18nPrefix,
      cookiesData: [
        { name: "cookieDisclaimerDisplayed", path: "/", key: "root" },
        { name: "gbi_tab", path: "/", key: "root" },
        { name: "gbPrefix", path: "/", key: "root" },
        { name: "gbSuffix", path: "/", key: "root" },
        { name: "locale", path: "/", key: "root" },
        { name: "shortName", path: "/", key: "root" },
        { name: "showLevel", path: "/", key: "root" },
        { name: "yourArcBonus", path: "/", key: "root" },
        { name: "yourCfBoost", path: "/", key: "root" },
        { name: "haveReadTipAboutAddInvestor", path: "/", key: "root" },
        { name: "dayNightMode", path: "/", key: "root" },
        { name: "dayStart", path: "/", key: "root" },
        { name: "nightStart", path: "/", key: "root" },
        { name: "showSnipe", path: "/", key: "root" },

        { name: "coins", path: "/cf-calculator", key: "cf-calculator" },
        { name: "fpBy24h", path: "/cf-calculator", key: "cf-calculator" },
        { name: "goods", path: "/cf-calculator", key: "cf-calculator" },
        { name: "otherRq", path: "/cf-calculator", key: "cf-calculator" },
        { name: "cumulativeQuest", path: "/cf-calculator", key: "cf-calculator" },
        { name: "secondRq", path: "/cf-calculator", key: "cf-calculator" },
        { name: "supplies", path: "/cf-calculator", key: "cf-calculator" },
        { name: "suppliesGathered", path: "/cf-calculator", key: "cf-calculator" },
        { name: "yourAge", path: "/cf-calculator", key: "cf-calculator" },

        { name: "investorPercentageCustom_x", path: "/gb-investment/:gb", key: "gb-investment" },
        { name: "investorPercentageGlobal", path: "/gb-investment/:gb", key: "gb-investment" },
        { name: "investorParticipation_x", path: "/gb-investment/:gb", key: "gb-investment" },
        { name: "level", path: "/gb-investment/:gb", key: "gb-investment" },
        { name: "ownerInvestment", path: "/gb-investment/:gb", key: "gb-investment" },
        { name: "showPx", path: "/gb-investment/:gb", key: "gb-investment" },
        { name: "takingPlaceInConsideration", path: "/gb-investment/:gb", key: "gb-investment" },
        { name: "targetLevel", path: "/gb-investment/:gb", key: "gb-investment" },
        { name: "displayGbName", path: "/gb-investment/:gb", key: "gb-investment" },
        { name: "investorParticipation", path: "/gb-investment/:gb", key: "gb-investment" },

        { name: "currentDeposits", path: "/gb-investment/:gb, /secure-position", key: "secure-position" }
      ]
    };
  }
};

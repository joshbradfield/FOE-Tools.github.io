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
        { name: "cookieDisclaimerDisplayed" },
        { name: "gbi_tab" },
        { name: "gbPrefix" },
        { name: "gbSuffix" },
        { name: "locale" },
        { name: "shortName" },
        { name: "showLevel" },
        { name: "yourArcBonus" },
        { name: "yourCfBoost" },
        { name: "haveReadTipAboutAddInvestor" },
        { name: "dayNightMode" },
        { name: "dayStart" },
        { name: "nightStart" },
        { name: "showSnipe" },
        { name: "coins" },
        { name: "fpBy24h" },
        { name: "goods" },
        { name: "otherRq" },
        { name: "cumulativeQuest" },
        { name: "secondRq" },
        { name: "supplies" },
        { name: "suppliesGathered" },
        { name: "yourAge" },
        { name: "investorPercentageCustom_x" },
        { name: "investorPercentageGlobal" },
        { name: "investorParticipation_x" },
        { name: "level" },
        { name: "ownerInvestment" },
        { name: "showPx" },
        { name: "takingPlaceInConsideration" },
        { name: "targetLevel" },
        { name: "displayGbName" },
        { name: "investorParticipation" },
        { name: "displayTableCard" },
        { name: "from" },
        { name: "to" },
        { name: "showPlace" }
      ]
    };
  }
};

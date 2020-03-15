export const state = () => ({
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
  locale: "en",
  lastVisitVersion: "",
  donationConversion: "",
  currentProfile: "",
  profiles: []
});

export const mutations = {
  updateDayNightMode(state, value) {
    state.dayNightMode = value;
  },

  updateCurrentProfile(state, value) {
    state.currentProfile = value;
  },

  updateProfiles(state, value) {
    state.profiles = value;
  },

  updateSpecificKey(state, { key, value }) {
    state[key] = value;
  }
};

export const getters = {
  currentProfile: state => state.currentProfile
};

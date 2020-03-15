import set from "lodash.set";
import { defaultPromotionMessages } from "~/scripts/promotion-message-builder";

export const state = () => ({
  profiles: {}
});

export const mutations = {
  setProfile(state, { profileKey, profile }) {
    if (!Object.keys(state.profiles[profileKey]).length) {
      state.profiles[profileKey] = {
        gbShowPrefix: true,
        gbShowSuffix: true,
        displayGbName: true,
        promotionMessageList: defaultPromotionMessages,
        showSnipe: false,
        yourAge: "BronzeAge",
        shortName: false,
        showLevel: true,
        yourArcBonus: 90,
        yourCfBoost: 0,
        gbPrefix: "",
        gbSuffix: "",
        showOnlySecuredPlaces: false,
        cf: {
          coins: 0,
          supplies: 0,
          goods: 0,
          fpBy24h: 0,
          otherRq: 0,
          suppliesGathered: 0,
          cumulativeQuest: 0,
          secondRq: false
        },
        gb: {}
      };
    }
    for (const key in profile) {
      state.profiles[profileKey][key] = JSON.parse(JSON.stringify(profile[key]));
    }
  },

  addProfile(state, { key, profile }) {
    state.profiles[key] = profile;
  },

  addGB(state, { key, value }) {
    state.profiles.gb[key] = value;
  },

  updateSpecificKey(state, { key, value }) {
    set(state, key, value);
  }
};

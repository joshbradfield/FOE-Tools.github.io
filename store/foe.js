import set from "lodash.set";

export const state = () => ({
  campaignCost: {},
  gbs: {},
  goods: {}
});

export const mutations = {
  updateSpecificKey(state, { key, value }) {
    set(state, key, value);
  }
};

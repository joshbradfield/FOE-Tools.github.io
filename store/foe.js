import { make } from "vuex-pathify";

export const state = () => ({
  campaignCost: {},
  gbs: {},
  goods: {}
});

export const mutations = {
  ...make.mutations(state)
};

export const getters = {
  ...make.getters(state)
};

import { shallowMount } from "@vue/test-utils";
import Component from "../../../components/gb-statistics/GbStatistics";
import { getView } from "../localVue";

const factory = (mocks = {}) => {
  const { localVue, store } = getView();
  return shallowMount(Component, {
    localVue: localVue,
    store: store,
    mocks: {
      $route: {
        query: {}
      },
      ...mocks
    }
  });
};

const defaultHidden = () => [
  false,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true
];

describe("GbStatistics", () => {
  test("Is a Vue instance", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("Initialize with custom values", () => {
    const wrapper = factory({
      $route: {
        query: {
          gbs_s: "reward_level",
          gbs_f: 10,
          gbs_t: 60,
          gbs_h: "011111111111111110"
        }
      }
    });

    expect(wrapper.vm.statSelector).toBe("reward_level");
    expect(wrapper.vm.$store.state.urlQuery["gbs_s"]).toBe("reward_level");

    expect(wrapper.vm.from).toBe(10);
    expect(wrapper.vm.errors.from).toBeFalsy();
    expect(wrapper.vm.$store.state.urlQuery["gbs_f"]).toBe(10);

    expect(wrapper.vm.to).toBe(60);
    expect(wrapper.vm.errors.to).toBeFalsy();
    expect(wrapper.vm.$store.state.urlQuery["gbs_t"]).toBe(60);

    let value = defaultHidden();
    value[value.length - 1] = false;
    expect(wrapper.vm.hidden).toEqual(value);
    expect(wrapper.vm.$store.state.urlQuery["gbs_h"]).toBe(value.map(k => (k ? 1 : 0)).join(""));
  });

  test('Change "statSelector" value', () => {
    const wrapper = factory();
    expect(wrapper.vm.statSelector).toBe("cost_level");
    wrapper.vm.statSelector = "reward_level";
    expect(wrapper.vm.statSelector).toBe("reward_level");
    expect(wrapper.vm.$store.state.urlQuery["gbs_s"]).toBe("reward_level");
  });

  test('Change "statSelector" invalid value', () => {
    const wrapper = factory();
    expect(wrapper.vm.statSelector).toBe("cost_level");
    wrapper.vm.statSelector = "foo";
    expect(wrapper.vm.statSelector).toBe("foo");
    expect(wrapper.vm.$store.state.urlQuery["gbs_s"]).toBe("cost_level");
  });

  test('Change "from" value', () => {
    const wrapper = factory();
    expect(wrapper.vm.from).toBe(1);
    expect(wrapper.vm.errors.from).toBeFalsy();
    wrapper.vm.from = 42;
    expect(wrapper.vm.from).toBe(42);
    expect(wrapper.vm.errors.from).toBeFalsy();
    expect(wrapper.vm.$store.state.urlQuery["gbs_f"]).toBe(42);
  });

  test('Change "from" value with "statSelector" set to "reward_cost"', () => {
    const wrapper = factory();
    wrapper.vm.statSelector = "reward_cost";
    expect(wrapper.vm.from).toBe(1);
    expect(wrapper.vm.errors.from).toBeFalsy();
    wrapper.vm.from = 42;
    expect(wrapper.vm.from).toBe(42);
    expect(wrapper.vm.errors.from).toBeFalsy();
    expect(wrapper.vm.$store.state.urlQuery["gbs_f"]).toBe(42);
  });

  test('Change "from" value with "statSelector" set to "cost_reward"', () => {
    const wrapper = factory();
    const value = 42;
    wrapper.vm.statSelector = "cost_reward";
    expect(wrapper.vm.from).toBe(1);
    expect(wrapper.vm.errors.from).toBeFalsy();
    wrapper.vm.from = value;
    expect(wrapper.vm.from).toBe(value);
    expect(wrapper.vm.errors.from).toBeFalsy();
    expect(wrapper.vm.$store.state.urlQuery["gbs_f"]).toBe(value);
  });

  test('Change "from" invalid value', () => {
    const wrapper = factory();
    const value = -1;
    expect(wrapper.vm.from).toBe(1);
    expect(wrapper.vm.errors.from).toBeFalsy();
    wrapper.vm.from = value;
    expect(wrapper.vm.from).toBe(value);
    expect(wrapper.vm.errors.from).toBeTruthy();
    expect(wrapper.vm.$store.state.urlQuery["gbs_f"]).toBe(1);
  });

  test('Change "from" invalid type', () => {
    const wrapper = factory();
    const value = "foo";
    expect(wrapper.vm.from).toBe(1);
    expect(wrapper.vm.errors.from).toBeFalsy();
    wrapper.vm.from = value;
    expect(wrapper.vm.from).toBe(value);
    expect(wrapper.vm.errors.from).toBeTruthy();
    expect(wrapper.vm.$store.state.urlQuery["gbs_f"]).toBe(1);
  });

  test('Change "to" value', () => {
    const wrapper = factory();
    const value = 42;
    expect(wrapper.vm.to).toBe(80);
    expect(wrapper.vm.errors.to).toBeFalsy();
    wrapper.vm.to = value;
    expect(wrapper.vm.to).toBe(value);
    expect(wrapper.vm.errors.to).toBeFalsy();
    expect(wrapper.vm.$store.state.urlQuery["gbs_t"]).toBe(value);
  });

  test('Change "to" invalid value', () => {
    const wrapper = factory();
    const value = -1;
    expect(wrapper.vm.to).toBe(80);
    expect(wrapper.vm.errors.to).toBeFalsy();
    wrapper.vm.to = value;
    expect(wrapper.vm.to).toBe(value);
    expect(wrapper.vm.errors.to).toBeTruthy();
    expect(wrapper.vm.$store.state.urlQuery["gbs_t"]).toBe(80);
  });

  test('Change "to" invalid type', () => {
    const wrapper = factory();
    const value = "foo";
    expect(wrapper.vm.to).toBe(80);
    expect(wrapper.vm.errors.to).toBeFalsy();
    wrapper.vm.to = value;
    expect(wrapper.vm.to).toBe(value);
    expect(wrapper.vm.errors.to).toBeTruthy();
    expect(wrapper.vm.$store.state.urlQuery["gbs_t"]).toBe(80);
  });

  test('Change "to" valid value and error with "from"', () => {
    const wrapper = factory();
    wrapper.vm.errors.from = 21;
    expect(wrapper.vm.to).toBe(80);
    wrapper.vm.to = 42;
    expect(wrapper.vm.to).toBe(42);
    expect(wrapper.vm.$store.state.urlQuery["gbs_t"]).toBe(42);
    expect(wrapper.vm.errors.from).toBeFalsy();
    expect(wrapper.vm.errors.to).toBeFalsy();
  });

  test('Change "hidden" value ', () => {
    const wrapper = factory();
    let value = defaultHidden();
    expect(wrapper.vm.hidden).toEqual(value);
    value[value.length - 1] = false;
    wrapper.vm.hidden = value;
    expect(wrapper.vm.hidden).toEqual(value);
    expect(wrapper.vm.$store.state.urlQuery["gbs_h"]).toBe(value.map(k => (k ? 1 : 0)).join(""));
  });

  test('Change "lang" value', async () => {
    const wrapper = factory();
    expect(wrapper.vm.graphType.cost_level.title).toBe("Evolution of the cost of the levels according to the levels");

    await wrapper.vm.i18n.i18next.changeLanguage("fr");
    wrapper.vm.$store.state.locale = "fr";

    expect(wrapper.vm.graphType.cost_level.title).toBe("Évolution du coût des niveaux en fonction des niveaux");
  });

  test("Change visibility of age", () => {
    const wrapper = factory();
    let value = defaultHidden();
    expect(wrapper.vm.hidden).toEqual(value);
    wrapper.vm.switchVisibility(wrapper.vm.hidden.length - 1);
    value[value.length - 1] = false;
    expect(wrapper.vm.hidden).toEqual(value);
  });

  test("Change visibility of age with invalid value", () => {
    const wrapper = factory();
    let value = defaultHidden();
    expect(wrapper.vm.hidden).toEqual(value);
    wrapper.vm.switchVisibility(-1);
    expect(wrapper.vm.hidden).toEqual(value);
    wrapper.vm.switchVisibility(wrapper.vm.hidden.length);
    expect(wrapper.vm.hidden).toEqual(value);
  });
});

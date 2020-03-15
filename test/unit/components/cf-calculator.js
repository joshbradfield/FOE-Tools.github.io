import { shallowMount } from "@vue/test-utils";
import Component from "../../../components/cf-calculator/CfCalculator";
import { getView } from "../localVue";
import ages from "../../../lib/foe-data/ages";
import { getDefaultStore } from "../utils";

const profileID = "testID";

const factory = (mocks = {}) => {
  const { localVue, store } = getView(getDefaultStore());
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

const queryPrefix = "cfc_";
const variableToTests = [
  {
    name: "yourCfBoost",
    newValue: 150,
    queryName: queryPrefix + "ycfb"
  },
  {
    name: "coins",
    newValue: 150000,
    queryName: queryPrefix + "c"
  },
  {
    name: "supplies",
    newValue: 140000,
    queryName: queryPrefix + "s"
  },
  {
    name: "goods",
    newValue: 140000,
    queryName: queryPrefix + "g"
  },
  {
    name: "fpBy24h",
    newValue: 140000,
    queryName: queryPrefix + "fp"
  },
  {
    name: "otherRq",
    newValue: 42,
    queryName: queryPrefix + "orq"
  },
  {
    name: "suppliesGathered",
    newValue: 120,
    queryName: queryPrefix + "sp"
  }
];

describe("CfCalculator", () => {
  test("Is a Vue instance", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("Initialize with URL query", () => {
    const wrapper = factory({
      $route: {
        query: {
          cfc_ya: "ModernEra",
          cfc_ycfb: 1950,
          cfc_c: 1200000,
          cfc_s: 1000000,
          cfc_g: 1,
          cfc_fp: 2,
          cfc_orq: 3,
          cfc_sp: 4,
          cfc_srq: 1,
          cfc_cq: 6
        }
      }
    });

    expect(wrapper.vm.yourAge).toBe("ModernEra");
    expect(wrapper.vm.yourCfBoost).toBe(1950);
    expect(wrapper.vm.coins).toBe(1200000);
    expect(wrapper.vm.supplies).toBe(1000000);
    expect(wrapper.vm.goods).toBe(1);
    expect(wrapper.vm.fpBy24h).toBe(2);
    expect(wrapper.vm.otherRq).toBe(3);
    expect(wrapper.vm.suppliesGathered).toBe(4);
    expect(wrapper.vm.secondRq).toBe(true);
    expect(wrapper.vm.cumulativeQuest).toBe(6);
  });

  test('Change "yourAge" value', () => {
    const wrapper = factory();
    const newValue = ages.IronAge.key;
    expect(wrapper.vm.yourAge).toBe(ages.BronzeAge.key);
    wrapper.vm.yourAge = newValue;
    expect(wrapper.vm.yourAge).toBe(newValue);
    expect(wrapper.vm.errors.yourAge).toBe(false);

    expect(wrapper.vm.$store.state.profile.profiles[profileID].yourAge).toBe(newValue);

    expect(wrapper.vm.$store.state.profile.profiles[profileID].cf.secondRq).toBe(false);
  });

  test('Change "yourAge" invalid value', () => {
    const wrapper = factory();
    const value = "foo";
    expect(wrapper.vm.yourAge).toBe(ages.BronzeAge.key);
    wrapper.vm.yourAge = value;
    expect(wrapper.vm.yourAge).toBe(value);
    expect(wrapper.vm.errors.yourAge).toBe(true);
  });

  test('Change "secondRq" value', () => {
    const wrapper = factory();
    const newValue = true;
    expect(wrapper.vm.secondRq).toBe(false);
    wrapper.vm.secondRq = newValue;
    expect(wrapper.vm.secondRq).toBe(newValue);

    expect(wrapper.vm.$store.state.profile.profiles[profileID].cf.secondRq).toBe(newValue);
  });

  test('Change "secondRq" value with custom "suppliesGathered', () => {
    const wrapper = factory();
    const value = true;
    const suppliesGatheredValue = 100;
    wrapper.vm.yourAge = ages.ColonialAge.key;
    expect(wrapper.vm.secondRq).toBe(false);
    wrapper.vm.suppliesGathered = suppliesGatheredValue;
    wrapper.vm.secondRq = value;

    expect(wrapper.vm.secondRq).toBe(value);
    expect(wrapper.vm.$store.state.profile.profiles[profileID].cf.suppliesGathered).toBe(suppliesGatheredValue);
    expect(wrapper.vm.$store.state.profile.profiles[profileID].cf.secondRq).toBe(value);
  });

  test('Change "secondRq" value set to false with custom "suppliesGathered"', () => {
    const wrapper = factory();
    const value = false;
    const suppliesGatheredValue = 100;
    expect(wrapper.vm.secondRq).toBe(false);
    wrapper.vm.suppliesGathered = suppliesGatheredValue;
    wrapper.vm.secondRq = !value;
    wrapper.vm.secondRq = value;
    expect(wrapper.vm.secondRq).toBe(value);

    expect(wrapper.vm.$store.state.profile.profiles[profileID].cf.secondRq).toBe(value);
    expect(wrapper.vm.$store.state.profile.profiles[profileID].cf.suppliesGathered).toBe(0);
  });

  for (const elt of variableToTests) {
    test(`Change "${elt.name}" value`, () => {
      const wrapper = factory();
      const value = elt.newValue;
      expect(wrapper.vm[elt.name]).toBe(0);
      expect(wrapper.vm.errors[elt.name]).toBe(false);
      wrapper.vm[elt.name] = value;
      expect(wrapper.vm[elt.name]).toBe(value);
      expect(wrapper.vm.$store.state.urlQuery[elt.queryName]).toBe(value);
    });

    test(`Change "${elt.name}" invalid value`, () => {
      const wrapper = factory();
      const value = -1;
      expect(wrapper.vm[elt.name]).toBe(0);
      wrapper.vm[elt.name] = value;
      expect(wrapper.vm[elt.name]).toBe(value);
      expect(wrapper.vm.errors[elt.name]).toBe(true);
      expect(wrapper.vm.$store.state.urlQuery[elt.queryName]).toBe(0);
    });
  }

  test('Change "cumulativeQuest" value', () => {
    const wrapper = factory();
    const value = 3;
    expect(wrapper.vm.cumulativeQuest).toBe(0);
    wrapper.vm.yourCfBoost = 1950;
    wrapper.vm.coins = 1000000;
    wrapper.vm.supplies = 1000000;
    wrapper.vm.cumulativeQuest = value;
    expect(wrapper.vm.cumulativeQuest).toBe(value);
    expect(wrapper.vm.$store.state.urlQuery["cfc_cq"]).toBe(value);
  });

  test('Change "cumulativeQuest" invalid value', () => {
    const wrapper = factory();
    const value = -1;
    expect(wrapper.vm.cumulativeQuest).toBe(0);
    wrapper.vm.yourCfBoost = 1950;
    wrapper.vm.coins = 1000000;
    wrapper.vm.supplies = 1000000;
    wrapper.vm.cumulativeQuest = value;
    expect(wrapper.vm.cumulativeQuest).toBe(value);
    expect(wrapper.vm.$store.state.urlQuery["cfc_cq"]).toBe(0);
  });

  test('Call "calculate" with infinite generator and cumulativeQuest set to 0', () => {
    const wrapper = factory();
    expect(wrapper.vm.cumulativeQuest).toBe(0);
    wrapper.vm.yourCfBoost = 1950;
    wrapper.vm.coins = 1000000;
    wrapper.vm.supplies = 1000000;
    wrapper.vm.cumulativeQuest = 0;
    wrapper.vm.calculate();
    expect(wrapper.vm.cumulativeQuest).toBe(0);
    expect(wrapper.vm.$store.state.urlQuery["cfc_cq"]).toBe(0);
  });
});

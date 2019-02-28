import { config, shallowMount } from "@vue/test-utils";
import Component from "../../../components/cf-calculator/CfCalculator";
import { getView } from "../localVue";
import ages from "../../../lib/foe-data/ages";

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

describe("CampaignCost", () => {
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

  test("Initialize with cookies", () => {
    const wrapper = factory({
      $cookies: {
        get: key => {
          switch (key) {
            case "yourAge":
              return "ModernEra";
            case "yourCfBoost":
              return 1950;
            case "coins":
              return 1200000;
            case "supplies":
              return 1000000;
            case "goods":
              return 1;
            case "fpBy24h":
              return 2;
            case "otherRq":
              return 3;
            case "suppliesGathered":
              return 4;
            case "secondRq":
              return true;
            case "cumulativeQuest":
              return 6;
          }
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
    const value = ages.IronAge.key;
    expect(wrapper.vm.yourAge).toBe(ages.BronzeAge.key);
    wrapper.vm.yourAge = value;
    expect(wrapper.vm.yourAge).toBe(value);
    expect(wrapper.vm.errors.yourAge).toBe(false);

    expect(config.mocks.$cookies.set.mock.calls.length).toBe(2);
    expect(config.mocks.$cookies.set.mock.calls[0][0]).toBe("yourAge");
    expect(config.mocks.$cookies.set.mock.calls[0][1]).toBe("IronAge");
    expect(config.mocks.$cookies.set.mock.calls[0][2].path).toBeTruthy();
    expect(config.mocks.$cookies.set.mock.calls[0][2].expires).toBeTruthy();

    expect(config.mocks.$cookies.set.mock.calls[1][0]).toBe("secondRq");
    expect(config.mocks.$cookies.set.mock.calls[1][1]).toBe(false);
    expect(config.mocks.$cookies.set.mock.calls[1][2].path).toBeTruthy();
    expect(config.mocks.$cookies.set.mock.calls[1][2].expires).toBeTruthy();
  });

  test('Change "yourAge" invalid value', () => {
    const wrapper = factory();
    const value = "foo";
    expect(wrapper.vm.yourAge).toBe(ages.BronzeAge.key);
    wrapper.vm.yourAge = value;
    expect(wrapper.vm.yourAge).toBe(value);
    expect(wrapper.vm.errors.yourAge).toBe(true);

    expect(config.mocks.$cookies.set.mock.calls.length).toBe(0);
  });

  test('Change "secondRq" value', () => {
    const wrapper = factory();
    const value = true;
    expect(wrapper.vm.secondRq).toBe(false);
    wrapper.vm.secondRq = value;
    expect(wrapper.vm.secondRq).toBe(value);

    expect(config.mocks.$cookies.set.mock.calls.length).toBe(1);
    expect(config.mocks.$cookies.set.mock.calls[0][0]).toBe("secondRq");
    expect(config.mocks.$cookies.set.mock.calls[0][1]).toBe(true);
    expect(config.mocks.$cookies.set.mock.calls[0][2].path).toBeTruthy();
    expect(config.mocks.$cookies.set.mock.calls[0][2].expires).toBeTruthy();
  });

  test('Change "secondRq" value with custom "suppliesGathered', () => {
    const wrapper = factory();
    const value = true;
    const suppliesGatheredValue = 100;
    expect(wrapper.vm.secondRq).toBe(false);
    wrapper.vm.suppliesGathered = suppliesGatheredValue;
    wrapper.vm.secondRq = value;
    expect(wrapper.vm.secondRq).toBe(value);

    expect(config.mocks.$cookies.set.mock.calls.length).toBe(2);
    expect(config.mocks.$cookies.set.mock.calls[0][0]).toBe("suppliesGathered");
    expect(config.mocks.$cookies.set.mock.calls[0][1]).toBe(suppliesGatheredValue);
    expect(config.mocks.$cookies.set.mock.calls[0][2].path).toBeTruthy();
    expect(config.mocks.$cookies.set.mock.calls[0][2].expires).toBeTruthy();

    expect(config.mocks.$cookies.set.mock.calls[1][0]).toBe("secondRq");
    expect(config.mocks.$cookies.set.mock.calls[1][1]).toBe(true);
    expect(config.mocks.$cookies.set.mock.calls[1][2].path).toBeTruthy();
    expect(config.mocks.$cookies.set.mock.calls[1][2].expires).toBeTruthy();
  });

  test('Change "secondRq" value set to false with custom "suppliesGathered', () => {
    const wrapper = factory();
    const value = false;
    const suppliesGatheredValue = 100;
    expect(wrapper.vm.secondRq).toBe(false);
    wrapper.vm.suppliesGathered = suppliesGatheredValue;
    wrapper.vm.secondRq = !value;
    config.mocks.$cookies.set.mockClear();

    wrapper.vm.secondRq = value;
    expect(wrapper.vm.secondRq).toBe(value);

    expect(config.mocks.$cookies.set.mock.calls.length).toBe(2);
    expect(config.mocks.$cookies.set.mock.calls[0][0]).toBe("secondRq");
    expect(config.mocks.$cookies.set.mock.calls[0][1]).toBe(false);
    expect(config.mocks.$cookies.set.mock.calls[0][2].path).toBeTruthy();
    expect(config.mocks.$cookies.set.mock.calls[0][2].expires).toBeTruthy();

    expect(config.mocks.$cookies.set.mock.calls[1][0]).toBe("suppliesGathered");
    expect(config.mocks.$cookies.set.mock.calls[1][1]).toBe(0);
    expect(config.mocks.$cookies.set.mock.calls[1][2].path).toBeTruthy();
    expect(config.mocks.$cookies.set.mock.calls[1][2].expires).toBeTruthy();
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
    expect(wrapper.vm.$store.state.urlQuery["cfc_cq"]).toBe(3);
  });
});

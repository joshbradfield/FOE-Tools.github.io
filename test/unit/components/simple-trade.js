import { shallowMount } from "@vue/test-utils";
import Component from "../../../components/simple-trade/SimpleTrade";
import { fairTradeArray } from "~/scripts/trade";
import { agesGoods } from "~/lib/foe-data/goods";
import { getView } from "../localVue";

const factory = () => {
  const { localVue, store } = getView();
  return shallowMount(Component, {
    propsData: {
      tradeArray: fairTradeArray
    },
    localVue,
    store
  });
};

const dataCheckResult = [
  {
    age: Object.keys(fairTradeArray)[3],
    value: 500,
    splitValue: 1000,
    result: {
      ArcticFuture: { ratio: 0, show: false, split: "", value: 0 },
      BronzeAge: { ratio: 0, show: false, split: "", value: 0 },
      ColonialAge: { ratio: 0, show: false, split: "", value: 0 },
      ContemporaryEra: { ratio: 0, show: false, split: "", value: 0 },
      EarlyMiddleAges: { ratio: 2, show: true, split: 1000, value: "1,000" },
      HighMiddleAges: { ratio: 1, show: true, split: 500, value: "500" },
      IndustrialAge: { ratio: 0, show: false, split: "", value: 0 },
      IronAge: { ratio: 0, show: false, split: "", value: 0 },
      LateMiddleAges: { ratio: 0.5, show: true, split: 250, value: "250" },
      ModernEra: { ratio: 0, show: false, split: "", value: 0 },
      OceanicFuture: { ratio: 0, show: false, split: "", value: 0 },
      PostmodernEra: { ratio: 0, show: false, split: "", value: 0 },
      ProgressiveEra: { ratio: 0, show: false, split: "", value: 0 },
      TheFuture: { ratio: 0, show: false, split: "", value: 0 },
      Tomorrow: { ratio: 0, show: false, split: "", value: 0 },
      VirtualFuture: { ratio: 0, show: false, split: "", value: 0 }
    }
  },
  {
    age: Object.keys(fairTradeArray)[3],
    value: 427,
    splitValue: 100,
    result: {
      ArcticFuture: { ratio: 0, show: false, split: "", value: 0 },
      BronzeAge: { ratio: 0, show: false, split: "", value: 0 },
      ColonialAge: { ratio: 0, show: false, split: "", value: 0 },
      ContemporaryEra: { ratio: 0, show: false, split: "", value: 0 },
      EarlyMiddleAges: {
        ratio: 2,
        show: true,
        split: "4 × (50 HMA for 100 EMA) and 1 × (14 HMA for 27 EMA)",
        value: "854"
      },
      HighMiddleAges: {
        ratio: 1,
        show: true,
        split: "4 × (100 HMA for 100 HMA) and 1 × (27 HMA for 27 HMA)",
        value: "427"
      },
      IndustrialAge: { ratio: 0, show: false, split: "", value: 0 },
      IronAge: { ratio: 0, show: false, split: "", value: 0 },
      LateMiddleAges: {
        ratio: 0.5,
        show: true,
        split: "8 × (100 HMA for 50 LMA) and 1 × (54 HMA for 27 LMA)",
        value: "214"
      },
      ModernEra: { ratio: 0, show: false, split: "", value: 0 },
      OceanicFuture: { ratio: 0, show: false, split: "", value: 0 },
      PostmodernEra: { ratio: 0, show: false, split: "", value: 0 },
      ProgressiveEra: { ratio: 0, show: false, split: "", value: 0 },
      TheFuture: { ratio: 0, show: false, split: "", value: 0 },
      Tomorrow: { ratio: 0, show: false, split: "", value: 0 },
      VirtualFuture: { ratio: 0, show: false, split: "", value: 0 }
    }
  },
  {
    age: Object.keys(fairTradeArray)[3],
    value: 12000,
    splitValue: 1000,
    result: {
      ArcticFuture: { ratio: 0, show: false, split: "", value: 0 },
      BronzeAge: { ratio: 0, show: false, split: "", value: 0 },
      ColonialAge: { ratio: 0, show: false, split: "", value: 0 },
      ContemporaryEra: { ratio: 0, show: false, split: "", value: 0 },
      EarlyMiddleAges: { ratio: 2, show: true, split: 24000, value: "24,000" },
      HighMiddleAges: { ratio: 1, show: true, split: 12000, value: "12,000" },
      IndustrialAge: { ratio: 0, show: false, split: "", value: 0 },
      IronAge: { ratio: 0, show: false, split: "", value: 0 },
      LateMiddleAges: { ratio: 0.5, show: true, split: 6000, value: "6,000" },
      ModernEra: { ratio: 0, show: false, split: "", value: 0 },
      OceanicFuture: { ratio: 0, show: false, split: "", value: 0 },
      PostmodernEra: { ratio: 0, show: false, split: "", value: 0 },
      ProgressiveEra: { ratio: 0, show: false, split: "", value: 0 },
      TheFuture: { ratio: 0, show: false, split: "", value: 0 },
      Tomorrow: { ratio: 0, show: false, split: "", value: 0 },
      VirtualFuture: { ratio: 0, show: false, split: "", value: 0 }
    }
  },
  {
    age: Object.keys(fairTradeArray)[10],
    value: 100,
    splitValue: 100,
    result: {
      ArcticFuture: { ratio: 0.62, show: true, split: "1 × (100 CE for 62 AF) and 1 × (62 CE for 38 AF)", value: "62" },
      BronzeAge: { ratio: 0, show: false, split: "", value: 0 },
      ColonialAge: { ratio: 0, show: false, split: "", value: 0 },
      ContemporaryEra: { ratio: 1, show: true, split: "1 × (100 CE for 100 CE)", value: "100" },
      EarlyMiddleAges: { ratio: 0, show: false, split: "", value: 0 },
      HighMiddleAges: { ratio: 0, show: false, split: "", value: 0 },
      IndustrialAge: { ratio: 0, show: false, split: "", value: 0 },
      IronAge: { ratio: 0, show: false, split: "", value: 0 },
      LateMiddleAges: { ratio: 0, show: false, split: "", value: 0 },
      ModernEra: { ratio: 1.5, show: true, split: "1 × (67 CE for 100 ME)", value: "150" },
      OceanicFuture: {
        ratio: 0.56,
        show: true,
        split: "1 × (100 CE for 56 OF) and 1 × (79 CE for 44 OF)",
        value: "56"
      },
      PostmodernEra: { ratio: 1.2, show: true, split: "1 × (84 CE for 100 PME)", value: "120" },
      ProgressiveEra: { ratio: 1.8, show: true, split: "1 × (56 CE for 100 PE)", value: "180" },
      TheFuture: { ratio: 0.72, show: true, split: "1 × (100 CE for 72 TF) and 1 × (39 CE for 28 TF)", value: "72" },
      Tomorrow: { ratio: 0.86, show: true, split: "1 × (100 CE for 86 TE) and 1 × (16 CE for 14 TE)", value: "86" },
      VirtualFuture: { ratio: 0, show: false, split: "", value: 0 }
    }
  }
];

describe("SimpleTrade", () => {
  // Valid values

  test("Is a Vue instance", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('Change "Split" value', () => {
    const wrapper = factory();
    expect(wrapper.vm.splitValue).toBe(1000);
    expect(wrapper.vm.errors.splitValue).toBeFalsy();
    wrapper.vm.splitValue = 123;
    expect(wrapper.vm.splitValue).toBe(123);
    expect(wrapper.vm.errors.splitValue).toBeFalsy();
  });

  test('Change "Split" with invalid value', () => {
    const wrapper = factory();
    expect(wrapper.vm.splitValue).toBe(1000);
    expect(wrapper.vm.errors.splitValue).toBeFalsy();
    wrapper.vm.splitValue = -1;
    expect(wrapper.vm.splitValue).toBe(-1);
    expect(wrapper.vm.errors.splitValue).toBeTruthy();
  });

  test('Change "Split" switch', () => {
    const wrapper = factory();
    expect(wrapper.vm.split).toBe(false);
    wrapper.vm.split = true;
    expect(wrapper.vm.split).toBe(true);
  });

  test(`Call "resetFormIfAllZero" with current age "${Object.keys(fairTradeArray)[1]}"`, () => {
    const wrapper = factory();

    for (let age in agesGoods) {
      expect(wrapper.vm.values[age]).toBe(0);
      expect(wrapper.vm.results[age]).toEqual({ show: false, value: 0, ratio: 0, split: "" });
    }

    wrapper.vm.resetFormIfAllZero(Object.keys(fairTradeArray)[1]);

    for (let age in agesGoods) {
      expect(wrapper.vm.values[age]).toBe(0);
      expect(wrapper.vm.results[age]).toEqual({ show: false, value: 0, ratio: 0, split: "" });
    }
  });

  test(`Call "resetFormIfAllZero" with current age "${
    Object.keys(fairTradeArray)[1]
  }" and all one value not equal to 0`, () => {
    const wrapper = factory();

    for (let age in agesGoods) {
      expect(wrapper.vm.values[age]).toBe(0);
      expect(wrapper.vm.results[age]).toEqual({ show: false, value: 0, ratio: 0, split: "" });
    }

    wrapper.vm.values[Object.keys(fairTradeArray)[1]] = 1;
    wrapper.vm.values[Object.keys(fairTradeArray)[2]] = 2;

    wrapper.vm.resetFormIfAllZero(Object.keys(fairTradeArray)[1]);

    expect(wrapper.vm.values[Object.keys(fairTradeArray)[0]]).toBe(0);
    expect(wrapper.vm.values[Object.keys(fairTradeArray)[1]]).toBe(1);
    expect(wrapper.vm.values[Object.keys(fairTradeArray)[2]]).toBe(2);
  });

  test(`Call "haveError" with key "${Object.keys(fairTradeArray)[1]}" and value 100`, () => {
    const wrapper = factory();
    const key = Object.keys(fairTradeArray)[1];
    wrapper.vm.values[key] = 100;
    expect(wrapper.vm.haveError(key)).toBe(undefined);
  });

  test(`Call "haveError" with key "${Object.keys(fairTradeArray)[1]}" and value 10000`, () => {
    const wrapper = factory();
    const key = Object.keys(fairTradeArray)[1];
    wrapper.vm.values[key] = 10000;
    expect(wrapper.vm.haveError(key)).toBe("is-warning");
  });

  test(`Call "haveError" with unknown key and no error`, () => {
    const wrapper = factory();
    expect(wrapper.vm.haveError("foo")).toBe("");
  });

  test(`Call "haveError" with unknown age and error`, () => {
    const wrapper = factory();
    wrapper.vm.errors["foo"] = true;
    expect(wrapper.vm.haveError("foo")).toBe("is-danger");
  });

  // Check result

  for (const elt of dataCheckResult) {
    test(`Check result with current age ${elt.age} for value ${elt.value} and split ${elt.splitValue}`, () => {
      const wrapper = factory();
      wrapper.vm.values[elt.age] = elt.value;
      wrapper.vm.split = elt.splitValue !== 1000;
      wrapper.vm.splitValue = elt.splitValue;

      wrapper.vm.getBestRates(elt.age);

      expect(wrapper.vm.results).toEqual(elt.result);
    });
  }
});

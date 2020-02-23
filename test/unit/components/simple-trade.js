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
    splitValue: 1000
  },
  {
    age: Object.keys(fairTradeArray)[3],
    value: 427,
    splitValue: 100
  },
  {
    age: Object.keys(fairTradeArray)[3],
    value: 12000,
    splitValue: 1000
  },
  {
    age: Object.keys(fairTradeArray)[10],
    value: 100,
    splitValue: 100
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

      expect(wrapper.vm.results).toMatchSnapshot();
    });
  }
});

import { shallowMount } from "@vue/test-utils";
import Component from "../../../components/trade/Trade";
import { TradeArrayType, fairTradeArray } from "~/scripts/trade";
import { getView } from "../localVue";

const factory = () => {
  const { localVue, store } = getView();
  return shallowMount(Component, {
    propsData: {
      tradeInput: { age: true, value: fairTradeArray, type: TradeArrayType.FAIR }
    },
    localVue,
    store
  });
};

const dataCheckResult = [
  {
    iHave: Object.keys(fairTradeArray)[1],
    iWant: Object.keys(fairTradeArray)[3],
    value: 500,
    splitValue: 1000,
    result: [
      {
        key: "IronAge",
        amount: 2000,
        split: [{ from: 1000, to: 500, count: 2 }, { from: 0, to: 0 }]
      },
      {
        key: "EarlyMiddleAges",
        amount: 1000,
        split: [{ from: 1000, to: 500, count: 1 }, { from: 0, to: 0 }]
      },
      { key: "HighMiddleAges", amount: 500 }
    ]
  },
  {
    iHave: Object.keys(fairTradeArray)[1],
    iWant: Object.keys(fairTradeArray)[3],
    value: 427,
    splitValue: 100,
    result: [
      {
        amount: 1708,
        key: "IronAge",
        split: [{ count: 17, from: 100, to: 50 }, { from: 8, to: 4 }]
      },
      {
        amount: 854,
        key: "EarlyMiddleAges",
        split: [{ count: 8, from: 100, to: 50 }, { from: 54, to: 27 }]
      },
      { amount: 427, key: "HighMiddleAges" }
    ]
  },
  {
    iHave: Object.keys(fairTradeArray)[3],
    iWant: Object.keys(fairTradeArray)[1],
    value: 12000,
    splitValue: 1000,
    result: [
      {
        amount: 3000,
        key: "HighMiddleAges",
        split: [{ count: 6, from: 500, to: 1000 }, { from: 0, to: 0 }]
      },
      {
        amount: 6000,
        key: "EarlyMiddleAges",
        split: [{ count: 12, from: 500, to: 1000 }, { from: 0, to: 0 }]
      },
      { amount: 12000, key: "IronAge" }
    ]
  }
];

describe("Trade", () => {
  // Valid values

  test("Is a Vue instance", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('Change "I have" value', () => {
    const wrapper = factory();
    expect(wrapper.vm.iHave).toBe(Object.keys(fairTradeArray)[0]);
    expect(wrapper.vm.errors.iHave).toBeFalsy();
    wrapper.vm.iHave = Object.keys(fairTradeArray)[1];
    expect(wrapper.vm.iHave).toBe(Object.keys(fairTradeArray)[1]);
    expect(wrapper.vm.errors.iHave).toBeFalsy();
  });

  test('Change "I want" value', () => {
    const wrapper = factory();
    expect(wrapper.vm.iWant).toBe(Object.keys(fairTradeArray)[0]);
    expect(wrapper.vm.errors.iWant).toBeFalsy();
    wrapper.vm.iWant = Object.keys(fairTradeArray)[1];
    expect(wrapper.vm.iWant).toBe(Object.keys(fairTradeArray)[1]);
    expect(wrapper.vm.errors.iWant).toBeFalsy();
  });

  test('Change "Split" value', () => {
    const wrapper = factory();
    expect(wrapper.vm.splitValue).toBe(1000);
    expect(wrapper.vm.errors.splitValue).toBeFalsy();
    wrapper.vm.splitValue = 123;
    expect(wrapper.vm.splitValue).toBe(123);
    expect(wrapper.vm.errors.splitValue).toBeFalsy();
  });

  test('Change "Value" with value 427', () => {
    const wrapper = factory();
    expect(wrapper.vm.value).toBe(0);
    expect(wrapper.vm.errors.value).toBeFalsy();
    expect(wrapper.vm.warnings.value).toBeFalsy();
    wrapper.vm.value = 427;
    expect(wrapper.vm.value).toBe(427);
    expect(wrapper.vm.errors.value).toBeFalsy();
    expect(wrapper.vm.warnings.value).toBeFalsy();
  });

  test('Change "Value" with value 1001', () => {
    const wrapper = factory();
    expect(wrapper.vm.value).toBe(0);
    expect(wrapper.vm.errors.value).toBeFalsy();
    expect(wrapper.vm.warnings.value).toBeFalsy();
    wrapper.vm.value = 1001;
    expect(wrapper.vm.value).toBe(1001);
    expect(wrapper.vm.errors.value).toBeFalsy();
    expect(wrapper.vm.warnings.value).toBeTruthy();
  });

  // Invalid values

  test('Change "I have" with invalid value', () => {
    const wrapper = factory();
    expect(wrapper.vm.iHave).toBe(Object.keys(fairTradeArray)[0]);
    expect(wrapper.vm.errors.iHave).toBeFalsy();
    wrapper.vm.iHave = "foo";
    expect(wrapper.vm.iHave).toBe("foo");
    expect(wrapper.vm.errors.iHave).toBeTruthy();
  });

  test('Change "I want" with invalid value', () => {
    const wrapper = factory();
    expect(wrapper.vm.iWant).toBe(Object.keys(fairTradeArray)[0]);
    expect(wrapper.vm.errors.iWant).toBeFalsy();
    wrapper.vm.iWant = "foo";
    expect(wrapper.vm.iWant).toBe("foo");
    expect(wrapper.vm.errors.iWant).toBeTruthy();
  });

  test('Change "Split" with invalid value', () => {
    const wrapper = factory();
    const value = 0;
    expect(wrapper.vm.splitValue).toBe(1000);
    expect(wrapper.vm.errors.splitValue).toBeFalsy();
    wrapper.vm.splitValue = value;
    expect(wrapper.vm.splitValue).toBe(value);
    expect(wrapper.vm.errors.splitValue).toBeTruthy();
  });

  test('Change "Split" with invalid type', () => {
    const wrapper = factory();
    const value = "foo";
    expect(wrapper.vm.splitValue).toBe(1000);
    expect(wrapper.vm.errors.splitValue).toBeFalsy();
    wrapper.vm.splitValue = value;
    expect(wrapper.vm.splitValue).toBe(value);
    expect(wrapper.vm.errors.splitValue).toBeTruthy();
  });

  test('Change "Value" with invalid value', () => {
    const wrapper = factory();
    const value = -1;
    expect(wrapper.vm.value).toBe(0);
    expect(wrapper.vm.errors.value).toBeFalsy();
    expect(wrapper.vm.warnings.value).toBeFalsy();
    wrapper.vm.value = value;
    expect(wrapper.vm.value).toBe(value);
    expect(wrapper.vm.errors.value).toBeTruthy();
    expect(wrapper.vm.warnings.value).toBeFalsy();
  });

  test('Change "Value" with invalid type', () => {
    const wrapper = factory();
    const value = "foo";
    expect(wrapper.vm.value).toBe(0);
    expect(wrapper.vm.errors.value).toBeFalsy();
    expect(wrapper.vm.warnings.value).toBeFalsy();
    wrapper.vm.value = value;
    expect(wrapper.vm.value).toBe(value);
    expect(wrapper.vm.errors.value).toBeTruthy();
    expect(wrapper.vm.warnings.value).toBeFalsy();
  });

  // Check result

  for (const elt of dataCheckResult) {
    test(`Check result from ${elt.iHave} to ${elt.iWant} for value ${elt.value} and split ${elt.splitValue}`, () => {
      const wrapper = factory();
      wrapper.vm.iHave = elt.iHave;
      wrapper.vm.iWant = elt.iWant;
      wrapper.vm.value = elt.value;
      wrapper.vm.splitValue = elt.splitValue;

      expect(wrapper.vm.result).toEqual(elt.result);
    });
  }
});

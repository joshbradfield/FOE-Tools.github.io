import { shallowMount } from "@vue/test-utils";
import Component from "../../../components/gb-investment/GbInvestment";
import { getView } from "../localVue";
import { gbsData } from "../../../lib/foe-data/gbs";

const defaultGb = gbsData.Observatory;

const factory = (propsData = {}, mocks = {}) => {
  const { localVue, store } = getView();
  return shallowMount(Component, {
    propsData: {
      gb: defaultGb,
      ...propsData
    },
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

const defaultInvestorPercentageCustom = [90, 90, 90, 90, 90];
const defaultResult = {
  cost: 650,
  investment: [
    { reward: 65, participation: 124, preparation: 402, cumulativeInvestment: 526 },
    { reward: 35, participation: 67, preparation: 402, cumulativeInvestment: 593 },
    { reward: 10, participation: 19, preparation: 421, cumulativeInvestment: 631 },
    { reward: 5, participation: 10, preparation: 421, cumulativeInvestment: 641 },
    { reward: 0, participation: 0, preparation: 430, cumulativeInvestment: 650 }
  ],
  totalPreparations: 430,
  level: 10
};

describe("GbInvestment", () => {
  test("Is a Vue instance", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("Initialize with URL query", () => {
    const investorPercentageCustom = [92, 91, 90, 85, 80];
    const investorParticipation = [10, 8, 6, 4, 2];
    const wrapper = factory(defaultGb, {
      $route: {
        query: {
          gbi_l: 20,
          gbi_oi: 21,
          gbi_ipg: 90,
          gbi_px: "foo",
          gbi_sx: "bar",
          gbi_sn: "1",
          gbi_sl: "1",
          gbi_p1: investorPercentageCustom[0],
          gbi_p2: investorPercentageCustom[1],
          gbi_p3: investorPercentageCustom[2],
          gbi_p4: investorPercentageCustom[3],
          gbi_p5: investorPercentageCustom[4],
          gbi_ip1: investorParticipation[0],
          gbi_ip2: investorParticipation[1],
          gbi_ip3: investorParticipation[2],
          gbi_ip4: investorParticipation[3],
          gbi_ip5: investorParticipation[4],
          gbi_pFree1: "0",
          gbi_pFree2: "0",
          gbi_pFree3: "1",
          gbi_pFree4: "1",
          gbi_pFree5: "1"
        }
      }
    });

    expect(wrapper.vm.level).toBe(20);
    expect(wrapper.vm.ownerInvestment).toBe(21);
    expect(wrapper.vm.investorPercentageGlobal).toBe(90);
    expect(wrapper.vm.prefix).toBe("foo");
    expect(wrapper.vm.suffix).toBe("bar");
    expect(wrapper.vm.shortName).toBe(true);
    expect(wrapper.vm.showLevel).toBe(true);
    expect(wrapper.vm.investorPercentageCustom).toEqual(investorPercentageCustom);
    expect(wrapper.vm.investorParticipation).toEqual(investorParticipation);
    expect(wrapper.vm.placeFree).toEqual([
      { state: false },
      { state: false },
      { state: true },
      { state: true },
      { state: true }
    ]);
  });

  test("Initialize with cookies", () => {
    const investorPercentageCustom = [92, 91, 90, 85, 80];
    const investorParticipation = [10, 8, 6, 4, 2];

    const wrapper = factory(defaultGb, {
      $cookies: {
        get: key => {
          switch (key) {
            case "level":
              return 20;
            case "ownerInvestment":
              return 21;
            case "investorPercentageGlobal":
              return 90;
            case "gbPrefix":
              return "foo";
            case "gbSuffix":
              return "bar";
            case "shortName":
              return true;
            case "showLevel":
              return true;
            case "investorPercentageCustom_0":
              return 92;
            case "investorPercentageCustom_1":
              return 91;
            case "investorPercentageCustom_2":
              return 90;
            case "investorPercentageCustom_3":
              return 85;
            case "investorPercentageCustom_4":
              return 80;
            case "investorParticipation_0":
              return 10;
            case "investorParticipation_1":
              return 8;
            case "investorParticipation_2":
              return 6;
            case "investorParticipation_3":
              return 4;
            case "investorParticipation_4":
              return 2;
          }
        }
      }
    });

    expect(wrapper.vm.level).toBe(20);
    expect(wrapper.vm.ownerInvestment).toBe(21);
    expect(wrapper.vm.investorPercentageGlobal).toBe(90);
    expect(wrapper.vm.prefix).toBe("foo");
    expect(wrapper.vm.suffix).toBe("bar");
    expect(wrapper.vm.shortName).toBe(true);
    expect(wrapper.vm.showLevel).toBe(true);
    expect(wrapper.vm.investorPercentageCustom).toEqual(investorPercentageCustom);
    expect(wrapper.vm.investorParticipation).toEqual(investorParticipation);
  });

  test('Change "level" value', () => {
    const wrapper = factory();
    const newValue = 15;
    expect(wrapper.vm.level).toBe(10);
    wrapper.vm.level = newValue;
    expect(wrapper.vm.level).toBe(newValue);
    expect(wrapper.vm.ownerInvestment).toBe(0);
    expect(wrapper.vm.investorParticipation).toEqual([0, 0, 0, 0, 0]);
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"]["gbi_l"]).toBe(newValue);
  });

  test('Change "level" invalid value', () => {
    const wrapper = factory();
    const newValue = -1;
    expect(wrapper.vm.level).toBe(10);
    wrapper.vm.level = newValue;
    expect(wrapper.vm.level).toBe(newValue);
    expect(wrapper.vm.ownerInvestment).toBe(0);
    expect(wrapper.vm.investorParticipation).toEqual([0, 0, 0, 0, 0]);
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"]["gbi_l"]).toBe(10);
  });

  test('Change "ownerInvestment" value', () => {
    const wrapper = factory();
    const newValue = 15;
    expect(wrapper.vm.ownerInvestment).toBe(0);
    wrapper.vm.ownerInvestment = newValue;
    expect(wrapper.vm.ownerInvestment).toBe(newValue);
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"]["gbi_oi"]).toBe(newValue);
  });

  test('Change "ownerInvestment" invalid value', () => {
    const wrapper = factory();
    const newValue = -1;
    expect(wrapper.vm.ownerInvestment).toBe(0);
    wrapper.vm.ownerInvestment = newValue;
    expect(wrapper.vm.ownerInvestment).toBe(newValue);
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"]["gbi_oi"]).toBe(0);
  });

  test('Change "investorPercentageGlobal" value', () => {
    const wrapper = factory();
    const newValue = 80;
    expect(wrapper.vm.investorPercentageGlobal).toBe(90);
    wrapper.vm.investorPercentageGlobal = newValue;
    expect(wrapper.vm.investorPercentageGlobal).toBe(newValue);
    expect(wrapper.vm.ownerInvestment).toBe(0);
    for (let i = 0; i < wrapper.vm.investorPercentageCustom.length; i++) {
      expect(wrapper.vm.investorPercentageCustom[i]).toBe(newValue);
      expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"][`gbi_p${i + 1}`]).toBe(newValue);
    }
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"]["gbi_ipg"]).toBe(newValue);
  });

  test('Change "investorPercentageGlobal" invalid value', () => {
    const wrapper = factory();
    const newValue = -1;
    expect(wrapper.vm.investorPercentageGlobal).toBe(90);
    wrapper.vm.investorPercentageGlobal = newValue;
    expect(wrapper.vm.investorPercentageGlobal).toBe(newValue);
    expect(wrapper.vm.ownerInvestment).toBe(0);
    for (let i = 0; i < wrapper.vm.investorPercentageCustom.length; i++) {
      expect(wrapper.vm.investorPercentageCustom[i]).toBe(90);
      expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"][`gbi_p${i + 1}`]).toBe(90);
    }
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"]["gbi_ipg"]).toBe(90);
  });

  test('Change "investorPercentageCustom" value', () => {
    const wrapper = factory();
    const newValue = [92, 91, 90, 85, 80];
    expect(wrapper.vm.investorPercentageCustom).toEqual(defaultInvestorPercentageCustom);
    wrapper.vm.investorPercentageCustom = newValue;

    for (let i = 0; i < wrapper.vm.investorPercentageCustom.length; i++) {
      expect(wrapper.vm.investorPercentageCustom[i]).toBe(newValue[i]);
      expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"][`gbi_p${i + 1}`]).toBe(newValue[i]);
    }
  });

  test('Change "investorPercentageCustom" invalid value', () => {
    const wrapper = factory();
    const newValue = [90, -1, 90, 90, 90];
    expect(wrapper.vm.investorPercentageCustom).toEqual(defaultInvestorPercentageCustom);
    wrapper.vm.investorPercentageCustom = newValue;

    for (let i = 0; i < wrapper.vm.investorPercentageCustom.length; i++) {
      expect(wrapper.vm.investorPercentageCustom[i]).toBe(newValue[i]);
      expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"][`gbi_p${i + 1}`]).toBe(90);
    }
  });

  test('Change "prefix" value', () => {
    const wrapper = factory();
    const newValue = "foo";
    expect(wrapper.vm.prefix).toBe("");
    wrapper.vm.prefix = newValue;
    expect(wrapper.vm.prefix).toBe(newValue);
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"]["gbi_px"]).toBe(newValue);
    expect(wrapper.vm.$cookies.set.mock.calls[wrapper.vm.$cookies.set.mock.calls.length - 1]).toEqual([
      "gbPrefix",
      "foo",
      {
        path: "/",
        expires: wrapper.vm.$cookies.set.mock.calls[wrapper.vm.$cookies.set.mock.calls.length - 1][2].expires
      }
    ]);
  });

  test('Change "suffix" value', () => {
    const wrapper = factory();
    const newValue = "bar";
    expect(wrapper.vm.suffix).toBe("");
    wrapper.vm.suffix = newValue;
    expect(wrapper.vm.suffix).toBe(newValue);
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"]["gbi_sx"]).toBe(newValue);
    expect(wrapper.vm.$cookies.set.mock.calls[wrapper.vm.$cookies.set.mock.calls.length - 1]).toEqual([
      "gbSuffix",
      "bar",
      {
        path: "/",
        expires: wrapper.vm.$cookies.set.mock.calls[wrapper.vm.$cookies.set.mock.calls.length - 1][2].expires
      }
    ]);
  });

  test('Change "shortName" value', () => {
    const wrapper = factory();
    const newValue = true;
    expect(wrapper.vm.shortName).toBe(false);
    wrapper.vm.shortName = newValue;
    expect(wrapper.vm.shortName).toBe(newValue);
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"]["gbi_sn"]).toBe(newValue ? 1 : 0);
    expect(wrapper.vm.$cookies.set.mock.calls[wrapper.vm.$cookies.set.mock.calls.length - 1]).toEqual([
      "shortName",
      true,
      {
        path: "/",
        expires: wrapper.vm.$cookies.set.mock.calls[wrapper.vm.$cookies.set.mock.calls.length - 1][2].expires
      }
    ]);
  });

  test('Change "showLevel" value', () => {
    const wrapper = factory();
    const newValue = true;
    expect(wrapper.vm.showLevel).toBe(false);
    wrapper.vm.showLevel = newValue;
    expect(wrapper.vm.showLevel).toBe(newValue);
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"]["gbi_sl"]).toBe(newValue ? 1 : 0);
    expect(wrapper.vm.$cookies.set.mock.calls[wrapper.vm.$cookies.set.mock.calls.length - 1]).toEqual([
      "showLevel",
      true,
      {
        path: "/",
        expires: wrapper.vm.$cookies.set.mock.calls[wrapper.vm.$cookies.set.mock.calls.length - 1][2].expires
      }
    ]);
  });

  test('Change "result" value', () => {
    const wrapper = factory();
    const newValue = {
      cost: 736,
      investment: [
        { reward: 110, participation: 209, preparation: 318, cumulativeInvestment: 527 },
        { reward: 55, participation: 105, preparation: 318, cumulativeInvestment: 632 },
        { reward: 20, participation: 38, preparation: 346, cumulativeInvestment: 698 },
        { reward: 5, participation: 10, preparation: 364, cumulativeInvestment: 726 },
        { reward: 0, participation: 0, preparation: 374, cumulativeInvestment: 736 }
      ],
      totalPreparations: 374,
      level: 15
    };
    const promotionMessages = [
      { message: "Observatory P1(209) P2(105) P3(38) P4(10)", active: false },
      { message: "P1(209) P2(105) P3(38) P4(10) Observatory", active: false },
      { message: "Observatory P4(10) P3(38) P2(105) P1(209)", active: false },
      { message: "P4(10) P3(38) P2(105) P1(209) Observatory", active: false }
    ];
    expect(wrapper.vm.result).toEqual(defaultResult);
    wrapper.vm.result = newValue;
    expect(wrapper.vm.result).toEqual(newValue);
    expect(wrapper.vm.promotion).toEqual(promotionMessages);
  });

  test('Change "result" value with null value', () => {
    const wrapper = factory();
    const newValue = null;
    expect(wrapper.vm.result).toEqual(defaultResult);
    wrapper.vm.result = newValue;
    expect(wrapper.vm.result).toEqual(null);
    expect(wrapper.vm.promotion).toEqual([]);
  });

  test('Change "lang" value', async () => {
    const wrapper = factory();
    const promotionMessages = [
      { message: "Observatoire P1(124) P2(67) P3(19) P4(10)", active: false },
      { message: "P1(124) P2(67) P3(19) P4(10) Observatoire", active: false },
      { message: "Observatoire P4(10) P3(19) P2(67) P1(124)", active: false },
      { message: "P4(10) P3(19) P2(67) P1(124) Observatoire", active: false }
    ];

    await wrapper.vm.i18n.i18next.changeLanguage("fr");
    wrapper.vm.$store.state.locale = "fr";

    expect(wrapper.vm.promotion).toEqual(promotionMessages);
  });

  test('Change "lang" value with null result', async () => {
    const wrapper = factory();
    const newValue = null;
    wrapper.vm.result = newValue;

    await wrapper.vm.i18n.i18next.changeLanguage("fr");
    wrapper.vm.$store.state.locale = "fr";

    expect(wrapper.vm.promotion).toEqual([]);
  });

  test('Call "goTo"', () => {
    const wrapper = factory();
    wrapper.vm.goTo("foo");
    expect(window.location.href).toBe("/gb-investment/foo/");
  });

  test('Call "calculate" with invalid data', () => {
    const wrapper = factory();
    wrapper.vm.level = -1;
    wrapper.vm.calculate();
    expect(wrapper.emitted().updateLevelData.length).toBe(1);
  });

  test('Call "successCopy" with invalid data', () => {
    jest.useFakeTimers();
    const wrapper = factory();
    const index = 0;
    wrapper.vm.calculate();
    wrapper.vm.successCopy(index);
    expect(wrapper.vm.promotion[index].active).toBe(true);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
  });

  test('Call "changePlaceFree" with invalid data', () => {
    const wrapper = factory();
    const index = 0;
    const value = false;
    const promotion = [
      { message: "Observatory P2(67) P3(19) P4(10)", active: false },
      { message: "P2(67) P3(19) P4(10) Observatory", active: false },
      { message: "Observatory P4(10) P3(19) P2(67)", active: false },
      { message: "P4(10) P3(19) P2(67) Observatory", active: false }
    ];
    wrapper.vm.calculate();
    wrapper.vm.changePlaceFree(index, value);
    expect(wrapper.vm.placeFree[index].state).toBe(value);
    expect(wrapper.vm.promotion).toEqual(promotion);
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbi"][`gbi_pFree${index + 1}`]).toBe(value ? 1 : 0);
  });

  test('Call "changeInvestorParticipation" with same value', () => {
    const wrapper = factory();
    const index = 0;
    const value = 0;
    expect(wrapper.vm.investorParticipation[index]).toBe(value);
    wrapper.vm.calculate();
    wrapper.vm.changeInvestorParticipation(index, value);
    expect(wrapper.vm.investorParticipation[index]).toBe(value);
  });

  test('Call "changeInvestorParticipation" with new value', () => {
    const wrapper = factory();
    const index = 3;
    const value = 1;
    wrapper.vm.calculate();
    wrapper.vm.changeInvestorParticipation(index, value);
    expect(wrapper.vm.investorParticipation[index]).toBe(value);
  });

  test('Call "changeInvestorParticipation" with multi update value', () => {
    const wrapper = factory();
    const index = 3;
    const value = 1;
    wrapper.vm.calculate();

    wrapper.vm.changeInvestorParticipation(index + 1, value + 1);
    expect(wrapper.vm.investorParticipation[index + 1]).toBe(value + 1);

    wrapper.vm.changeInvestorParticipation(index, value);
    expect(wrapper.vm.investorParticipation[index]).toBe(value);
    expect(wrapper.vm.investorParticipation[index + 1]).toBe(0);
  });

  test('Call "changeInvestorParticipation" with invalid value', () => {
    const wrapper = factory();
    const index = 4;
    const value = -1;
    wrapper.vm.calculate();
    wrapper.vm.changeInvestorParticipation(index, value);
    expect(wrapper.vm.investorParticipation[index]).toBe(0);
    expect(wrapper.vm.errors[`investorParticipation_${index}`]).toBe(true);
  });
});

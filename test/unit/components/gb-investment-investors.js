import { shallowMount } from "@vue/test-utils";
import Component from "../../../components/gb-investment-investors/GbInvestmentInvestors";
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
        query: {},
        params: {
          gb: "root"
        }
      },
      ...mocks
    }
  });
};

const initialShowPlace = [true, false, false, false, false];

describe("GbInvestmentInvestors", () => {
  test("Is a Vue instance", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("Initialize with URL query", () => {
    console.log("Initialize with URL query");
    const showPlaceValues = [true, true, false, false, false];
    const wrapper = factory(defaultGb, {
      $route: {
        query: {
          gbi_tl: 10,
          gbi_yab: 90,
          gbi_tpic: 0,
          gbi_sp1: 1,
          gbi_sp2: 1,
          gbi_sp3: 0,
          gbi_sp4: 0,
          gbi_sp5: 0
        },
        params: {
          gb: "root"
        }
      }
    });

    expect(wrapper.vm.targetLevel).toBe(10);
    expect(wrapper.vm.yourArcBonus).toBe(90);
    expect(wrapper.vm.takingPlaceInConsideration).toBe(0);

    for (let i = 1; i <= 5; i++) {
      expect(wrapper.vm[`showP${i}`]).toBe(showPlaceValues[i - 1]);
    }
  });

  test("Initialize with cookies", () => {
    const showPlaceValues = [true, true, false, false, false];
    const wrapper = factory(defaultGb, {
      $cookies: {
        get: key => {
          switch (key) {
            case "root_targetLevel":
              return 10;
            case "yourArcBonus":
              return undefined;
            case "root_takingPlaceInConsideration":
              return 1;
            case "root_showP1":
              return true;
            case "root_showP2":
              return true;
            case "root_showP3":
              return false;
            case "root_showP4":
              return false;
            case "root_showP5":
              return false;
          }
        }
      }
    });

    expect(wrapper.vm.targetLevel).toBe(10);
    expect(wrapper.vm.yourArcBonus).toBe(0);
    expect(wrapper.vm.takingPlaceInConsideration).toBe(1);

    for (let i = 1; i <= 5; i++) {
      expect(wrapper.vm[`showP${i}`]).toBe(showPlaceValues[i - 1]);
    }
  });

  test('Change "targetLevel" value', () => {
    const wrapper = factory();
    const newValue = 5;
    expect(wrapper.vm.targetLevel).toBe(1);
    wrapper.vm.targetLevel = newValue;
    expect(wrapper.vm.targetLevel).toBe(newValue);
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbii"]["gbi_tl"]).toBe(newValue);
  });

  test('Change "targetLevel" invalid value', () => {
    const wrapper = factory();
    const newValue = -1;
    expect(wrapper.vm.targetLevel).toBe(1);
    wrapper.vm.targetLevel = newValue;
    expect(wrapper.vm.targetLevel).toBe(newValue);
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbii"]["gbi_tl"]).toBe(1);
  });

  test('Change "takingPlaceInConsideration" value', () => {
    const wrapper = factory();
    const newValue = 2;
    expect(wrapper.vm.takingPlaceInConsideration).toBe(0);
    wrapper.vm.takingPlaceInConsideration = newValue;
    expect(wrapper.vm.takingPlaceInConsideration).toBe(newValue);
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbii"]["gbi_tpic"]).toBe(newValue);
  });

  test('Change "takingPlaceInConsideration" invalid value', () => {
    const wrapper = factory();
    const newValue = -1;
    expect(wrapper.vm.takingPlaceInConsideration).toBe(0);
    wrapper.vm.takingPlaceInConsideration = newValue;
    expect(wrapper.vm.takingPlaceInConsideration).toBe(newValue);
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbii"]["gbi_tpic"]).toBe(0);
  });

  test('Change "yourArcBonus" value', () => {
    const wrapper = factory();
    expect(wrapper.vm.yourArcBonus).toBe(90.6);
    expect(wrapper.vm.errors.yourArcBonus).toBeFalsy();
    wrapper.vm.yourArcBonus = 123;
    expect(wrapper.vm.yourArcBonus).toBe(123);
    expect(wrapper.vm.errors.yourArcBonus).toBeFalsy();
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbii"]["gbi_yab"]).toBe(123);
  });

  test('Change "yourArcBonus" invalid value', () => {
    const wrapper = factory();
    expect(wrapper.vm.yourArcBonus).toBe(90.6);
    expect(wrapper.vm.errors.yourArcBonus).toBeFalsy();
    wrapper.vm.yourArcBonus = -1;
    expect(wrapper.vm.yourArcBonus).toBe(-1);
    expect(wrapper.vm.errors.yourArcBonus).toBeTruthy();
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbii"]["gbi_yab"]).toBe(90.6);
  });

  test('Change "yourArcBonus" invalid type', () => {
    const wrapper = factory();
    const invalidValueType = "foo";
    expect(wrapper.vm.yourArcBonus).toBe(90.6);
    expect(wrapper.vm.errors.yourArcBonus).toBeFalsy();
    wrapper.vm.yourArcBonus = invalidValueType;
    expect(wrapper.vm.yourArcBonus).toBe(invalidValueType);
    expect(wrapper.vm.errors.yourArcBonus).toBeFalsy();
    expect(wrapper.vm.$store.state.urlQueryNamespace["gbii"]["gbi_yab"]).toBe(90.6);
  });

  for (let i = 1; i <= 5; i++) {
    test(`Change "showP${i}" value`, () => {
      const wrapper = factory();
      let newValue = !initialShowPlace[i - 1];
      expect(wrapper.vm[`showP${i}`]).toBe(initialShowPlace[i - 1]);
      wrapper.vm[`showP${i}`] = newValue;
      expect(wrapper.vm[`showP${i}`]).toBe(newValue);
      expect(wrapper.vm.$store.state.urlQueryNamespace["gbii"][`gbi_sp${i}`]).toBe(newValue ? 1 : 0);

      newValue = initialShowPlace[i - 1] ? 1 : 0;
      wrapper.vm[`showP${i}`] = newValue;
      expect(wrapper.vm[`showP${i}`]).toBe(newValue);
      expect(wrapper.vm.$store.state.urlQueryNamespace["gbii"][`gbi_sp${i}`]).toBe(newValue ? 1 : 0);
    });
  }

  test('Call "goTo"', () => {
    const wrapper = factory(
      {},
      {
        $router: {
          push: jest.fn()
        }
      }
    );
    wrapper.vm.goTo("foo");
    expect(wrapper.vm.$router.push.mock.calls.length).toBe(1);
    expect(wrapper.vm.$router.push.mock.calls[0][0]).toEqual("/gb-investment/foo/");
  });
});

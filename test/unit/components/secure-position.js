import { shallowMount } from "@vue/test-utils";
import Component from "../../../components/secure-position/SecurePosition";
import { getView } from "../localVue";
import { gbsData } from "../../../lib/foe-data/gbs";
import gbProcess from "~/lib/foe-compute-process/gb-investment";

const factory = (propsData = {}, mocks = {}) => {
  const { localVue, store } = getView();
  return shallowMount(Component, {
    propsData,
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

const gbData = gbProcess.ComputeLevelInvestment(10, [90, 90, 90, 90, 90], gbsData.Alcatraz.levels);
const invalidValueType = "foo";
/*
 * props: levelData, canPermalink, ns
 */

describe("SecurePosition", () => {
  test("Is a Vue instance", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('Change "levelCost" value', () => {
    const wrapper = factory();
    expect(wrapper.vm.levelCost).toBe(0);
    expect(wrapper.vm.errors.levelCost).toBeFalsy();
    wrapper.vm.levelCost = 123;
    expect(wrapper.vm.levelCost).toBe(123);
    expect(wrapper.vm.errors.levelCost).toBeFalsy();
  });

  test('Change "levelCost" invalid value', () => {
    const wrapper = factory();
    expect(wrapper.vm.levelCost).toBe(0);
    expect(wrapper.vm.errors.levelCost).toBeFalsy();
    wrapper.vm.levelCost = -1;
    expect(wrapper.vm.levelCost).toBe(-1);
    expect(wrapper.vm.errors.levelCost).toBeTruthy();
  });

  test('Change "levelCost" invalid type', () => {
    const wrapper = factory();
    expect(wrapper.vm.levelCost).toBe(0);
    expect(wrapper.vm.errors.levelCost).toBeFalsy();
    wrapper.vm.levelCost = invalidValueType;
    expect(wrapper.vm.levelCost).toBe(invalidValueType);
    expect(wrapper.vm.errors.levelCost).toBeFalsy();
  });

  test('Change "currentDeposits" value', () => {
    const wrapper = factory();
    wrapper.vm.levelCost = 321;

    expect(wrapper.vm.currentDeposits).toBe(0);
    expect(wrapper.vm.errors.currentDeposits).toBeFalsy();
    wrapper.vm.currentDeposits = 123;
    expect(wrapper.vm.currentDeposits).toBe(123);
    expect(wrapper.vm.errors.currentDeposits).toBeFalsy();
  });

  test('Change "currentDeposits" invalid value', () => {
    const wrapper = factory();
    expect(wrapper.vm.currentDeposits).toBe(0);
    expect(wrapper.vm.errors.currentDeposits).toBeFalsy();
    wrapper.vm.currentDeposits = -1;
    expect(wrapper.vm.currentDeposits).toBe(-1);
    expect(wrapper.vm.errors.currentDeposits).toBeTruthy();
  });

  test('Change "currentDeposits" invalid type', () => {
    const wrapper = factory();
    expect(wrapper.vm.currentDeposits).toBe(0);
    expect(wrapper.vm.errors.currentDeposits).toBeFalsy();
    wrapper.vm.currentDeposits = invalidValueType;
    expect(wrapper.vm.currentDeposits).toBe(invalidValueType);
    expect(wrapper.vm.errors.currentDeposits).toBeFalsy();
  });

  test('Change "yourParticipation" value', () => {
    const wrapper = factory();
    wrapper.vm.levelCost = 321;
    wrapper.vm.currentDeposits = 200;

    expect(wrapper.vm.yourParticipation).toBe(0);
    expect(wrapper.vm.errors.yourParticipation).toBeFalsy();
    wrapper.vm.yourParticipation = 123;
    expect(wrapper.vm.yourParticipation).toBe(123);
    expect(wrapper.vm.errors.yourParticipation).toBeFalsy();
  });

  test('Change "yourParticipation" invalid value', () => {
    const wrapper = factory();
    wrapper.vm.levelCost = 321;
    wrapper.vm.currentDeposits = 200;

    expect(wrapper.vm.yourParticipation).toBe(0);
    expect(wrapper.vm.errors.yourParticipation).toBeFalsy();
    wrapper.vm.yourParticipation = -1;
    expect(wrapper.vm.yourParticipation).toBe(-1);
    expect(wrapper.vm.errors.yourParticipation).toBeTruthy();
  });

  test('Change "yourParticipation" invalid type', () => {
    const wrapper = factory();
    wrapper.vm.levelCost = 321;
    wrapper.vm.currentDeposits = 200;

    expect(wrapper.vm.yourParticipation).toBe(0);
    expect(wrapper.vm.errors.yourParticipation).toBeFalsy();
    wrapper.vm.yourParticipation = invalidValueType;
    expect(wrapper.vm.yourParticipation).toBe(invalidValueType);
    expect(wrapper.vm.errors.yourParticipation).toBeFalsy();
  });

  test('Change "otherParticipation" value', () => {
    const wrapper = factory();
    wrapper.vm.levelCost = 321;
    wrapper.vm.currentDeposits = 200;

    expect(wrapper.vm.otherParticipation).toBe(0);
    expect(wrapper.vm.errors.otherParticipation).toBeFalsy();
    wrapper.vm.otherParticipation = 123;
    expect(wrapper.vm.otherParticipation).toBe(123);
    expect(wrapper.vm.errors.otherParticipation).toBeFalsy();
  });

  test('Change "otherParticipation" invalid value', () => {
    const wrapper = factory();
    wrapper.vm.levelCost = 321;
    wrapper.vm.currentDeposits = 200;

    expect(wrapper.vm.otherParticipation).toBe(0);
    expect(wrapper.vm.errors.otherParticipation).toBeFalsy();
    wrapper.vm.otherParticipation = -1;
    expect(wrapper.vm.otherParticipation).toBe(-1);
    expect(wrapper.vm.errors.otherParticipation).toBeTruthy();
  });

  test('Change "otherParticipation" invalid type', () => {
    const wrapper = factory();
    wrapper.vm.levelCost = 321;
    wrapper.vm.currentDeposits = 200;

    expect(wrapper.vm.otherParticipation).toBe(0);
    expect(wrapper.vm.errors.otherParticipation).toBeFalsy();
    wrapper.vm.otherParticipation = invalidValueType;
    expect(wrapper.vm.otherParticipation).toBe(invalidValueType);
    expect(wrapper.vm.errors.otherParticipation).toBeFalsy();
  });

  test('Change "yourArcBonus" value', () => {
    const wrapper = factory();
    expect(wrapper.vm.yourArcBonus).toBe(90.6);
    expect(wrapper.vm.errors.yourArcBonus).toBeFalsy();
    wrapper.vm.yourArcBonus = 123;
    expect(wrapper.vm.yourArcBonus).toBe(123);
    expect(wrapper.vm.errors.yourArcBonus).toBeFalsy();
  });

  test('Change "yourArcBonus" invalid value', () => {
    const wrapper = factory();
    expect(wrapper.vm.yourArcBonus).toBe(90.6);
    expect(wrapper.vm.errors.yourArcBonus).toBeFalsy();
    wrapper.vm.yourArcBonus = -1;
    expect(wrapper.vm.yourArcBonus).toBe(-1);
    expect(wrapper.vm.errors.yourArcBonus).toBeTruthy();
  });

  test('Change "yourArcBonus" invalid type', () => {
    const wrapper = factory();
    expect(wrapper.vm.yourArcBonus).toBe(90.6);
    expect(wrapper.vm.errors.yourArcBonus).toBeFalsy();
    wrapper.vm.yourArcBonus = invalidValueType;
    expect(wrapper.vm.yourArcBonus).toBe(invalidValueType);
    expect(wrapper.vm.errors.yourArcBonus).toBeFalsy();
  });

  test('Change "fpTargetReward" value', () => {
    const wrapper = factory();
    expect(wrapper.vm.fpTargetReward).toBe(0);
    expect(wrapper.vm.errors.fpTargetReward).toBeFalsy();
    wrapper.vm.fpTargetReward = 123;
    expect(wrapper.vm.fpTargetReward).toBe(123);
    expect(wrapper.vm.errors.fpTargetReward).toBeFalsy();
  });

  test('Change "fpTargetReward" invalid value', () => {
    const wrapper = factory();
    expect(wrapper.vm.fpTargetReward).toBe(0);
    expect(wrapper.vm.errors.fpTargetReward).toBeFalsy();
    wrapper.vm.fpTargetReward = -1;
    expect(wrapper.vm.fpTargetReward).toBe(-1);
    expect(wrapper.vm.errors.fpTargetReward).toBeTruthy();
  });

  test('Change "fpTargetReward" invalid type', () => {
    const wrapper = factory();
    expect(wrapper.vm.fpTargetReward).toBe(0);
    expect(wrapper.vm.errors.fpTargetReward).toBeFalsy();
    wrapper.vm.fpTargetReward = invalidValueType;
    expect(wrapper.vm.fpTargetReward).toBe(invalidValueType);
    expect(wrapper.vm.errors.fpTargetReward).toBeFalsy();
  });

  test("Form with valid input", () => {
    const wrapper = factory();
    wrapper.vm.levelCost = 1720;
    wrapper.vm.currentDeposits = 860;
    wrapper.vm.yourParticipation = 10;
    wrapper.vm.otherParticipation = 50;
    wrapper.vm.yourArcBonus = 90;
    wrapper.vm.fpTargetReward = 245;

    expect(wrapper.vm.fp).toBe(460);
    expect(wrapper.vm.roi).toBe(6);
  });

  test('Change "levelData" value', () => {
    const wrapper = factory();
    expect(wrapper.vm.$props.levelData).toBe(null);
    wrapper.setProps({ levelData: gbData });
    expect(wrapper.vm.$props.levelData).toBe(gbData);
  });

  test('Change "customYourArcBonus" value', () => {
    const wrapper = factory();
    expect(wrapper.vm.$props.customYourArcBonus).toBe(false);
    wrapper.setProps({ customYourArcBonus: 90 });
    expect(wrapper.vm.$props.customYourArcBonus).toBe(90);
  });

  test('Change "yourArcBonus" value with "customYourArcBonus" set', () => {
    const wrapper = factory({ customYourArcBonus: 90 });
    expect(wrapper.vm.$props.customYourArcBonus).toBe(90);
    wrapper.setProps({ customYourArcBonus: 90 });
    const newValue = 42;
    wrapper.vm.yourArcBonus = newValue;
    expect(wrapper.emitted().customYourArcBonus).toBeTruthy();
    expect(wrapper.emitted().customYourArcBonus[0]).toEqual([newValue]);
  });

  test('Initialize with custom "levelData"', () => {
    const wrapper = factory({ levelData: gbData });
    expect(wrapper.vm.$props.levelData).toBe(gbData);
    expect(wrapper.vm.levelCost).toBe(gbData.cost);
  });

  test("Initialize with no cookie", () => {
    const wrapper = factory(
      { levelData: gbData },
      {
        $cookies: {
          get: jest.fn().mockImplementation(key => {
            switch (key) {
              case "yourArcBonus":
                return undefined;
            }
            return null;
          })
        }
      }
    );
    expect(wrapper.vm.yourArcBonus).toBe(0);
  });

  test('Change "fpTargetReward" value when initialize with custom "levelData"', () => {
    const wrapper = factory({ levelData: gbData });
    expect(wrapper.vm.fpTargetReward).toBe(0);
    expect(wrapper.vm.errors.fpTargetReward).toBeFalsy();
    wrapper.vm.fpTargetReward = 5;
    expect(wrapper.vm.fpTargetReward).toBe(5);
    expect(wrapper.vm.errors.fpTargetReward).toBeFalsy();
  });

  test('Change "fpTargetReward" invalid when initialize with custom "levelData"', () => {
    const wrapper = factory({ levelData: gbData });
    expect(wrapper.vm.fpTargetReward).toBe(0);
    expect(wrapper.vm.errors.fpTargetReward).toBeFalsy();
    wrapper.vm.fpTargetReward = -1;
    expect(wrapper.vm.fpTargetReward).toBe(-1);
    expect(wrapper.vm.errors.fpTargetReward).toBeTruthy();
  });

  test('Call "checkFormValid" with invalid type', () => {
    const wrapper = factory();
    wrapper.vm.levelCost = 1720;
    wrapper.vm.currentDeposits = 860;
    wrapper.vm.yourParticipation = 10;
    wrapper.vm.otherParticipation = 50;
    wrapper.vm.yourArcBonus = 90;
    wrapper.vm.fpTargetReward = invalidValueType;

    expect(wrapper.vm.checkFormValid()).toBe(true);
  });

  test('Call "checkFormValid" with initial value', () => {
    const wrapper = factory();
    wrapper.vm.levelCost = 0;
    wrapper.vm.currentDeposits = 0;
    wrapper.vm.yourParticipation = 0;
    wrapper.vm.otherParticipation = 0;
    wrapper.vm.yourArcBonus = 90;
    wrapper.vm.fpTargetReward = 5;

    expect(wrapper.vm.checkFormValid()).toBe(true);
  });

  test('Call "checkFormValid" with invalid "levelCost"', () => {
    const wrapper = factory();
    wrapper.vm.levelCost = -1;
    wrapper.vm.currentDeposits = 860;
    wrapper.vm.yourParticipation = 10;
    wrapper.vm.otherParticipation = 50;
    wrapper.vm.yourArcBonus = 90;
    wrapper.vm.fpTargetReward = 5;

    expect(wrapper.vm.checkFormValid()).toBe(false);
  });

  test('Call "checkFormValid" with "currentDeposits" > "levelCost"', () => {
    const wrapper = factory();
    wrapper.vm.levelCost = 1720;
    wrapper.vm.currentDeposits = 1860;
    wrapper.vm.yourParticipation = 10;
    wrapper.vm.otherParticipation = 50;
    wrapper.vm.yourArcBonus = 90;
    wrapper.vm.fpTargetReward = 5;

    expect(wrapper.vm.checkFormValid()).toBe(false);
  });

  test('Call "checkFormValid" with "yourParticipation" > "levelCost"', () => {
    const wrapper = factory();
    wrapper.vm.levelCost = 1720;
    wrapper.vm.currentDeposits = 860;
    wrapper.vm.yourParticipation = 10000;
    wrapper.vm.otherParticipation = 50;
    wrapper.vm.yourArcBonus = 90;
    wrapper.vm.fpTargetReward = 5;

    expect(wrapper.vm.checkFormValid()).toBe(false);
  });

  test('Call "checkFormValid" with "otherParticipation" > "levelCost"', () => {
    const wrapper = factory();
    wrapper.vm.levelCost = 1720;
    wrapper.vm.currentDeposits = 860;
    wrapper.vm.yourParticipation = 10;
    wrapper.vm.otherParticipation = 5000;
    wrapper.vm.yourArcBonus = 90;
    wrapper.vm.fpTargetReward = 5;

    expect(wrapper.vm.checkFormValid()).toBe(false);
  });

  test('Call "checkFormValid" with "yourParticipation" + "otherParticipation" > "currentDeposits"', () => {
    const wrapper = factory();
    wrapper.vm.levelCost = 1720;
    wrapper.vm.currentDeposits = 860;
    wrapper.vm.yourParticipation = 800;
    wrapper.vm.otherParticipation = 61;
    wrapper.vm.yourArcBonus = 90;
    wrapper.vm.fpTargetReward = 5;

    expect(wrapper.vm.checkFormValid()).toBe(false);
  });

  test('Call "checkQuery" with query parameters', () => {
    const wrapper = factory(
      { levelData: gbData },
      {
        $route: {
          query: {
            sp_lc: 1720,
            sp_cd: 860,
            sp_yp: 10,
            sp_op: 50,
            sp_yab: 90,
            sp_ftr: 5
          }
        }
      }
    );

    expect(wrapper.vm.levelCost).toBe(1720);
    expect(wrapper.vm.currentDeposits).toBe(860);
    expect(wrapper.vm.yourParticipation).toBe(10);
    expect(wrapper.vm.otherParticipation).toBe(50);
    expect(wrapper.vm.yourArcBonus).toBe(90);
    expect(wrapper.vm.fpTargetReward).toBe(5);
  });

  test('Change values but with "yourParticipation" null and "otherParticipation" empty', () => {
    const wrapper = factory();
    wrapper.vm.levelCost = 812;
    wrapper.vm.currentDeposits = 633;
    wrapper.vm.yourParticipation = null;
    wrapper.vm.otherParticipation = "";
    wrapper.vm.yourArcBonus = 90;
    wrapper.vm.fpTargetReward = 65;

    expect(wrapper.vm.fp).toBe(90);
    expect(wrapper.vm.roi).toBe(34);
    expect(wrapper.vm.checkFormValid()).toBe(true);
  });
});

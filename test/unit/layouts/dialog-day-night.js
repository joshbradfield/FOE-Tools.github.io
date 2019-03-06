import { shallowMount } from "@vue/test-utils";
import Component from "../../../layouts/_default/components/dialogDayNight/DialogDayNight";
import { getView } from "../localVue";
import moment from "moment";

const factory = (mocks = {}) => {
  const { localVue, store } = getView();
  return shallowMount(Component, {
    localVue: localVue,
    store: store,
    stubs: ["nuxt"],
    mocks: {
      $route: {
        path: "foo"
      },
      ...mocks
    }
  });
};

const date = new Date();
date.setUTCHours(12);
date.setUTCMinutes(42);

describe("Default", () => {
  test("Is a Vue instance", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("Initialize with cookies", () => {
    const wrapper = factory({
      $cookies: {
        get: jest.fn().mockImplementation(key => {
          switch (key) {
            case "dayStart":
              return "12:34";
            case "nightStart":
              return "21:12";
          }
          return undefined;
        })
      }
    });
    expect(moment(wrapper.vm.dayStart).format("HH:mm")).toBe("12:34");
    expect(moment(wrapper.vm.nightStart).format("HH:mm")).toBe("21:12");
  });

  test('Change "dayStart" value', () => {
    const wrapper = factory();
    expect(moment(wrapper.vm.dayStart).format("HH:mm")).toBe("08:00");
    wrapper.vm.dayStart = date;
    expect(moment(wrapper.vm.dayStart).format("HH:mm")).toBe("13:42");
  });

  test('Change "nightStart" value', () => {
    const wrapper = factory();
    expect(moment(wrapper.vm.nightStart).format("HH:mm")).toBe("19:30");
    wrapper.vm.nightStart = date;
    expect(moment(wrapper.vm.nightStart).format("HH:mm")).toBe("13:42");
  });

  test('Call "resetNightDay" value', () => {
    const wrapper = factory();
    const date2 = new Date();
    date2.setUTCHours(20);
    date2.setUTCMinutes(12);
    expect(moment(wrapper.vm.nightStart).format("HH:mm")).toBe("19:30");
    expect(moment(wrapper.vm.dayStart).format("HH:mm")).toBe("08:00");
    wrapper.vm.dayStart = date;
    wrapper.vm.nightStart = date2;
    expect(moment(wrapper.vm.dayStart).format("HH:mm")).toBe("13:42");
    expect(moment(wrapper.vm.nightStart).format("HH:mm")).toBe("21:12");

    wrapper.vm.resetNightDay();

    expect(moment(wrapper.vm.dayStart).format("HH:mm")).toBe("08:00");
    expect(moment(wrapper.vm.nightStart).format("HH:mm")).toBe("19:30");
  });
});

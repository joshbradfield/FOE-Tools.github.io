import { shallowMount } from "@vue/test-utils";
import Component from "../../../components/remark/Remark";
import { getView } from "../localVue";

const factory = (md = undefined) => {
  const { localVue, store } = getView();
  return shallowMount(Component, {
    propsData: {
      markdown: md ? md : ""
    },
    localVue,
    store
  });
};

describe("Remark", () => {
  test("Is a Vue instance", () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("Valid value", () => {
    const wrapper = factory("# Hello World :tada:");
    expect(wrapper.emitted()["md-update"][0][0]).toEqual("<h1>Hello World 🎉</h1>\n");
  });

  test("Update markdown", () => {
    const wrapper = factory();
    expect(wrapper.html()).toEqual("<div></div>");
    wrapper.setProps({ markdown: "# Hello World :tada:" });
    expect(wrapper.html()).toEqual("<div><h1>Hello World 🎉</h1>\n</div>");
  });
});

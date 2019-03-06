import VueSelector from "testcafe-nuxt-selectors";

fixture`VueSelector`
  .page("http://localhost:8080")
  /* Wait to root element to appear in each test */
  .beforeEach(async () => await VueSelector());

test("Nuxt is root node", async t => {
  const root = VueSelector();
  const rootVue = await root.getVue();

  await t.expect(root.exists).ok();
  await t.expect(rootVue.state.layoutName).eql("default");
});

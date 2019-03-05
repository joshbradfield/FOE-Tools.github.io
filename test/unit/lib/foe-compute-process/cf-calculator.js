import cfCalculatorProcess from "~/lib/foe-compute-process/cf-calculator";
import { ages } from "../../../../lib/foe-data/rq-quests";

describe("Compute", () => {
  test("Valid Value", () => {
    expect(cfCalculatorProcess.compute(ages.IronAge, 150, 60000, 60000, 0, 0, false, 0, 40, 0)).toMatchSnapshot();
  });

  test("Valid Value with infinite generator with 0 cumulative quests", () => {
    expect(cfCalculatorProcess.compute(ages.IronAge, 460, 60000, 60000, 0, 0, false, 0, 0, 0)).toMatchSnapshot();
  });

  test("Valid Value with infinite generator with 14 cumulative quests", () => {
    expect(cfCalculatorProcess.compute(ages.IronAge, 460, 60000, 60000, 0, 0, false, 0, 0, 14)).toMatchSnapshot();
  });

  test("Valid Value with second RQ and ", () => {
    expect(
      cfCalculatorProcess.compute(ages.ModernEra, 922, 60000000, 60000000, 123, 242, true, 720000, 42, 0)
    ).toMatchSnapshot();
  });
});

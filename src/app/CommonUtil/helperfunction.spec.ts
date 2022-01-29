import { helperfunction } from "./helperfunction";
describe("compute Util Function", () => {
  it("should return 1 row after get the two row of same col", () => {
    const result = helperfunction.groupbyData(
      [
        {
          Date: "01/01/2011",
          Amount: 50,
        },

        {
          Date: "01/01/2011",
          Amount: 5,
        },
      ],
      "Date",
      "Amount"
    );
    expect(result.length).toBe(1);
  });
});

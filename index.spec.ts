import { lintText } from "./lint";

describe("hoge", () => {
  // 正常系
  it("foo", () => {
    lintText("ベンダ\n\njquery\n").then(result => {
      expect(result[0].messages[0].type).toEqual("lint")
    })
  });
});

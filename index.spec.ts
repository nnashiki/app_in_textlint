import { lintText } from "./lint";

describe("lint.ts", () => {
  // 正常系
  it("lint期待値が正しいか", () => {
    lintText("ベンダ\n\n    jquery\n").then((result) => {
      // maessage 
      expect(result[0].messages[0].message).toEqual("ベンダ => ベンダー");
      // line: n行目
      expect(result[0].messages[0].line).toEqual(1);
      // column: 問題箇所開始位置(各行のn文字目から)
      expect(result[0].messages[0].column).toEqual(1);

      // maessage 
      expect(result[0].messages[1].message).toEqual("jquery => jQuery");
      // line: n行目
      expect(result[0].messages[1].line).toEqual(3);
      // column: 問題箇所開始位置(各行のn文字目から)
      expect(result[0].messages[1].column).toEqual(5);
    });
  });
});

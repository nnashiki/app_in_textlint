import {lintText} from "./lint";
import * as path from 'path';

describe("lint.ts", () => {
    // 正常系
    it("訂正するべきドキュメントがある場合にlintTextの結果が正しいか", () => {
        const options = {
            rules: ["prh"],
            formatterName: "pretty-error",
            rulesConfig: {
                "prh": {
                    "rulePaths": [
                        path.join(__dirname, "./prh1.yml"),
                        path.join(__dirname, "./prh2.yml"),
                    ]
                },
            },
        };
        lintText("ベンダ\n\n    jquery\n", options).then((result) => {
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
    it("訂正するべきドキュメントがない場合にlintTextの結果が正しいか", () => {
        const options = {
            rules: ["prh"],
            formatterName: "pretty-error",
            rulesConfig: {
                "prh": {
                    "rulePaths": [
                        path.join(__dirname, "./prh1.yml"),
                        path.join(__dirname, "./prh2.yml"),
                    ]
                },
            },
        };
        lintText("ベンダー\n\n    jQuery\n", options).then((result) => {
            expect(result).toEqual([]);
        });
    });
});

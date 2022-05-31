import { TextLintEngine } from "textlint";
import * as path from 'path';
//import { TextlintResult } from "@textlint/kernel";

export const lintText = (text: string) => {
    const options = {
        // load rules from [../rules]
        rules: ["prh"],
        formatterName: "pretty-error",
        rulesConfig: {
            "prh": {
              "rulePaths" :[path.join(__dirname, "./prh.yml")]
            },
        },
    };
    const engine = new TextLintEngine(options);
    return engine.executeOnText(text).then(function (results) {
        if (engine.isErrorResults(results)) {
            console.log(results[0].messages)
            return results
        } else {
            console.log("All Passed!");
        }
    });
}

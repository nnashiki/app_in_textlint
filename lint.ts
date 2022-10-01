import {TextLintEngine} from "textlint";
import * as path from 'path';
import {TextlintResult} from "@textlint/kernel";

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

export const lintText = async (text: string, options): Promise<TextlintResult[]> => {
    const engine = new TextLintEngine(options);
    return engine.executeOnText(text).then(function (results) {
        if (engine.isErrorResults(results)) {
            console.log(results[0].messages)
            return results
        } else {
            console.log("All Passed!");
            return []
        }
    });
}


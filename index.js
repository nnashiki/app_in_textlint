// LICENSE : MIT
"use strict";
const TextLintEngine = require("textlint").TextLintEngine;
const path = require("path");
function lintFile(filePath) {
    const options = {
        // load rules from [../rules]
        rules: ["prh"],
        formatterName: "pretty-error"
    };
    const engine = new TextLintEngine(options);
    const filePathList = [path.resolve(process.cwd(), filePath)];
    return engine.executeOnFiles(filePathList).then(function (results) {
        if (engine.isErrorResults(results)) {
            console.log(results[0].messages)
        } else {
            console.log("All Passed!");
        }
    });
}

lintFile(`${__dirname}/target_doc.md`).catch(function (error) {
    console.error(error);
    process.exit(1);
});
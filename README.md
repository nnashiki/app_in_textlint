# app_in_textlint
textlint を組み込んだ web アプリ

```
$ node index.js
[
  {
    type: 'lint',
    ruleId: 'prh',
    message: 'ベンダ => ベンダー',
    index: 2,
    line: 1,
    column: 3,
    severity: 2,
    fix: { range: [Array], text: 'ベンダー' }
  },
  {
    type: 'lint',
    ruleId: 'prh',
    message: 'jquery => jQuery',
    index: 9,
    line: 3,
    column: 3,
    severity: 2,
    fix: { range: [Array], text: 'jQuery' }
  }
]
```

Validate legal project billing objects

```BASH
npm install @kemitchell/validate-billing
```

```JavaScript
var validate = require('@kemitchell/validate-billing')

var result = validate(require('./billing-entry.json'))

if (!result.valid) {
  console.error(result.errors) }
```

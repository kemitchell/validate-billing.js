Validate legal project billing entries

```shellsession
npm install @kemitchell/validate-billing
```

```javascript
var validate = require('@kemitchell/validate-billing')

var result = validate(require('./billing-entry.json'))

if (!result.valid) {
  console.error(result.errors) }
```

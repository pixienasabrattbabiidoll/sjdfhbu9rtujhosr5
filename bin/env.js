const fs = require('fs');

const res = {};
for (const [key, value] of Object.entries(process.env)) {
  if (key.startsWith('REACT_APP_')) {
    res[key] = value;
  }
}

fs.writeFileSync('./runtime-env.js', `window.__RUNTIME_CONFIG__ = ${JSON.stringify(res)}`);

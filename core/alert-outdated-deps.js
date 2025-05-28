// Skrypt: alert-outdated-deps.js
// Sprawdza najnowsze wersje zależności z npm Registry API (asynchronicznie)

const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const pkgPath = path.join(__dirname, '../package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

const dependencies = Object.entries(pkg.dependencies || {});
const MAX_REQUESTS = 10; // limit zapytań na uruchomienie

console.log('Skanowanie zależności (max', MAX_REQUESTS, 'zapytań)...');

async function checkLatest(dep, version) {
  try {
    const res = await fetch(`https://registry.npmjs.org/${dep}`);
    const data = await res.json();
    const latest = data['dist-tags']?.latest;
    if (latest && latest !== version.replace('^', '')) {
      console.log(
        `\x1b[33m${dep}\x1b[0m: zainstalowana ${version}, najnowsza ${latest} \x1b[31m(AKTUALIZUJ!)\x1b[0m`,
      );
    } else {
      console.log(`${dep}: OK (${version})`);
    }
  } catch (e) {
    console.log(`${dep}: błąd pobierania wersji`);
  }
}

(async () => {
  for (let i = 0; i < Math.min(dependencies.length, MAX_REQUESTS); i++) {
    const [dep, version] = dependencies[i];
    await checkLatest(dep, version);
  }
  if (dependencies.length > MAX_REQUESTS) {
    console.log(
      `...Pominięto ${dependencies.length - MAX_REQUESTS} zależności (limit zapytań).`,
    );
  }
  console.log('Skanowanie zakończone.');
})();

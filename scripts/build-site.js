const fs = require('fs');
const path = require('path');

require('./validate-site');

const outputDir = path.resolve('dist');
fs.rmSync(outputDir, { recursive: true, force: true });

for (const source of ['index.html', 'exhibition-2.html', 'about.html', 'src', 'events']) {
  const destination = path.join(outputDir, source);
  fs.cpSync(source, destination, { recursive: true });
}

console.log(`Production site built in ${path.relative(process.cwd(), outputDir)}/`);

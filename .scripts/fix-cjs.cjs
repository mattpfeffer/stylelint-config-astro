#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

const cjsDir = path.join(__dirname, '..', 'dist', 'cjs');

if (!fs.existsSync(cjsDir)) {
    process.exit(0);
}

for (const entry of fs.readdirSync(cjsDir)) {
    if (!entry.endsWith('.js')) continue;
    const filePath = path.join(cjsDir, entry);
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('module.exports = exports.default')) continue;
    fs.writeFileSync(filePath, `${content}\nmodule.exports = exports.default;\n`, 'utf8');
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const packageName = 'stylelint-config-astro';
const config = {
    extends: [`${packageName}/astro`, `${packageName}/vue`, `${packageName}/svelte`, `${packageName}/html`]
};
exports.default = config;

module.exports = exports.default;

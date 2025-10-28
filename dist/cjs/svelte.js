"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const svelteExtensions = ['.svelte'];
const config = {
    overrides: [
        {
            files: svelteExtensions.flatMap((ext) => [`*${ext}`, `**/*${ext}`]),
            customSyntax: 'postcss-html'
        }
    ]
};
exports.default = config;

module.exports = exports.default;

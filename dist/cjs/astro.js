"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const astroExtensions = ['.astro'];
const config = {
    overrides: [
        {
            files: astroExtensions.flatMap((ext) => [`*${ext}`, `**/*${ext}`]),
            customSyntax: 'postcss-html'
        }
    ]
};
exports.default = config;

module.exports = exports.default;

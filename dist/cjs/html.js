"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const htmlExtensions = ['.html', '.htm'];
const config = {
    overrides: [
        {
            files: htmlExtensions.flatMap((ext) => [`*${ext}`, `**/*${ext}`]),
            customSyntax: 'postcss-html'
        }
    ]
};
exports.default = config;

module.exports = exports.default;

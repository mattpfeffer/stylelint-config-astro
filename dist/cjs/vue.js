"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vueExtensions = ['.vue'];
const config = {
    overrides: [
        {
            files: vueExtensions.flatMap((ext) => [`*${ext}`, `**/*${ext}`]),
            customSyntax: 'postcss-html'
        }
    ]
};
exports.default = config;

module.exports = exports.default;

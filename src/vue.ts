const vueExtensions = ['.vue'];

module.exports = {
    overrides: [
        {
            files: vueExtensions.flatMap((ext) => [`*${ext}`, `**/*${ext}`]),
            customSyntax: 'postcss-html'
        }
    ]
};

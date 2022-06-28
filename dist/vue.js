const vueExtensions = ['.svelte'];
module.exports = {
    overrides: [
        {
            files: vueExtensions.flatMap((ext) => [`*${ext}`, `**/*${ext}`]),
            customSyntax: 'postcss-html'
        }
    ]
};

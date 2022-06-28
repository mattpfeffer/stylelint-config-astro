const svelteExtensions = ['.svelte'];

module.exports = {
    overrides: [
        {
            files: svelteExtensions.flatMap((ext) => [`*${ext}`, `**/*${ext}`]),
            customSyntax: 'postcss-html'
        }
    ]
};

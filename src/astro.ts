const astroExtensions = ['.astro'];

module.exports = {
    overrides: [
        {
            files: astroExtensions.flatMap((ext) => [`*${ext}`, `**/*${ext}`]),
            customSyntax: 'postcss-html'
        }
    ]
};

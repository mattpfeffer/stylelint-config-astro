const astroExtensions = ['.astro'];
const config = {
    overrides: [
        {
            files: astroExtensions.flatMap((ext) => [`*${ext}`, `**/*${ext}`]),
            customSyntax: 'postcss-html'
        }
    ]
};
export default config;

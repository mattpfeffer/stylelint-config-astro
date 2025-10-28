const htmlExtensions = ['.html', '.htm'];

const config = {
    overrides: [
        {
            files: htmlExtensions.flatMap((ext) => [`*${ext}`, `**/*${ext}`]),
            customSyntax: 'postcss-html'
        }
    ]
};

export default config;

const htmlExtensions = ['.html', '.htm'];

module.exports = {
    overrides: [
        {
            files: htmlExtensions.flatMap((ext) => [`*${ext}`, `**/*${ext}`]),
            customSyntax: 'postcss-html'
        }
    ]
};

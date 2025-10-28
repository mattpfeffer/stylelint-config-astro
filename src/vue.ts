const vueExtensions = ['.vue'];

const config = {
    overrides: [
        {
            files: vueExtensions.flatMap((ext) => [`*${ext}`, `**/*${ext}`]),
            customSyntax: 'postcss-html'
        }
    ]
};

export default config;

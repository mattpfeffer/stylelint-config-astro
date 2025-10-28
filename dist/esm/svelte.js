const svelteExtensions = ['.svelte'];
const config = {
    overrides: [
        {
            files: svelteExtensions.flatMap((ext) => [`*${ext}`, `**/*${ext}`]),
            customSyntax: 'postcss-html'
        }
    ]
};
export default config;

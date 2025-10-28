const packageName = 'stylelint-config-astro';

const config = {
    extends: [`${packageName}/astro`, `${packageName}/vue`, `${packageName}/svelte`, `${packageName}/html`]
};

export default config;

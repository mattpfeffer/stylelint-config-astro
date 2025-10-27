# stylelint-config-astro

A shareable Stylelint config for linting Astro (`.astro`) files :rocket:

## The low down

This config bundles [postcss-html] and configures it to parse .astro files so you can use Stylelint
on the `<style></style>` section within those components.

## Minimum Requirements

From v2, this package is compatible with the following peer dependencies:

-   [stylelint] v16.0.0 and above
-   [postcss-html] v1.6.0 and above

## Installation

```sh
# Using npm
npm install --save-dev postcss-html stylelint-config-astro

# Using yarn
yarn add --dev postcss-html stylelint-config-astro

# Using pnpm
pnpm add --save-dev postcss-html stylelint-config-astro
```

## Usage

Append to the [`extends` array](https://stylelint.io/user-guide/configure/#extends) in your
`stylelint.config.js` or equivalent. It's usually best placed **after** your other rulesets.

```jsonc
{
    "extends": [
        // other configs ...
        "stylelint-config-astro"
    ]
}
```

## Integrations

### Visual Studio Code

Use the official
[stylelint.vscode-stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
extension.

Add the `.astro` file extension to `stylelint.validate` under settings to enable linting for Astro
files. It's also a good idea to add `.html`, `.vue`, `.svelte`, etc. if you're working in a mixed project. This package also adds basic support for those file types.

**.vscode/settings.json**:

```jsonc
{
    "stylelint.validate": [
        "html",
        "vue",
        "svelte",
        // other file extensions...
        "astro"
    ]
}
```

## Credits

Although this package is not a direct fork it heavily leverages the the work of
[@ota-meshi](https://github.com/ota-meshi) in
[stylelint-config-html](https://github.com/ota-meshi/stylelint-config-html).

[stylelint]: https://stylelint.io/
[postcss-html]: https://github.com/ota-meshi/postcss-html

_Note: At the time of development, stylelint-config-html did not support Astro files natively. It now does, so you may want to consider using that package instead if you want support for a broader set of file types._

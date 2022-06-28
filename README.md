# stylelint-config-astro

A shareable Stylelint config for linting Astro (`.astro`) files :rocket:

## The low down

This config bundles [`postcss-html`] and configures it to parse .astro files so you can use Stylelint
on the `<style></style>` section within those components.

## Minimum Requirements

This package requires the following peer depenencies:

-   [stylelint] v14.0.0 and above
-   [postcss-html] v1.0.0 and above

## Installation

```sh
# Using npm
npm install --save-dev postcss-html stylelint-config-astro

# Using Yarn
yarn add --dev postcss-html stylelint-config-astro
```

## Usage

Set your `stylelint` config to:

```json
{
    "extends": "stylelint-config-astro"
}
```

## Integrations

### Visual Studio Code

Use the official
[stylelint.vscode-stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
extension.

Add the `.astro` file extension to `stylelint.validate` under settings to enable linting for Astro
files.

**.vscode/settings.json**:

```jsonc
{
    "stylelint.validate": [
        ...,
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

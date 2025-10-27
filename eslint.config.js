const neostandard = require('neostandard');

module.exports = [
    ...neostandard({
        env: ['node', 'browser', 'amd'],
        ts: true,
        noStyle: true
    }),
    {
        rules: {
            'no-console': 'warn'
        }
    }
];

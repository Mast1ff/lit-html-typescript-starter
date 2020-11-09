'use strict';

module.exports = {
    parserOptions: {
    },
    extends: [
        'airbnb-base/legacy',
    ],
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    rules: {
        indent: ['error', 4],
        'no-tabs': 'off',
        'eol-last': 'warn',
        'comma-dangle': ['warn', 'always-multiline'],
        'comma-spacing': 'warn',
        'max-len': ['error', {
            code: 200,
        }],
        'linebreak-style': 'off',
        'arrow-body-style': ['warn', 'always'],
        'prefer-promise-reject-errors': 'off',
        'prefer-const': ['warn', {
            destructuring: 'all',
            ignoreReadBeforeAssign: false,
        }],
        'object-curly-newline': ['warn', {
            ObjectPattern: { multiline: true },
        }],
        'object-curly-spacing': ['warn', 'always'],
        'no-underscore-dangle': 'off',
        'no-template-curly-in-string': 'error',
        'no-return-assign': 'off',
        'no-use-before-define': 'off',
        'no-empty-pattern': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                'plugin:@typescript-eslint/recommended',
            ],
            plugins: [
                '@typescript-eslint/eslint-plugin',
            ],
            parser: '@typescript-eslint/parser',
            rules: {
                '@typescript-eslint/no-empty-interface': 'off',
                '@typescript-eslint/ban-types': 'off',
            },
        },
    ],
};

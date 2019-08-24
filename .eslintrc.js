module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'prettier',
        'prettier/react',
    ],
    globals: {
        __PATH_PREFIX__: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 9,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'react-hooks',
        'prettier'
    ],
    rules: {
        'no-multiple-empty-lines': ['error', { 'max': 2, 'maxBOF': 1, 'maxEOF': 1 }],
        'prettier/prettier': ['error', { singleQuote: true }],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'quotes': [2, 'single', { avoidEscape: true }],
        'react/sort-prop-types': ['error', { 'sortShapeProp': true }]
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
    plugins: ['@typescript-eslint'],
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'max-len': ['error', { code: 80 }],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
            },
        ],
    },
};

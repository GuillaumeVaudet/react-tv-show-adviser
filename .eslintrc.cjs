module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['plugin:react/recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    plugins: ['react', 'filenames'],
    rules: {
        'filenames/match-exported': 'error',
        'react/jsx-indent': ['error', 2],
        'react/jsx-indent-props': ['error', 2],
        'react/jsx-one-expression-per-line': ['error', {allow: 'single-child'}],
        indent: ['error', 2, { SwitchCase: 1, ignoredNodes: ['JSXElement', 'TemplateLiteral'] }],
        'sort-imports': ['error', {
            ignoreCase: false,
            ignoreDeclarationSort: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
        }],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-curly-spacing': ['error', 'always']
    }
}
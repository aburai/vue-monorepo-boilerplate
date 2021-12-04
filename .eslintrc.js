module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': ['warn', 4],
        'vue/script-indent': ['warn', 4, {
            'baseIndent': 1,
            'switchCase': 1
        }]
    },
    overrides: [{
        'files': ['*.vue'],
        'rules': {
            'indent': 'off'
        }
    }],
    parserOptions: {
        parser: 'babel-eslint'
    }
}

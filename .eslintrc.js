/* eslint-disable linebreak-style */
module.exports = {
    extends: ['plugin:vue/vue3-essential', 'airbnb-base'],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        // parser: 'babel-eslint',
        parser: '@typescript-eslint/parser',

    },
    env: {
        browser: true,
    },
    plugins: ['vue','@typescript-eslint'],
    rules: {
    // 自己配置的规则
        indent: [2, 4],
        'no-unused-vars': [2, {
            vars: 'local', // "local",允许声明未使用变量
            args: 'all', // 检查所有参数
        }],
        'max-len': ['error', { code: 300 }],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'import/no-unresolved': 0,
        '@typescript-eslint/rule-name': 'error',
        'import/no-absolute-path': [0], // 关闭不能使用绝对路径导入模块
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {},
        },
    ],
    settings: { // @路径引入的文件也需要校验
        'import/resolver': {
            alias: {
                map: [
                    ['@', './src'],
                ],
                extensions: ['.ts', '.js', '.jsx', '.json', '.vue'],
            },
        },
    },
        
};

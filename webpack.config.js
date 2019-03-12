const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    context: __dirname,
    entry: './src/main.ts',
    output: {
        path: __dirname,
        filename: 'dist/build.js'
    },
    resolve: {
        extensions: ['vue', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new VueLoaderPlugin()
    ]
}
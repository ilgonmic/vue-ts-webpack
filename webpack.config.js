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
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new VueLoaderPlugin()
    ]
}
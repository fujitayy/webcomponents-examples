const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/main.js',
        'custom-elements-es5-adapter': './bower_components/webcomponentsjs/custom-elements-es5-adapter.js'
    },
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    }
};

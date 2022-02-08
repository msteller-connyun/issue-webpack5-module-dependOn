    const path = require('path');


module.exports = {
    entry: {
        'lib/shared/shared': {
            import: 'lit'
        },
        main: {
            import: './src/main.ts',
            dependOn: 'lib/shared/shared'
        }
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js',
        library: {
            type: "module",
        },
    },
    experiments: {
        outputModule: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
}
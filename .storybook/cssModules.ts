const path = require('path');
import MiniCssExtractPlugin from "mini-css-extract-plugin";


const cssModules = () => async (config) => {
    config.resolve.modules = [
        ...(config.resolve.modules || []),
        path.resolve(__dirname, "../src"),
      ];

    config.module.rules.find(
        rule => rule.test.toString() == '/\\.css$/'
    ).exclude = /\.module\.css%/

    config.module.rules.push({
        test: /\.modules\.css$/,
        use : [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.css')),
                    },
                },
            },
            'style-loader',
        ]
    })
    const imageRule = config.module.rules.find((rule) =>
        rule.test?.test(".svg")
    );
    imageRule.exclude = /\.svg$/;
    config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    });

    return config
} 
module.exports = cssModules
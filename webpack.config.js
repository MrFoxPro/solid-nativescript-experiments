const webpack = require("@nativescript/webpack");
const { getPlatformName } = require("@nativescript/webpack/dist/helpers/platform");

// const fakeEnv = {
// 	"hmr": true,
// 	"externals": [
// 		"~/package.json",
// 		"package.json"
// 	],
// 	"android": true,
// 	"appPath": "app",
// 	"appResourcesPath": "App_Resources",
// 	"nativescriptLibPath": "C:\\Users\\foxpro\\AppData\\Roaming\\npm\\node_modules\\nativescript\\lib\\nativescript-cli-lib.js",
// 	"config": false,
// 	"sourceMap": true,
// 	"watch": true
// }
// webpack.init(fakeEnv);
// webpack.useConfig('base')
// const config = solid(webpack.resolveChainableConfig(), fakeEnv)
// //
module.exports = (env) => {
    webpack.init(env);
    webpack.useConfig("typescript");
    const config = solid(webpack.resolveChainableConfig(), env);
    return config.toConfig();
};

/**
 *
 * @param {import('webpack-chain')} config
 * @param {*} env
 * @returns
 */
function solid(config, env) {
    const platform = getPlatformName();
    const mode = env.production ? "production" : "development";
    const production = mode === "production";

    config.resolve.extensions.prepend(".tsx").prepend(`.${platform}.tsx`);

    config.module.rules.delete("ts").end();

    config.module
        .rule("bundle-source")
        .test(/\.(t|j)sx?$/)
        .exclude.add(/node_modules/)
        .end()
        .use("babel-loader")
        .loader("babel-loader")
        .options({
            babelrc: false,
            configFile: false,
            presets: [
                [
                    "babel-preset-solid",
                    {
                        moduleName: "./renderer.ts",
                        // requireImportSource: true,
                        generate: "universal",
                    },
                ],
                "@babel/typescript",
                [
                    "@babel/env",
                    {
                        useBuiltIns: "usage",
                        corejs: "3.8.1",
                    },
                ],
            ],
        });

    return config;
}

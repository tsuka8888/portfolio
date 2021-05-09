module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: '@import "./src/styles/modules/_global.scss";', //グローバルで読みたいファイル名
            },
        },
    },
    pages: {
        index: {
            entry: "src/main.js",
            title: "portfolio",
        },
    },
    outputDir: "docs",
    assetsDir: "./",
    publicPath: "./",
};

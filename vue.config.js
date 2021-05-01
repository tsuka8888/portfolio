module.exports = {
    css: {
      loaderOptions: {
        sass: {
          data: '@import "./src/styles/modules/_global.scss";' //グローバルで読みたいファイル名
        }
      }
    },
  };
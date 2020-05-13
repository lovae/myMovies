module.exports = {
  devServer: {
    proxy: {
      "/j": {
        target: "https://movie.douban.com",
        changeOrigin: true
      },
      "/subject": {
        target: "https://movie.douban.com",
        changeOrigin: true
      }
    }
  }
};

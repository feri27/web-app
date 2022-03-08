module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'https://api.ic.peplink.com/api/oauth2/token',
          changeOrigin: false
        },
      }
    }
  }
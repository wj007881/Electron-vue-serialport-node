const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
    publicPath: './',
    assetsDir: 'assets',
    outputDir: 'dist',
    devServer: {
        // can be overwritten by process.env.HOST
        host: '0.0.0.0',
        port: 7895
      },
    chainWebpack: config => {
        // 路径别名，如用“@”指代“src”等
        // Path alias, such as "@" for "src", etc.
        config.resolve.alias
          .set('@', resolve('src'))
          .set('src', resolve('src'))
          .set('static', resolve('src/assets'))
          .set('views', resolve('src/views'))
          .set('components', resolve('src/components'))
        // svg config
        const svgRule = config.module.rule('svg')
        svgRule.uses.clear()
        svgRule.use('svg-sprite-loader').loader('svg-sprite-loader')
          .options({
            symbolId: 'icon-[name]'
          })
      },
    pluginOptions: {
        electronBuilder: {
            builderOptions: {
                "appId": "com.rymcu.nebula-helper",
                "productName": "LAAT",
                "copyright": "Copyright © rymcu.com;Ryan",
                "win": {
                    "icon": "./favicon.ico",
                    "target": [
                        {
                            "target": "nsis",
                            "arch": [
                                "x64",
                                "ia32"
                            ]
                        }
                    ]
                },
                "linux": {
                    "icon": "./favicon.ico",
                    "target": [
                        "snap"
                    ]
                }
            }
        }
    }
}
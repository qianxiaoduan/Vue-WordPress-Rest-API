const path = require('path')
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: (config) => {
    config.resolve.alias
    .set('@$', resolve('src'))
    .set('@api', resolve('src/api'))
    .set('@assets', resolve('src/assets'))
    .set('@comp', resolve('src/components'))
    .set('@views', resolve('src/views'))
    .set('@layout', resolve('src/layout'))
    .set('@static', resolve('src/static'))
},
devServer: {
    port: 8888,
},
}
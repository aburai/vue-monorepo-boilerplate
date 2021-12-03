// vue.config.js
module.exports = {
    devServer: {
        port: 3280,
        proxy: 'http://localhost:3200',
        stats: 'minimal',
        progress: false
    }
}

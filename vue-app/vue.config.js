module.exports = {
    configureWebpack: {
        output: {
            library: 'vueApp',
            libraryTarget: 'umd'
        }
    },
    devServer: {
        port: 8000,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
}
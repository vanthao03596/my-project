module.exports = {
    // proxy API requests to Valet during development
    devServer: {
        proxy: 'http://my-project.test'
    },
    chainWebpack: config => {
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()

        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
    },

    // output built static files to Laravel's public dir.
    // note the "build" script in package.json needs to be modified as well.
    outputDir: '../public',

    // modify the location of the generated HTML file.
    // make sure to do this only in production.
    indexPath:
        process.env.NODE_ENV === 'production'
            ? '../resources/views/index.blade.php'
            : 'index.html'
}

var path = require('path')

function resolve(dir) {
    return path.join(__dirname, './', dir)
}

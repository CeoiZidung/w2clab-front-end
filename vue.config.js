const webpack=require('webpack');

module.exports={
    devServer:{
        open:'google'
    },
    configureWebpack: {
        plugins: [
          new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
          })
        ]
      }
}
module.exports = {
   entry  : './index.js',
   output : {
       path     : __dirname,
       filename : './dist/index.js',
       libraryTarget: 'umd'
   },
   module : {
       loaders: [ {
               test   : /.js$/,
               loader : 'babel-loader'
           }
       ]
     }
 };

import babelrc from 'babelrc-rollup';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

const configuration = {
    entry: './index.js',
    dest: './dist/index.js',
    format: 'umd',
    moduleName: 'Percentile',
    plugins: [ babel(babelrc()), uglify() ]
};

export default configuration;

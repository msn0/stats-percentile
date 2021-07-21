import { babel } from '@rollup/plugin-babel';

const config = {
    input: './index.js',
    output: {
        name: '_stats_percentile',
        dir: 'dist',
        format: 'umd'
    },
    plugins: [babel({ babelHelpers: 'bundled' }, { useESModules: false })]
};

export default config;

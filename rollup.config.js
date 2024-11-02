import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';

export default {
    input: 'index.js',
    output: [
        {
            file: 'dist/simple-material-ui.cjs.js',
            format: 'cjs',
            exports: 'named',
        },
        {
            file: 'dist/simple-material-ui.esm.js',
            format: 'esm',
        },
        {
            file: 'dist/simple-material-ui.umd.js',
            format: 'umd',
            name: 'SimpleMaterialUI',
            globals: {},
        },
    ],
    plugins: [
        resolve(),
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
        }),
    ],
    external: [],
};
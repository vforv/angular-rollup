
const angular = require('rollup-plugin-angular');
const ts = require('rollup-plugin-typescript');
const resolve = require('rollup-plugin-node-resolve');
const alias = require('rollup-plugin-alias');
const rxPaths = require('rxjs/_esm5/path-mapping');
const server = require('rollup-plugin-server');
const commonjs = require('rollup-plugin-commonjs');
const uglify = require('rollup-plugin-uglify');
const gzip = require("rollup-plugin-gzip");
const progress = require('rollup-plugin-progress');
const copy = require('rollup-plugin-copy');
const babel = require('rollup-plugin-babel');

let input = {};

let output = { dest: './dist/client.js', format: 'iife' };


if (process.env.PROD) {

    input = {
        entry: 'js/src/main.js',
        format: 'iife',
        moduleName: 'AppModule',
        sourceMap: true,
        plugins: [
            babel(),
            resolve({
                jsnext: true,
                main: true,
                browser: true
            }),
            uglify(),
            gzip(),
            commonjs(),
            copy({
                "src/assets": "dist/assets"
            })
        ]
    }
} else if (process.env.TEST) {
    input = {
        context: 'this',
        format: 'iife',
        moduleName: 'foo',
        plugins: [
            angular(),
            ts({
                typescript: require('../node_modules/typescript')
            }),
            commonjs(),
            resolve({
                jsnext: true,
                main: true,
                browser: true
            }),
            progress()
        ]
    }
} else {
    input = {
        entry: 'src/main-dev.ts',
        format: 'iife',
        moduleName: 'Devmodule',
        plugins: [
            server('dist'),
            angular(),
            ts({
                typescript: require('../node_modules/typescript')
            }),
            resolve({
                jsnext: true,
                main: true,
                browser: true
            }),
            commonjs(),
            copy({
                "src/assets": "dist/assets"
            })
            // alias(rxPaths()),
        ]
    }
}

module.exports.INPUT = input;
module.exports.OUTPUT = output;

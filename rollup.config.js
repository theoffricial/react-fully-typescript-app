import typescript from '@rollup/plugin-typescript';
import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from 'rollup-plugin-postcss';


// eslint-disable-next-line no-undef
const env = process.env.NODE_ENV;

// Generate sourcemaps for testing 
// eslint-disable-next-line no-undef
const generate_sourcemaps = env !== "production" || process.env.GENERATE_SOURCEMAPS;
// eslint-disable-next-line no-undef
/**
* @type {import('rollup').RollupOptions}
*/
const config = 
{
    input: 'src/app.ts',
    output: [{
        file: 'dist/esm/index.js',
        format: "esm",
        ...(generate_sourcemaps && { sourcemap: true }),
    }, {
        // For legacy browsers
        file: 'dist/cjs/index.js',
        format: "cjs",
        ...(generate_sourcemaps && { sourcemap: true }),
    }],
    plugins: [
        // modules resolvers
        resolve(), 
        commonjs(), 
        // loaders
        postcss(), 
        typescript({ tsconfig: "./tsconfig.json" }),
        // minifier 
        terser()
    ]
}
export default config;
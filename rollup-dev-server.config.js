import typescript from '@rollup/plugin-typescript';
import serve from 'rollup-plugin-serve';
import replace from '@rollup/plugin-replace';
import livereload from "rollup-plugin-livereload";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from 'rollup-plugin-postcss';

/**
* @type {import('rollup').RollupOptions}
*/
const config = 
{
    input: 'src/index.tsx',
    output: {
        file: 'dist/esm/index.js',
        format: "esm",
        sourcemap: true,
        inlineDynamicImports: true,
    },
    plugins: [
        resolve(),
        commonjs(),
        // loaders
        postcss(), 
        typescript({ tsconfig: "./tsconfig.build.json" }), 
        serve({
            verbose: true,
            contentBase: ["", "public"],
            host: "localhost",
            port: 3000,
        }),
        livereload('dist'),
        replace({
            preventAssignment: true,
            'process.env.NODE_ENV': JSON.stringify( 'development' )
        }),
    ],
    
}
export default config;
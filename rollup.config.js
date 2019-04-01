import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import { sizeSnapshot } from 'rollup-plugin-size-snapshot'

const config = {
  input: 'src/index.js',
  output: [
    { file: 'index.js', format: 'cjs' },
    { file: 'es/index.js', format: 'esm' },
  ],
  external: id => !id.startsWith('.') && !id.startsWith('/'),
  plugins: [babel({ exclude: /node_modules/ }), sizeSnapshot(), terser()],
}

export default config

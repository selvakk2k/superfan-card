import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/superfan-card.ts',
  output: {
    file: 'dist/superfan-card.js',
    format: 'es',
  },
  plugins: [
    resolve(),
    typescript(),
    terser(),
  ],
};

import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: 'lib/index.js',
  output: {
    file: 'public/js/index.js',
    format: 'esm',
  },
  plugins: [nodeResolve()],
};

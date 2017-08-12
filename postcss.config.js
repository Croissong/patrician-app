module.exports = ({ env }) => ({
  plugins: {
    'postcss-import': {path: ["src"]},
    'postcss-url': {},
    'postcss-cssnext': {}
  }
});

module.exports = {
  '*': 'prettier --write --cache --ignore-unknown',
  '*.{vue,js,jsx,ts,tsx}': 'eslint --fix',
  '*.{vue,css,less,sass,scss}': 'stylelint --fix --allow-empty-input'
}

module.exports = api => {
  return {
    test: /\.md$/,
    use: [
      {
        loader: 'html-loader',
        options: {
          minimize: true
        }
      },
      {
        loader: '@mdppt/image-loader'
      },
      {
        loader: '@mdppt/parser',
        options: {
          navigationFolder: api.config.pages.sideBarFolder
        }
      }
    ]
  }
}

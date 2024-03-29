# Welcome to MDPPT 👋
![0.0.0](https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000) [![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)]( ) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/ftbjs/mdppt/blob/master/LICENSE)

**(Still under development! not release yet!)**
> A framework for easily creating beautiful presentations using Markdown.

## [Homepage](https://github.com/ftbjs/mdppt)


## Install

```sh
npm i @mdppt/cli -g
```

## Usage

```js
 mdppt new

 mdppt serve <filename>

 mdppt build <filename>
```

## Multi Pages

```js
 mdppt serve .

 mdppt build .
```

## Custom configuration

Root of project create a `mdppt.config.js` file.

```js
module.exports = {
  baseUrl: '/',
  outputDir: 'dist',
  // For multi pages
  pages: {
    // Whether to open multi-page configuration
    enable: false,
    // ignore folders
    ignore: ['**/node_modules/**'],
    // specify a the markdown file name as index page [required]
    entry: 'mdppt'
  },

  // webpack configuration
  devServer: {
    port: 8080,
    open: false
  }
}
```

## Run in local
```sh
git clone https://github.com/ftbjs/mdppt.git

cd mdppt

npm i lerna -g

npm install

# install packages/ dependencies
npm run start

cd packages/mdppt

npm link

# execute all above steps
# you can run below command in global

mdppt serve <filename>
# or
mdppt build <filename>
```
Note: the file should be allow markdown file.[e.g. DEMO](https://raw.githubusercontent.com/ftbjs/mdppt/master/mdppt.md)

## Author

👤 **BiYuqi**

* Website: https://loadingmore.com
* Github: [@BiYuqi](https://github.com/BiYuqi)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/ftbjs/mdppt/issues).

## Show your support

Give a ⭐️ if this project helped you!

[Give a star](https://github.com/ftbjs/mdppt/stargazers)


## 📝 License

Copyright © 2019 [BiYuqi](https://github.com/BiYuqi).

This project is [MIT](https://github.com/ftbjs/mdppt/blob/master/LICENSE) licensed.
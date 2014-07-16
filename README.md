# Examples of Data Structures and Algorithms in JavaScript

The aim of this project is to teach Data Structures and Algorithms by visualizing
them on a web page with [D3.js](http://d3js.org/).

## Prerequisites

[NodeJS](http://nodejs.org) installed.
Node Packages:
`npm -g install browserify node-static watchify`

## Install
`git clone` (this repo's URL)
`cd dsaJS`
`npm install && bower install`

## Build

`browserify public/app.js -t debowerify -o public/bundle.js`

### Auto-Build
`watchify public/app.js -t debowerify -o public/bundle.js -v`

## Run

`static public -p3000` - this assumes you have `npm -g install node-static` as 
a simple web server available.

Visit [http://localhost:3000](http://localhost:3000) in your browser.

# Contributing

Send [Ivan Storck](https://github.com/ivanoats) a (clean) Pull Request on GitHub

# License
Copyright 2014 Code Fellows LLC 
[MIT](http://opensource.org/licenses/MIT)

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

`browserify public/app.js -t debowerify -o public/bundle.js -d`

### Auto-Build
`watchify public/app.js -t debowerify -o public/bundle.js -v -d`

Command line options explanation:
`-t` debowerify: include bower packages
`-o` output to file
`-v` verbose (shows rebundling after writing new file in STDOUT)
`-d` debug, include source maps

## Run

`static public -p3000` - this assumes you have `npm -g install node-static` as 
a simple web server available.

Visit [http://localhost:3000](http://localhost:3000) in your browser.

# Contributing

Send [Ivan Storck](https://github.com/ivanoats) a (clean) Pull Request on GitHub

# License

Use as you wish. Please link here if you can. 

[MIT](http://opensource.org/licenses/MIT) license.

Copyright © 2014 Code Fellows LLC.

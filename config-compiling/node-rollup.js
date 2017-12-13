const rollup = require('rollup');
const async = require('asyncawait/async');
const await = require('asyncawait/await');
const watch = require('watch');
const cheerio = require('cheerio');
const fs = require('fs');
const {INPUT, OUTPUT} = require('./config');

// see below for details on the options
const inputOptions = INPUT;

const outputOptions = OUTPUT;




watch.watchTree('./src', function (f, curr, prev) {

  if (typeof f == "object" && prev === null && curr === null) {
    addLivereloadScript();
    console.log(`Initializing... \n`);
  } else {
    console.log(`${f} changed... \n`);
  }

  async(function build() {
    console.log("Bundling... \n")
    // create a bundle
    const bundle = await(rollup.rollup(inputOptions));

    // generate code and a sourcemap
    // const { code, map } = await (bundle.generate(outputOptions));

    // or write the bundle to disk
    await(bundle.write(outputOptions).then(event => {
      console.log("Bundling completed! \n")
    }));


  })()
});


function addLivereloadScript() {

  var html = fs.readFileSync('./src/index.html', 'utf8');
  var $ = cheerio.load(html);
  
  var scriptNode = '<script> document.write(\'<script src=\"http://\' + (location.host || \'localhost\').split(\':\')[0] + \':35729/livereload.js?snipver=1\"></\' + \'script>\') </script>'
  $('body').append(scriptNode);

  var stream = fs.createWriteStream("./dist/index.html");
  stream.once('open', function (fd) {
    stream.write($.html());
    stream.end();
  });
}



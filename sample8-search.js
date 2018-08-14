var program = require('commander');

program
    .version('0.1.0')
    .parse(process.argv);

console.log('search => ' + process.argv.slice(2));
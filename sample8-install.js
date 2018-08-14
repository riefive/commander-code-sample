var program = require('commander');

program
    .version('0.1.0')
    .parse(process.argv);

console.log('install => ' + process.argv.slice(2));
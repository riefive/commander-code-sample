// Make Colors
var program = require('commander');
 
program
    .version('0.1.0')
    .command('getstream [url]', 'get stream URL')
    .parse(process.argv);

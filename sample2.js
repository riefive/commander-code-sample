// Version option
var program = require('commander');
 
program
    .version('0.0.1', '-v, --version')
    .option('--no-sauce', 'Remove sauce')
    .parse(process.argv);
 
console.log('you ordered a pizza');
if (program.sauce) console.log('  with sauce');
else console.log(' without sauce');
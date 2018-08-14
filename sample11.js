var program = require('commander');
 
program
    .version('0.1.0')
    .option('-v, --verbose', 'Verbose')
    .parse(process.argv);

program.on('option:verbose', function () {
    process.env.VERBOSE = this.verbose;
});

// error on unknown commands
program.on('command:*', function () {
    console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '));
    process.exit(1);
});
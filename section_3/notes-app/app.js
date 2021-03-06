// core modules first

// NPM packages
const chalk = require('chalk');
const yargs = require('yargs');

//My modules
const notes = require('./notes.js');
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

// Create a remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

// Create a read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  }
});

// Create a list command
yargs.command({
  command: 'list',
  describe: 'List all commands',
  handler(argv) {
    notes.listNotes(argv.title);
  }
});
// add, remove, read, list
yargs.parse();

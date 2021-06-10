const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your notes';

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  debugger;
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log('New Note Added!');
  } else {
    console.log('Duplicate Title. Please Enter a Unique Title');
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  try {
    const notesToKeep = notes.filter((note) => {
      console.log(chalk.green.inverse('success'));
      return note.title !== title;
    });
    if (notes.length > notesToKeep.length) {
      saveNotes(notesToKeep);
    } else {
      console.log(chalk.red.inverse('No note found'));
    }
  } catch (error) {
    console.log(chalk.red(error));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  const notesList = notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const foundNote = notes.find((note) => {
    if (note.title === title) {
      console.log(chalk.green(`${note.title}\n${note.body}`));
    } else {
      console.log(chalk.red.inverse(`${title} not found in notes file`));
    }
  });
};

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote
};

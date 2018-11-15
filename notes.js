console.log('Starting notes.js');

const fs = require('fs');



let addNote = (title, body) => {
  console.log('Adding note', title, body);
};

let getAll = () => {
  console.log('Getting all notes');
};

let getNote = (title) => {
  console.log('Getting note', title);
};

let removeNote = (title) => {
  console.log('Removing note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};

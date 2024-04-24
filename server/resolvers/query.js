const Note = require('../models/note');

module.exports = {
  note: ({ id }) => Note.findById(id),
  notes: async () => Note.find(),
};

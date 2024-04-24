const { Note } = require('../models/');

module.exports = {
  newNote: async ({ content }) => {
    const newNote = {
      id: String(Date.now() + 1),
      content: content,
      author: 'Random',
    };

    return await Note.create(newNote);
  },
  updateNote: async ({ id, content }) => {
    return await Note.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $set: {
          content,
        },
      },
      {
        new: true,
      },
    );
  },
  deleteNote: async ({ id }) => {
    try {
      await Note.findOneAndDelete({ _id: id });

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },
};

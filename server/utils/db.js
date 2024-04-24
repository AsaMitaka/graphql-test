const mongoose = require('mongoose');

module.exports = {
  connect: async (DB_HOST) => {
    try {
      await mongoose.connect(DB_HOST);
      console.log('Database connected successfully');
    } catch (error) {
      console.error('Mongoose connection error:', error);
      console.log('Mongoose connection error. Please make sure Mongodb is running');
    }
  },
  close: () => {
    mongoose.connection.close();
  },
};

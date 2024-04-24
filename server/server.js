const dotenv = require('dotenv');
const app = require('./index');
const db = require('./utils/db');

dotenv.config();

const PORT = process.env.PORT || 3000;
const DB_HOST = process.env.DB_HOST;

const start = async () => {
  try {
    await db.connect(DB_HOST);
    console.log('Database connected successfully');
    app.listen(PORT, () => {
      console.log(`Server listening on ${PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
};

start();

const app = require('./app');
const connect = require('./db/connect');
require('dotenv').config();

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connect(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log('server live at http://localhost:%d', port);
    });
  } catch(error) {
    console.log(error);
  }
}

startServer();
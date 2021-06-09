require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const sequelize = require('./db')
const models = require('./models/models')
const fileUpload = require('express-fileupload')
const path = require('path')

const router = require('./routes/index')
const errorHandler = require('./middlewear/ErrorHanding')

const PORT = process.env.PORT

app.use(cors());
app.use(express.json())
app.use(fileUpload({}))
app.use(express.static(path.resolve(__dirname,'static')))
app.use('/api',router)
app.use(errorHandler)


async function start() {
    console.log('serverStart');
    try {
      await sequelize.authenticate()
      await sequelize.sync()
      app.listen(PORT, () => console.log(`${PORT}`));
    } catch (e) {
      console.log('server Error', e.message);
      process.exit(1);
    }
  }
  
  start();
  

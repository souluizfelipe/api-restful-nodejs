const express = require('express');
const cors = require('cors');

const routes = require('./routes/routes');
const db = require('./database/db');
const { all } = require('./routes/routes');

const app = express();

db.conect();


const allowedOrigins = [
  'http://127.0.0.1:5500'
];

app.use(cors({
  origin: function(origin, callback){
    let allowed = true;

    if(!origin) allowed = true;

    if(!allowedOrigins.includes(origin)) allowed = false;

    callback(null, allowed);
  },
}));


app.use(express.json());

app.use('/api', routes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`server on port ${port} working...`));
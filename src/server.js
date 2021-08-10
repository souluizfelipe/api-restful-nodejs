const express = require('express');

const routes = require('./routes/routes');
const db = require('./database/db');

const app = express();

db.conect();

app.use('/api', routes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`server on port ${port} working...`));
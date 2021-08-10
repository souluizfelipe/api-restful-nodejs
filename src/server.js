const express = require('express');

const routes = require('./routes/routes');

const app = express();

app.use('/api', routes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`server on port ${port} working...`));
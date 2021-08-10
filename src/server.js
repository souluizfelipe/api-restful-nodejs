const express = require('express');

const routes = require('./router/routes');

const app = express();

app.use('/', routes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`server on port ${port} working...`));
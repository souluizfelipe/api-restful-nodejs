const mongoose = require('mongoose');

function conect() { 
  
  mongoose.connect('mongodb://localhost:27017/api-restful-course?readPreference=primary&appname=MongoDB%20Compass&ssl=false', 
    {useNewUrlParser: true}, 
    {useUnifiedTopology: true}
  );

  const db = mongoose.connection;

  db.once('open', () => {
    console.log('DB is connected');
  });

  db.on('error', () => {
    console.error.bind(console, 'Connection error: ');
  })
}

module.exports = {
  conect,
}
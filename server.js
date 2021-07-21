// Dependencies
const express = require('express');
const path = require('path');


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3005;

// Set Handlebars as the default template engine.


app.use(express.static(path.join(__dirname, 'public')));


// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});

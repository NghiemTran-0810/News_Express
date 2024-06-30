/** CommonJS **/
const express = require('express');
const app = express();
const { engine } = require('express-handlebars');

app.engine('.hbs', engine({extname: '.hbs'})); // change file name to .hbs
app.set('view engine', '.hbs');
app.set('views', './sources/views'); // path to the views

app.get('/', (req, res) => {
    res.render('home'); 
});

app.get('/news', (req, res) => {
    res.render('news'); 
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
    const message = error
      ? `Failed to connect to server`
      : `Server is running on http://localhost:${PORT}`;
    console.log(message);
  });




const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const path = require('path');

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', 'sources/views'); // path to the views

// static file
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

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

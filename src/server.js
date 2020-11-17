const express = require('express');

var porta = process.env.PORT || 3000;

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/editor', (req, res) => {
    res.render('editor/editor');
});

app.listen(porta, () => console.log('Servidor roando na porta:', porta));

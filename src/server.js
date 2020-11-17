const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/editor', (req, res) => {
    res.render('editor/editor');
});

app.listen(3000, () => console.log('Servidor roando na porta 3000'));

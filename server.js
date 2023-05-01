const express = require('express');
const db = require('./config/connection');
const exphbs = require('express-handlebars');
const path = require('path')
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

app.use(routes);

db.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    })
})
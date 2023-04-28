const express = require('express');
const db = require('./config/connection');
const path = require('path')
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

app.use(routes);

db.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    })
})
const express = require('express');
const router = require('./src/router');
const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));


app.use(router);

app.listen(PORT, () => {
  console.log(`En ecoute sur ${PORT}`);
});

const pokemons = require('../data/pokedex.json');

const mainController = {

 homePage (req, res) {
    res.render('index', {pokemons});
 },

 

};

module.exports = mainController;
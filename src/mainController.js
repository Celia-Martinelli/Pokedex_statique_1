const pokemons = require("../data/pokedex.json");

const mainController = {
  homePage(req, res) {
    res.render("index", { pokemons });
  },

  getOnePokemon(req, res, next) {
    const { numero } = req.params;
    console.log("numero :>> ", numero);
    const pokemonFound = pokemons.find(
      (pokemon) => pokemon.numero === Number(numero)
    );
    if (pokemonFound) {
      res.render("detail", { pokemon: pokemonFound });
    } else {
      next();
    }
  },
};

module.exports = mainController;

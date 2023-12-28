const pokemons = require("../data/pokedex.json");

const mainController = {
  homePage(req, res) {
    res.render("index", {pokemons});
  },

  getOnePokemon(req, res, next) {
    const { numero } = req.params;
    console.log("numero :>> ", numero);
    const pokemonFound = pokemons.find(
      (pokemon) => pokemon.numero === Number(numero)
    );
    if (pokemonFound) {
      res.render("pokemon-card", { pokemon: pokemonFound });
    } else {
      next();
    }
  },

  getAllType(req,res){
    res.render("types", {pokemons});
  },

  getTypePokemon(req, res){
   

    const getPokemonsByType = (type) => {
      return pokemons.filter(pokemon => pokemon.type.includes(type));
    };

    const type = req.params.type;

    const pokemonsOfType = getPokemonsByType(type);
   
    if (pokemonsOfType.length > 0) {
    res.render('list', { pokemons: pokemonsOfType, type });
  } else {
    res.render('error', { type });
  }
  },
};

module.exports = mainController;

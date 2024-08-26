const tables = require("../../database/tables");
// Some data to make the trick

const categories = [
    {
      id: 1,
      name: "Science-Fiction",
    },
    {
      id: 2,
      name: "Comédie",
    },
  ];
  
  // Declare the actions

  const browse = async (req, res) => {
      const categoriesFromDB = await tables.category.readAll();
    
      res.json(categoriesFromDB);
    };


const read = (req, res) => {
    const parseId = parseInt(req.params.id, 10);
    const categorie = categories.find((p) => p.id === parseId);

    if (categorie != null) {
        res.json(categorie);
    } else {
        res.sendStatus(404);
    }
};
  
  /* Here you code */
  
  // Export them to import them somewhere else
  
  module.exports = { browse, read };
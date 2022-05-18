const FavLanding = require("../models/favlanding.js");


const createfavLand = async (req, res) => {
    try {
      const favland = await new FavLanding(req.body).save();
      res.status(200).send({ message: "user created successfully" });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  };
  


  const getLandingFavName = async (req, res) => {
    const namefav = req.params.name;
    try {
      const favourite = await FavLanding.find({ name: namefav })
        .select("name")
        .exec();
     
      res.status(200).send(favourite);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };
  module.exports = {
    createfavLand,
    getLandingFavName
   };
const mongoose = require("../utils/mongo");
const Schema = mongoose.Schema;

const favSchema = Schema({
  name: {
    type: String,
    
    
  },

});
module.exports = mongoose.model("Favoritos", favSchema);
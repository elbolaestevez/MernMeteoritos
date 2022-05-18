const mongoose = require("../utils/mongo");
const Schema = mongoose.Schema;

const landingSchema = Schema({
  name: {
    type: String,
    
    
  },
  id: {
    type: String,
    
    
  },
  nametype: {
    type: String,
    
  },
  recclass: {
    type: String,
    
  },
  mass: {
    type: String,
    
  },
  fall: {
    type: String,
    
  },
  year: {
    type: String,
   
  },
  reclat: {
    type: String,
   
  },
  reclong: {
    type: String,
    
  },
  geolocation: {
    latitude: {
      type: String,
      
    },
    longitude: {
      type: String,
      
    },
  },
});
module.exports = mongoose.model("Landing", landingSchema);

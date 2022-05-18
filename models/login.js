const mongoose = require("../utils/mongo");
const Schema = mongoose.Schema;

const UserSchema = Schema({
  username: {type: String,require:true,unique:true},
  password:{type:String,require:true}
    
    
  },
);
module.exports = mongoose.model("UserSchema", UserSchema);
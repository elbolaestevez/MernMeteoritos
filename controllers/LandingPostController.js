const Landing = require("../models/landing");

const createLanding = async (req, res) => {
  try {
    console.log(req.body);
    const landing = await new Landing(req.body).save();
    
    res.status(200).send({ message: "user created successfully" });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

// const updateLanding = async (req, res) => {
//   try {
//     await Landing.findByIdAndUpdate(req.params.id, req.body);
//     res.status(200).send({ message: "user updated successfully" });
//   } catch (err) {
//     res.status(500).send({ message: err.message });
//   }
// };
const updateLanding = async (req, res) => {
  
  try {
    
    const landing = await Landing.findById(req.params.id );
    console.log(landing);
    Object.assign(landing, req.body);
    landing.save();
    res.status(200).send({ message: "user updated successfully" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const deleteLanding = async (req, res) => {
  try {
    console.log("borro",req.params.id);
    const landing = await Landing.findOneAndRemove(req.params.id).exec()
    
    res.status(200).send({ message: "id delete successfully" });
    // res.send({ data: meteorit });
  } catch {
    res.status(404).send({ error: "Meteorit is not found" });
  }
};
module.exports = {
  createLanding,
  updateLanding,
  deleteLanding,
};

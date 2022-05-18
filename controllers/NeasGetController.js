const Neas = require("../models/neas");

const getNeasClass = async (req, res) => {
    const idclass = req.query.class;
    try {
      const neas = await Neas.find({ orbit_class: idclass })
        .select("designation orbit_class period_yr")
        .exec();
     
      res.status(200).send(neas);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  const getNeasdesignation = async (req, res) => {
    const iddesignation = req.params.designation;
   
    try {
      const neas = await Neas.find({ designation: iddesignation })
        
        .exec();
     
      res.status(200).send(neas);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  
const neasfilterDate = async (req, res) => {
    const { from, to } = req.query;
    if (from==null){
      let from=1880
     
      const neas1 = await Neas.find()
      .where("discovery_date")
      .gte(`${from}-01-01T00:00:00.000`)
      .lte(`${to}-12-31T23:59:59.000`)
      
      .exec();
      res.status(200).send(neas1);
    }
    else{
    try {
      const neas = await Neas.find()
        .where("discovery_date")
        .gte(`${from}-01-01T00:00:00.000`)
        .lte(`${to}-12-31T23:59:59.000`)
        .select("discovery_date")
        .exec();
      res.status(200).send(neas);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };
}

  module.exports = {
    getNeasClass,
    neasfilterDate,
    getNeasdesignation
    
  };
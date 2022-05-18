const Landing = require("../models/landing");


const getLanding = async (req, res) => {
  const minimum_mass = req.query.minimum_mass;
  console.log(minimum_mass);
  try {
    const landings = await Landing.find({
      $expr: {
        $gte: [
          {
            $convert: {
              input: "$mass",
              to: "double",
              onError: 0,
              onNull: 0,
            },
          },
          Number(minimum_mass),
        ],
      },
    })
      .select(
        "-id  "
      )
      .exec();
    //const landings= await landingModel.find({"$expr" : {"$gte" : [{"$toInt" :"$mass"} , minimum_mass_int]}}).exec()
    res.status(200).send(landings);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getLandingByMass = async (req, res) => {
  const mass = req.params.mass;
  try {
    const landings = await Landing.find({
      $expr: {
        $eq: [
          {
            $convert: {
              input: "$mass",
              to: "double",
              onError: 0,
              onNull: 0,
            },
          },
          Number(mass),
        ],
      },
    })
      .select(
        "-id "
      )
      .exec();
    //const landings= await landingModel.find({"$expr" : {"$gte" : [{"$toInt" :"$mass"} , minimum_mass_int]}}).exec()
    res.status(200).send(landings);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getLandingClass = async (req, res) => {
  const idclass = req.params.class;
  try {
    const landings = await Landing.find({ recclass: idclass })
      .select("name mass year recclass reclat reclong geolocation fall nametype")
      .exec();
   
    res.status(200).send(landings);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
const getLandingName = async (req, res) => {
  const idname = req.params.name;
  try {
    const landings = await Landing.find({ name: idname })
      .select("name mass year recclass reclat reclong geolocation fall nametype")
      .exec();
   
    res.status(200).send(landings);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
const getLandingid = async (req, res) => {
  const id = req.params.id;
  try {
    const landings = await Landing.find({ _id: id })
      .select("name mass year recclass reclat reclong geolocation fall nametype")
      .exec();
   
    res.status(200).send(landings);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

// const filterDate = async (req, res) => {
//   const { from, to } = req.query;

//   try {
//     const landings = await Landing.find({
//       $year: {
//         $gte: [
//           {
//             $convert: {
//               input: "$year",
//               to: "date",
//               onError: 0,
//               onNull: 0,
//             },
//           },
//           new Date(from, 1, 1),
//         ],
//       },
//     })

//       .select(
//          "-id -nametype -recclass -fall -year -reclat -reclong -geolocation"
//        )
//       .exec();
    //const landings= await landingModel.find({"$expr" : {"$gte" : [{"$toInt" :"$mass"} , minimum_mass_int]}}).exec()
    // res.status(200).send(landings);
//   } catch (err) {
//     res.status(500).send({ message: err.message });
//   }
// };

const filterDate = async (req, res) => {
  const { from, to } = req.query;
  console.log(to);
  
 if (from==null){
console.log("hola nulo");
let from="1880"
console.log(from);
const landings1 = await Landing.find()
      .where("year")
      .gte(`${from}-01-01T00:00:00.000`)
      .lte(`${to}-12-31T23:59:59.000`)
      .select("year")
      .exec();
      res.status(200).send(landings1);
 }
 else{
  try {
    console.log("hola verdadero");
    const landings = await Landing.find()
      .where("year")
      .gte(`${from}-01-01T00:00:00.000`)
      .lte(`${to}-12-31T23:59:59.000`)
      .select("year")
      .exec();
    res.status(200).send(landings);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}
};
module.exports = {
  getLanding,
  filterDate,
  getLandingByMass,
  getLandingName,
  getLandingClass,
  getLandingid
};

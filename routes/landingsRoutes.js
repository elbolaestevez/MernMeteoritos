const express = require("express");
const router = express.Router();
const LandingGetController = require("../controllers/LandingGetController");
const LandingPostController = require("../controllers/LandingPostController");
const UserSignupForm=require("../controllers/login")

router.get("/", (req, res) => {
  res.json({ msg: "You are in" });
});

//landings get
router.get(
  "/astronomy/landings?:minimum_mass",
  LandingGetController.getLanding
);
router.get(
  "/astronomy/landings/mass/:mass",
  LandingGetController.getLandingByMass
);
router.get(
  "/astronomy/landings/class/:class",
  LandingGetController.getLandingClass
);
router.get(
  "/astronomy/landings/id/:id",
  LandingGetController.getLandingid 
);
router.get("/astronomy/landings/name/:name", LandingGetController.getLandingName);

router.get("/astronomy/landings/dates?:from?:to?", LandingGetController.filterDate);
//SignUp
router.post("/astronomy/user/create", UserSignupForm.usersignup);
router.post("/astronomy/user/login", UserSignupForm.userslogin);



//landing post
router.post("/astronomy/landings/create", LandingPostController.createLanding);
router.put("/astronomy/landings/:id", LandingPostController.updateLanding);
router.delete("/astronomy/landings/:id",LandingPostController.deleteLanding);



module.exports = router;

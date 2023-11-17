const { Router } = require("express");
const {
  getUserData,
  saveUserData,
  updateUserData,
  deleteUserData,
  bannersave,
} = require("../controller/UserFormController");

const router = Router();

router.get("/getUserData", getUserData);
router.post("/saveUserData", saveUserData);
router.post("/bannersave", bannersave);
router.put("/updateUserData/:id", updateUserData);
// router.delete("/deleteUserData/:id", deleteUserData);
router.delete("/deleteUserData/:userId", deleteUserData);

module.exports = router;

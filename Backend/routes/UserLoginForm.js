const { Router } = require("express");
const {
  register,
  loginUser,
  userData,
  getAllUser,
} = require("../controller/UserLoginController");

const router = Router();

router.post("/register", register);
router.post("/login-user", loginUser);
router.post("/userData", userData);
router.get("/getAllUser", getAllUser);

module.exports = router;

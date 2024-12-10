const express = require("express")

// const { signupValidation, loginValidation} = require("../MiddleWare/userValidation")
// const {fetchUser} = require("../MiddleWare/fetchUser")

const router = express.Router();

const {handlesignupuser,handlesignIn, handleAddOrderNotification, handleGetOrderNotifications,handleUpdateNotificationStatus} = require("../Controller/User");
const { fetchUser } = require("../Middleware/fetchUser");



router.post("/signup",handlesignupuser)
router.post("/login",handlesignIn)
router.post("/orderNotification", fetchUser ,handleAddOrderNotification)
router.get("/orderNotificationFetch", handleGetOrderNotifications);
router.patch("/orderNotificationUpdate", handleUpdateNotificationStatus);

// router.get("/test", fetchUser, async (req, res) => {
//     const data = req.user;
//     res.json({userdata:data.user.id})
// });



module.exports = router;
const express = require("express");
const router = express.Router();
const {
  addProduct,
  deleteProduct,
  getAllProduct,
  getnewCollection,
  popularInWomen,
} = require("../Controller/Products");
const { fetchUser } = require("../Middleware/fetchUser");
const User = require("../Models/User");

router.post("/addProducts", addProduct);
router.post("/deleteProducts", deleteProduct);
router.get("/allProducts", getAllProduct);
router.get("/newcollections", getnewCollection);
router.get("/popularwomen", popularInWomen);
router.get("/practice",(req,res) => {
  res.send("Hello i am runnind")
})
router.get("/hamza",(req,res) => {
  res.send("Hello i am running")
})
router.post("/addtocart", fetchUser, async (req, res) => {
  try {
    const userid = req.user.user.id;
    const user = await User.findOne({ _id: userid });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    console.log(req.body.ItemId);
    user.cartItem[req.body.ItemId] += 1;

    await User.findOneAndUpdate({ _id: userid }, { cartItem: user.cartItem });

    res.status(200).json({
      message: "Item added to cart successfully",
      cartItem: user.cartItem,
      name: user.name,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
router.post("/deletefromcart", fetchUser, async (req, res) => {
  try {
    const userid = req.user.user.id;
    const user = await User.findOne({ _id: userid });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if(user.cartItem[req.body.ItemId]>0){

        user.cartItem[req.body.ItemId] -= 1;
    }

    await User.findOneAndUpdate({ _id: userid }, { cartItem: user.cartItem });

    res.status(200).json({
      message: "Item added to cart successfully",
      cartItem: user.cartItem,
      name: user.name,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/getcartData",fetchUser,async (req,res)=>{
    const user = await User.findOne({ _id: req.user.user.id});
    if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
    res.json(user.cartItem)
})

module.exports = router;

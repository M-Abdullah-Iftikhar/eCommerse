const User = require("../Models/User");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const JWT_SECRET = "hopify-@ecom-@web";

async function handlesignupuser(req, res) {
  try {
    const body = req.body;
    const chkingexistance = await User.findOne({ email: body.email });
    if (chkingexistance) {
      return res
        .status(409)
        .json({ error: "User already exist, you can login", success: false });
    }
    let cart = {}
    for(let i=0;i<300;i++)
    {
        cart[i] = 0;
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(body.password, salt);
    const user = await User.create({
      name: body.name,
      email: body.email,
      password: secPass,
      role:body.role,
      cartItem:cart
    });

    res
      .status(201)
      .json({ message: "user created successfully", success: true,user });
  } catch (error) {
    res.status(500).json({
      message: "Internal server errror",
      success: false,
    });
  }
}

const OrderNotification = require("../Models/OrderNotification");

async function handleAddOrderNotification(req, res) {
  try {
    const body = req.body;
    const userId = req.user.user.id;

    // Validate the required fields
    const { name, phoneNumber, address, cartItems } = body;
    if (!userId || !name || !phoneNumber || !address || !cartItems) {
      return res
        .status(400)
        .json({ message: "Missing required fields", success: false });
    }

    // Create the new order notification
    const orderNotification = await OrderNotification.create({
      userId,
      name,
      phoneNumber,
      address,
      cartItems,
    });

    return res
      .status(201)
      .json({
        message: "Order notification created successfully",
        success: true,
        orderNotification,
      });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
}

async function handleGetOrderNotifications(req, res) {
  try {
    // Fetch all notifications from the database
    const notifications = await OrderNotification.find();
    res.status(200).json(notifications);
  } catch (error) {
    console.error("Error fetching order notifications:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}




async function handlesignIn(req, res) {
  const body = req.body;
  try {
    const user = await User.findOne({ email: body.email });
    if (!user) {
      return res
        .status(403)
        .json({
          message: "Please try to login with correct credentials",
          success: false,
        });
    }

    const passwordCompare = await bcrypt.compare(body.password, user.password);
    if (!passwordCompare) {
      return res
        .status(403)
        .json({
          message: "Please try to login with correct credentials",
          success: false,
        });
    }

    const data = {
      user: {
        id: user.id,
        email: user.email,
        role:user.role
      },
    };

    const authtoken = jwt.sign(data, JWT_SECRET, { expiresIn: "24h" });
    res.cookie("JWT_TOKEN", authtoken, { httpOnly: true,secure:false }); // Set httpOnly to true for security

    return res
      .status(200)
      .json({ message: "User login successful", success: true, authtoken:authtoken,role:user.role,name:user.name });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Internal Server error", success: false });
  }
}

async function handleUpdateNotificationStatus(req, res) {
  try {
    const { id, status } = req.body;

    if (!["Accepted", "Rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const updatedNotification = await OrderNotification.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedNotification) {
      return res.status(404).json({ message: "Notification not found" });
    }

    res.status(200).json(updatedNotification);
  } catch (error) {
    console.error("Error updating notification status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}


module.exports = { handlesignupuser, handlesignIn, handleAddOrderNotification, handleGetOrderNotifications, handleUpdateNotificationStatus };

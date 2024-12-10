const express = require("express");
const router = express.Router();
const sendOrderEmail = require("../utils/sendEmail");

router.post("/sendOrderEmail", async (req, res) => {
  try {
    const orderDetails = req.body;
    await sendOrderEmail(orderDetails);
    res.status(200).json({ message: "Order email sent successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to send order email." });
  }
});

module.exports = router;

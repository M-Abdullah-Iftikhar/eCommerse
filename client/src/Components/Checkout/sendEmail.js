const nodemailer = require("nodemailer");

const sendOrderEmail = async (orderDetails) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "madabdullahmughal@gmail.com", // Replace with your email
        pass: "IsaacEinstein3#", // Replace with your email password or app password
      },
    });

    const { name, phoneNumber, address, cartItems, total } = orderDetails;

    let itemsList = "";
    cartItems.forEach(
      (item) =>
        (itemsList += `<li>${item.name} x ${item.quantity} - Rs ${item.price.toFixed(
          2
        )}</li>`)
    );

    const emailContent = `
      <h2>Order Confirmation</h2>
      <p>Hello <strong>${name}</strong>,</p>
      <p>Thank you for placing your order. Here are the details:</p>
      <h3>Order Details:</h3>
      <ul>
        <li><strong>Phone:</strong> ${phoneNumber}</li>
        <li><strong>Address:</strong> ${address}</li>
      </ul>
      <h3>Order Summary:</h3>
      <ul>
        ${itemsList}
      </ul>
      <h3>Total: Rs ${total.toFixed(2)}</h3>
      <p>We will contact you soon to confirm your order. Thank you for shopping with us!</p>
      <footer>
        <p><em>This email was generated automatically. Please do not reply.</em></p>
      </footer>
    `;

    const mailOptions = {
      from: "madabdullahmughal@gmail.com",
      to: "muhammadabdullahmughal740@gmail.com", // Replace with the recipient's email
      subject: `New Order from ${name}`,
      html: emailContent,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

module.exports = sendOrderEmail;

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { getTotalAmount, allproduct, cartItem } = useContext(ShopContext); // Get cart data from context
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const cartTotal = getTotalAmount();

  // const handlePlaceOrder = async () => {
  //   if (address && name && phone) {
  //     try {
  //       const orderData = {
  //         name,
  //         phoneNumber: phone,
  //         address,
  //         cartItems: cartItem,
  //         status: "Pending", // Default status
  //       };

  //       console.log(name,phone,address, cartItem)

  //       // Call the fetchOrderNotifications function with order data
  //       const response = await fetch("http://localhost:8000/orderNotification", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           "token":localStorage.getItem("token")
  //         },
  //         body: JSON.stringify(orderData),
  //       });

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: Rs {response.status}`);
  //       }

  //       const data = await response.json();
  //       console.log(data)
  //       console.log("Order placed:", data);

  //       alert("Order placed successfully!");
  //       navigate("/"); // Redirect to home page or confirmation page
  //     } catch (error) {
  //       console.error("Error placing order:", error);
  //       alert("An error occurred while placing your order. Please try again.");
  //     }
  //   } else {
  //     alert("Please fill in all the required fields.");
  //   }
  // };
  const sendOrderEmail = async (orderDetails) => {
    try {
      const response = await fetch("http://localhost:8000/sendOrderEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      });
  
      if (!response.ok) {
        throw new Error("Failed to send order email.");
      }
  
      console.log("Order email sent successfully.");
    } catch (error) {
      console.error("Error sending order email:", error);
      alert("Failed to send order email.");
    }
  };

  return (
    <div className="bg-gray-100 h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Checkout Form on the Left */}
          <div className="lg:w-3/4 bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <label className="font-semibold text-sm">Name</label>
              <input
                type="text"
                className="p-2 mt-1 text-sm w-full border rounded"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="font-semibold text-sm">Phone Number</label>
              <input
                type="tel"
                className="p-2 mt-1 text-sm w-full border rounded"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="font-semibold text-sm">Address</label>
              <input
                type="text"
                className="p-2 mt-1 text-sm w-full border rounded"
                placeholder="Select your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              {/* Integrate a map here for address selection if needed */}
            </div>
            <div className="mb-4">
              <label className="font-semibold text-sm">Payment Method</label>
              <div className="p-2 mt-1 text-sm w-full border rounded bg-gray-100">
                Cash on Delivery
              </div>
            </div>
            <button
              // onClick={handlePlaceOrder}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded w-full mt-4"
            >
              Place Order
            </button>
          </div>

          {/* Bill Summary on the Right */}
          <div className="lg:w-1/4 text-sm lg:text-lg">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-red-500 mb-4">Order Summary</h2>
              <ul className="mb-4">
                {allproduct.map((product) => {
                  if (cartItem[product.id] > 0) {
                    return (
                      <li key={product.id} className="flex justify-between mb-2">
                        <span>
                          {product.name} x {cartItem[product.id]}
                        </span>
                        <span>
                          Rs {(product.new_price * cartItem[product.id]).toFixed(2)}
                        </span>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Subtotal</span>
                <span>Rs {cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Taxes</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Shipping</span>
                <span>Free</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-red-500">Total</span>
                <span className="font-semibold">Rs {cartTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

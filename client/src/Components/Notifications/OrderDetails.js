import React from "react";
import { useLocation } from "react-router-dom";
import removeicon from "../Assets/cart_cross_icon.png"; // Replace with your path to the remove icon
import Sidebar from "../../Pages/Admin/Components/Sidebar/Sidebar";
import Navbar from "../../Pages/Admin/Components/Navbar/Navbar";

const CartDetailsPage = () => {
  const location = useLocation();
  const { cartItems, allproduct, getTotalAmount } = location.state || {}; // Retrieve cartItems and allProducts from navigation state

  // Check if cartItems and allProducts exist before rendering
  if (!cartItems || !allproduct) {
    return <div>Loading...</div>; // Or display an error message if preferred
  }

  return (

    <>
    <Navbar className="" />
    <div className="lg:flex">
    
    
    <Sidebar className="" />
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">Cart Details</h1>
      <div className="lg:w-3/4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <div className="hidden lg:flex justify-between lg:ml-12 items-center mb-4">
            <span className="font-semibold">Product</span>
            <span className="font-semibold">Price</span>
            <span className="font-semibold">Quantity</span>
            <span className="font-semibold">Total</span>
           
          </div>
          <hr className="my-2" />
          
          {/* Ensure allProducts and cartItems are valid before mapping */}
          {allproduct && allproduct.map((product) => {
            // Ensure the item is in the cart and quantity is greater than 0
            if (cartItems[product.id] > 0) {
              return (
                <div
                  key={product.id}
                  className="flex flex-col lg:flex-row items-center justify-between mb-4 py-4 border-b relative"
                >
                  {/* Product Image and Name */}
                  <div className="flex flex-col gap-3 items-center mb-4 md:mb-0">
                    <img
                      className="h-16 w-16 mr-4"
                      src={product.image}
                      alt={product.name}
                    />
                    <span className="text-xs w-48">{product.name}</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center my-3 gap-5 mb-4 lg:mb-0">
                    <span className="text-lg lg:hidden font-semibold">Price:</span>
                    <span>Rs {product.new_price.toFixed(2)}</span>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center mb-4 lg:mb-0">
                    <button className="border border-gray-500 px-4 py-2">
                      <span className="text-center">{cartItems[product.id]}</span>
                    </button>
                  </div>

                  {/* Total */}
                  <div className="flex gap-5 items-center">
                    <span className="text-lg lg:hidden font-semibold">Total:</span>
                    <span>Rs {(product.new_price * cartItems[product.id]).toFixed(2)}</span>
                  </div>

                  {/* Remove Button */}
                 
                </div>
              );
            }
            return null;
          })}
        </div>
        {/* <div className=" lg:w-1/4 text-sm lg:text-lg">
            <div className=" rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-red-500 mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>Rs {getTotalAmount}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-red-500">Total</span>
                <span className="font-semibold">Rs {getTotalAmount}</span>
              </div>
              
             
                
            </div>
          </div> */}
      </div>
    </div>
    </div>

</>
  );
};

// Function to handle removing products from cart
const handleRemoveProduct = (productId) => {
  // Implement logic to remove item from cart
  console.log(`Remove product with id: ${productId}`);
  // e.g., call an action to update the cart or use a function from context
};

export default CartDetailsPage;

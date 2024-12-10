import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import removeicon from "../Assets/cart_cross_icon.png";
import { useNavigate } from "react-router-dom";

const CartItem = () => {
  const navigate = useNavigate();
  const {getTotalAmount, allproduct, deletefromcart, cartItem } = useContext(ShopContext);
  return (
    <div className="bg-gray-100 h-screen py-8">
      <div className="container mx-auto px-2">
        <h1 className="text-2xl  font-semibold mb-4">Shopping Cart</h1>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <div className="hidden lg:flex justify-between lg:ml-12  items-center mb-4">
                <span className="font-semibold">Product</span>
                <span className="font-semibold">Price</span>
                <span className="font-semibold">Quantity</span>
                <span className="font-semibold">Total</span>
                <span className="font-semibold">Remove</span>
              </div>
              <hr className="my-2" />
              {allproduct.map((e) => {
                if (cartItem[e.id] > 0) {
                  return (
                    <div className="flex flex-col lg:flex-row items-center justify-between mb-4 py-4 border-b relative">
                      <div className="flex flex-col gap-3 items-center mb-4 md:mb-0">
                        <img
                          className="h-16 w-16 mr-4"
                          src={e.image}
                          alt="Product"
                        />
                        <span className="text-xs w-48">{e.name}</span>
                      </div>
                      <div className="flex items-center my-3 gap-5 mb-4 lg:mb-0">
                        <span className="text-lg lg:hidden font-semibold">
                          Price:
                        </span>
                        <span>Rs {e.new_price}</span>
                      </div>
                      <div className="flex items-center mb-4 lg:mb-0">
                        <button className=" border border-gray-500 px-4 py-2">
                          <span className="text-center ">{cartItem[e.id]}</span>
                        </button>
                      </div>
                      <div className="flex gap-5 items-center">
                        <span className="text-lg lg:hidden font-semibold">
                          Total:
                        </span>
                        <span>Rs {e.new_price * cartItem[e.id]}</span>
                      </div>
                      <div className="absolute top-0 right-0 lg:static lg:order-none">
                        <button className="text-red-500" onClick={() => deletefromcart(e.id)}>
                          <img src={removeicon} alt="Remove" />
                        </button>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className=" lg:w-1/4 text-sm lg:text-lg">
            <div className=" rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-red-500 mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>Rs {getTotalAmount()}</span>
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
                <span className="font-semibold">Rs {getTotalAmount()}</span>
              </div>

              <button  onClick={() => navigate("/checkout")} className="bg-red-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

import React, { createContext, useState, useEffect } from "react";



export const ShopContext = createContext(null);

const getDefaultCart = () => {
  const cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [allproduct, setallproduct] = useState([]);
  const {OrderDetails,setOrderDetails} = useState({})
  const [cartItem, setcartItem] = useState(getDefaultCart());
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8000/allProducts");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data.product);
      const product = data.product;
      setallproduct(product);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const getcartdata = async () => {
    if (localStorage.getItem("token")) {
      try {
        const response = await fetch("http://localhost:8000/getcartData", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          }
        });

        // Check if the response is OK
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setcartItem(data)
        setOrderDetails(data)
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    }
  }
  useEffect(() => {
    fetchProducts();
    getcartdata();
  }, []);
  console.log(cartItem);
  const addtocart = async (itemId) => {
    if(!localStorage.getItem('token')){
      alert("First login")
      window.location.replace("/login")
      return;
    }
    setcartItem((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));

    // setOrderDetails(cartItem)

    if (localStorage.getItem("token")) {
      try {
        const response = await fetch("http://localhost:8000/addtocart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            ItemId: itemId,
          }),
        });

        // Check if the response is OK
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    }
  };

  const deletefromcart = async (itemId) => {
    setcartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    // setOrderDetails(cartItem)
    if (localStorage.getItem("token")) {
      try {
        const response = await fetch("http://localhost:8000/deletefromcart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            ItemId: itemId,
          }),
        });

        // Check if the response is OK
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    }
  };
  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = allproduct.find(
          (product) => product.id === Number(item)
        );
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItem[item];
        }
      }
    }
    return totalAmount;
  };
  const TotalCartItem = () => {
    let totalItem = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalItem += cartItem[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    allproduct,
    cartItem,
    addtocart,
    deletefromcart,
    getTotalAmount,
    TotalCartItem,
    OrderDetails,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

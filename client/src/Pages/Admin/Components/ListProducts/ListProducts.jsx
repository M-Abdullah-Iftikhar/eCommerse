import React, { useEffect, useState } from "react";
import crossicon from "../../assets/cross_icon.png";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar"
import Loader from "../Loader/Loader";

const ListProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true); // Start loading
    const response = await fetch("https://ecommerse-yj3l.onrender.com/allproducts");
    let allproducts = await response.json();
    allproducts = allproducts.product;
    setProducts(allproducts);
    setLoading(false); 
  };

  const deleteProduct = async (id) => {
    const response = await fetch('https://ecommerse-yj3l.onrender.com/deleteProducts', {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ id: id })
    });

    if (!response.ok) {
      throw new Error("Server Error");
    }

    const data = await response.json();

    if (data.success) {
      alert("Product deleted successfully");
    } else {
      alert("Product not deleted");
    }

    await fetchProducts(); 
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
 { <Navbar/>}
    <div className="lg:flex">
     
    <Sidebar className="" />
    
    <section className="">
      <div className="flex flex-col pt-3">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">All Product List</h1>
        </div>
        <div className="pt-10 p-5 font-bold lg:font-bold grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] sm:grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] gap-1 sm:gap-5 md:gap-7 lg:gap-16 text-[#454545] text-[8px] min-[370px]:text-[11px] sm:text-[12px] lg:text-[15px]">
          <p>Products</p>
          <p className="">Title</p>
          <p>New Price</p>
          <p>Old Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
      </div>
      {loading ? (
        <Loader /> 
      ) : (
        <div className="overflow-y-scroll h-[500px]">
          {products.map((product, i) => (
            <React.Fragment key={i}>
              <hr />
              <div className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] gap-3 sm:gap-5 md:gap-7 lg:gap-10 p-5 font-medium text-[#454545] text-[7px] min-[370px]:text-[11px] sm:text-[12px] lg:text-[15px] items-center">
                <p>
                  <img className="h-[60px] sm:h-[80px]" src={product.image} alt="" />
                </p>
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <p>${product.old_price}</p>
                <p>{product.category}</p>
                <p onClick={() => deleteProduct(product.id)}>
                  <img className="m-auto w-2 min-[350px]:w-3 md:w-4 cursor-pointer" src={crossicon} alt="" />
                </p>
              </div>
              <hr />
            </React.Fragment>
          ))}
        </div>
      )}
    </section>
    </div>
    </div>
  );
};

export default ListProducts;

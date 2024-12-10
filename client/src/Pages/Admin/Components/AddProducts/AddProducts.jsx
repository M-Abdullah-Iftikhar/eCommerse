import React,{useState} from "react";
import upload from '../../assets/upload_area.svg'
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar"

const AddProducts = () => {

    const [image, setimage] = useState(false)
    const [ProductData, setProductData] = useState({
        name:'',
        image:'',
        category:'',
        new_price:'',
        old_price:''
    })

    const changeHandler = (e) => {
        setProductData({...ProductData,[e.target.name]:e.target.value})
    }

    const imagehandler = (e) => {
        // console.log(e)
        setimage(e.target.files[0])
    }

    const addProductHandler = async (e) => {
        e.preventDefault()
        let product = ProductData;
        let formData = new FormData()
        formData.append('product',image)
        const response = await  fetch('https://ecommerse-yj3l.onrender.com/upload',{
            method:"POST",
            headers:{

                Accept:"application/json"
            },
            body:formData,
            
        })

        if(!response.ok){
            throw console.error("Error");
            
        }
        // console.log("response",response)
        const data = await response.json()
        // console.log("data",data)
        if(data.success){

            ProductData.image = data.image_url;
            console.log(product)
            const response2 = await fetch('https://ecommerse-yj3l.onrender.com/addproducts',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(product)

            })
            if(!response2.ok){
                throw console.error("Error");
                
            }
            // console.log("response2",response2)
            const data2 = await response2.json();
            if(data2.success){
                alert("Product added")
            }else{
                alert("Product added Failed")
            }
        }
    }

    
  return (
    <div>
    { <Navbar/>}
    <div className="lg:flex">
      
      <Sidebar className="" />

    <div class=" w-auto  max-w-[800px] md:w-[100%] mt-2 mx-auto">
      <div class=" p-8 bg-slate-300  rounded-lg shadow-lg px-10 md:px-20">
        <h2 class="text-2xl font-bold text-center mb-6">Add New Product</h2>

        <form onSubmit={addProductHandler} class="space-y-4">
          <div>
            <label for="title" class="block text-sm font-medium text-gray-700">
              Product Title
            </label>
            <input
            value={ProductData.name}
            onChange={changeHandler}
              type="text"
              id="title"
              name="name"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ff4141] focus:border-[#ff4141] sm:text-sm"
            />
          </div>
          <div>
            <label
              for="old_price"
              class="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
             value={ProductData.old_price}
             onChange={changeHandler}
              type="number"
              id="old_price"
              name="old_price"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ff4141] focus:border-[#ff4141] sm:text-sm"
            />
          </div>
          <div>
            <label
              for="new_price"
              class="block text-sm font-medium text-gray-700"
            >
              Offer Price
            </label>
            <input
             value={ProductData.new_price}
             onChange={changeHandler}
              type="number"
              id="new_price"
              name="new_price"
              required
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ff4141] focus:border-[#ff4141] sm:text-sm"
            />
          </div>
          <div>
            <label
            for="image" class="block text-sm font-medium text-gray-700">
              <img className="w-20" src={image?URL.createObjectURL(image):upload} alt="" />
            </label>
            <input
            //  value={ProductData.image}
             onChange={imagehandler}
              type="file"
              id="image"
              name="image"
              required
              class="mt-4 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#ff4141] file:text-white hover:file:bg-[#626262]"
            />
          </div>
          <div>
            <label
              for="category"
              class="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <select
               value={ProductData.category}
               onChange={changeHandler}
              id="category"
              name="category"
              required
              class="mt-1 block w-[80%] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#ff4141] focus:border-[#ff4141] sm:text-sm"
            >
              <option value="">Select a category</option>
              <option value="Casual Wear">Casual Wear</option>
              <option value="Formals">Formals</option>
              <option value="Co_ord Set">Co_ord Set</option>
              <option value="Matching Separates">Matching Separates </option>
              <option value="4 Piece">4 Piece</option>
              <option value="Night Dress">Night Dress</option>
              <option value="Frocks">Frocks</option>
              <option value="Lehenga">Lehenga</option>
              <option value="Western Wear">Western Wear</option>
              <option value="Unstitched">Unstitched</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              class=" py-2 px-4 bg-gradient-to-r from-[#ff4141] to-[#626262] text-white font-semibold rounded-md shadow-sm hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff4141]"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
};

export default AddProducts;

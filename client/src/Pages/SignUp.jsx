import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate()
  const [FormData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    role:'admin'

  })

  const handleChange = (e) => {
    setFormData({...FormData,[e.target.name]:e.target.value})
  }

  const handlesubmit = async (e) => {
    console.log(FormData)
    e.preventDefault();
    const response = await fetch('https://ecommerse-yj3l.onrender.com/signup', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(FormData)
    });
    const data = await response.json();
    const {success,message} = data
    if(success){
      alert(message)
      navigate('/login')
       // window.location.replace('login')
    }
    if(!success){
      alert(message)
    }
    setFormData({
      name:'',
      email:'',
      password:'',
      role:''
    })
  }
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
        {/* Close Button */}
        <Link to="/">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={() => console.log("Close modal")}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </Link>

        <h2
          className="text-2xl font-bold text-center mb-6"
          style={{ color: "#626262" }}
        >
          Sign Up
        </h2>
        <form onSubmit={handlesubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
            onChange={handleChange}
            value={FormData.name}
              name="name"
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
            onChange={handleChange}
            value={FormData.email}
              name="email"
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
            onChange={handleChange}
            value={FormData.password}
              name="password"
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            />
          </div>
          <button
          onClick={handlesubmit}
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-md hover:bg-gradient-to-l transition-colors"
            style={{ backgroundColor: "#ff4141" }}
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-red-500 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate  = useNavigate()
  const [FormData, setFormData] = useState({
    email:'',
    password:''
  })

  const handleChange = (e) => {
    setFormData({...FormData,[e.target.name]:e.target.value})
  }

  const handlesubmit = async (e) => {
    console.log(FormData)
    e.preventDefault();
    const response = await fetch('http://localhost:8000/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(FormData)
    });
    const data = await response.json();
    console.log("data",data)
    const {success,message,authtoken,name,role} = data
    if(success){
      alert(message)
      // window.location.replace('/')
      localStorage.setItem("token",authtoken)
      localStorage.setItem("name",name)
      localStorage.setItem("role",role)
      if(role === "admin")
        navigate('/admin')
      if(role === "user"){
        navigate('/')
      }
    }
    if(!success){
      alert(message)
    }
    setFormData({
      email:'',
      password:''
    })
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
        {/* Close Button */}
        <Link to='/'>
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={() => console.log('Close modal')}
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
        
        <h2 className="text-2xl font-bold text-center mb-6" style={{ color: '#626262' }}>
          Sign In
        </h2>
        <form onSubmit={handlesubmit}>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
            name='email'
            value={FormData.email}
            onChange={handleChange}
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              name='password'
              value={FormData.password}
              onChange={handleChange}
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-md hover:bg-gradient-to-l transition-colors"
            style={{ backgroundColor: '#ff4141' }}
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account?{' '}
          <Link to="/register" className="text-red-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login

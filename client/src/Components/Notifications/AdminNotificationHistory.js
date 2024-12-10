import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Pages/Admin/Components/Sidebar/Sidebar";
import Navbar from "../../Pages/Admin/Components/Navbar/Navbar";

<Navbar className="" />
const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  // Fetch pending notifications
  const fetchPendingNotifications = async () => {
    try {
      const response = await fetch("https://ecommerse-yj3l.onrender.com/orderNotificationFetch", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
   
      

      const data = await response.json();
      // Filter only pending notifications
      setNotifications(data.filter((notification) => notification.status != "Pending"));
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  
  useEffect(() => {
    fetchPendingNotifications();
  }, []);

  return (

    <>

<Navbar className="" />
      <div className="lg:flex">
      
      
      <Sidebar className="" />
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-4">Pending Notifications</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Phone Number</th>
              <th className="px-4 py-2 text-left">Address</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification) => (
              <tr key={notification._id} className="border-t">
                <td className="px-4 py-2">{notification.name}</td>
                <td className="px-4 py-2">{notification.phoneNumber}</td>
                
                <td className="px-4 py-2">{notification.address}</td>
                <td className="px-4 py-2">{notification.status}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
        {notifications.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No History of notifications to display.</p>
        )}
      </div>
    </div>
    </div>
    </>
  );
};

export default NotificationsPage;

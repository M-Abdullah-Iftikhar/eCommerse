import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import Sidebar from "../../Pages/Admin/Components/Sidebar/Sidebar";
import Navbar from "../../Pages/Admin/Components/Navbar/Navbar";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();
  const { allproduct, getTotalAmount } = useContext(ShopContext);

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
      setNotifications(data.filter((notification) => notification.status === "Pending"));
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  // Update notification status
  const updateNotificationStatus = async (id, status) => {
    try {
      const response = await fetch("https://ecommerse-yj3l.onrender.com/orderNotificationUpdate", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, status }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Refresh the notifications list
      fetchPendingNotifications();
    } catch (error) {
      console.error("Error updating notification status:", error);
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
                <th className="px-4 py-2 text-left">Order</th>
                <th className="px-4 py-2 text-left">Address</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {notifications.map((notification) => (
                <tr key={notification._id} className="border-t">
                  <td className="px-4 py-2">{notification.name}</td>
                  <td className="px-4 py-2">{notification.phoneNumber}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => {
                        const totalAmount = getTotalAmount(); // Compute the total amount
                        navigate(`/order/${notification._id}`, {
                          state: {
                            cartItems: notification.cartItems,
                            allproduct: allproduct,
                            totalAmount: totalAmount, // Pass the computed value
                          },
                        });
                      }}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
                    >
                      View Order
                    </button>
                  </td>
                  <td className="px-4 py-2">{notification.address}</td>
                  <td className="px-4 py-2">{notification.status}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => updateNotificationStatus(notification._id, "Accepted")}
                      className="mt-2 bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded mr-2"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => updateNotificationStatus(notification._id, "Rejected")}
                      className="mt-4 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded mr-2"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {notifications.length === 0 && (
            <p className="text-center text-gray-500 mt-4">No pending notifications to display.</p>
          )}
        </div>
      </div>
    
    </div>

    </>
  );
};

export default NotificationsPage;

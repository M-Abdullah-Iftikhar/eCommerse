// import Navbar from "./Components/Navbar/Navbar";
import Checkout from "./Components/Checkout/checkout.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
// import Footer from "./Components/Footer/Footer";
import bannermen from "./Components/Assets/bannerm.png";
import bannerwomen from "./Components/Assets/bannerw.png";
import bannerunstitched from "./Components/Assets/unstitched.png";
import bannerwestern from "./Components/Assets/western.png";
// import bannerFormal from "./Components/Assets/formal2.png";
import banner4piece from "./Components/Assets/4piece.png";
import bannerCoOrd from "./Components/Assets/co-ord.png";
import bannernight from "./Components/Assets/night.png";
import bannerfrok from "./Components/Assets/frok.png";
import bannerCasual from "./Components/Assets/casual.png";
import bannerLehenga from "./Components/Assets/lehenga.png";
import bannerMatching from "./Components/Assets/match.png";
import bannerkids from "./Components/Assets/bannerk.png";
import SignUp from "./Pages/SignUp.jsx";
import Unauthorized from "./Components/UnAuthorize.jsx";
import Admin from "./Pages/Admin/pages/Admin.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
import AddProducts from "./Pages/Admin/Components/AddProducts/AddProducts";
import ListProducts from "./Pages/Admin/Components/ListProducts/ListProducts";
import AdminMain from "./Pages/Admin/pages/adminMain.jsx";

import AdminNotification from "./Components/Notifications/AdminNotifications.js"
import AdminNotificationHistory from "./Components/Notifications/AdminNotificationHistory.js"
import OrderDetailsPage from "./Components/Notifications/OrderDetails.js"



function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Shop />} />
            
            <Route path="/cart" 
              element={
                <ProtectedRoute requiredRole="user">
                  <Cart />
                </ProtectedRoute>
              }
              
            />
             <Route path="/checkout" 
              element={
                <ProtectedRoute requiredRole="user">
                  <Checkout />
                </ProtectedRoute>
              }
              
            />
            
            <Route path="/admin" 
              element={
                <ProtectedRoute requiredRole="admin">
                  <AdminMain />
                </ProtectedRoute>
              }
              
            />
              <Route path="/addproduct" 
              element={
                <ProtectedRoute requiredRole="admin">
                  <AddProducts />
                </ProtectedRoute>
              }
              
            />
            
            <Route path="/adminNotification" 
              element={
                <ProtectedRoute requiredRole="admin">
                  <AdminNotification />
                </ProtectedRoute>
              }
              
            />

<Route path="/adminNotificationHistory" 
              element={
                <ProtectedRoute requiredRole="admin">
                  <AdminNotificationHistory />
                </ProtectedRoute>
              }
              
            />

      <Route path="/order/:id" 
              element={
                <ProtectedRoute requiredRole="admin">
                  <OrderDetailsPage />
                </ProtectedRoute>
              }
              
            />
           
              <Route path="/listproduct" 
              element={
                <ProtectedRoute requiredRole="admin">
                  <ListProducts />
                </ProtectedRoute>
              }
              
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            
            {/* Category Routes */}
            <Route path="/collections" element={<ShopCategory category="collections" />} />
            <Route path="/casual" element={<ShopCategory banner={bannerCasual} category="Casual Wear" />} />
            <Route path="/formals" element={<ShopCategory banner={banner4piece} category="Formals" />} />
            <Route path="/co-ord" element={<ShopCategory banner={bannerCoOrd} category="Co_ord Set" />} />
            <Route path="/matching-separates" element={<ShopCategory banner={bannerMatching} category="Matching Separates" />} />
            <Route path="/four-piece" element={<ShopCategory  banner={banner4piece} category="4 Piece" />} />
            <Route path="/night-dress" element={<ShopCategory banner={bannernight} category="Night Dress" />} />
            <Route path="/frocks" element={<ShopCategory banner={bannerfrok} category="Frocks" />} />
            <Route path="/lehenga" element={<ShopCategory banner={bannerLehenga} category="Lehenga" />} />
            <Route path="/western" element={<ShopCategory banner={bannerwestern} category="Western Wear" />} />
            <Route path="/unstitched" element={<ShopCategory banner={bannerunstitched} category="Unstitched" />} />
            

            {/* Product Route with ID */}
            <Route path="/product/:productId" element={<Product />} />

            <Route path="/unauthorized" element={<Unauthorized />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Allpage from "./Pages/Allpages/Allpage";

import Dashboard from "./Pages/Dashboard/Dashboard";

import AdminLayout from "./Compenents/AdminLayout/AdminLayout";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import AdminUsers from "./Pages/AdminUsers/AdminUsers";
import AdminListings from "./Pages/AdminListings/AdminListings";
import ManageUsers from "./Pages/UserManange/ManageUsers";
import ManageProperties from "./Pages/ManageProperties/ManageProperties";

import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import AddProduct from "./Pages/Addproduct/AddProduct";

// ✅ IMPORTANT: ADD THIS
import RecycleBin from "./Pages/Recycle/RecycleBin";
import LuxuryInterior from "./Pages/Staticpages/LuxuryInterior";
import Footer from "./Compenents/Footer/Footer";
import HotelRooms from "./Pages/Staticpages2/HotelRoom";
import Dormetry from "./Pages/Staticpages3/Dormetry";
import ProductPage from "./Pages/Product/ProductPage";

import BookingForm from "./Pages/Bookingpages/BookingForm";
import MyBookings from "./Pages/BookingMy/MyBookings";
import AdminBookings from "./Pages/AdminBooking/AdminBookings";
import Favorites from "./Pages/Favorites/Favorites";
import OwnerProductAdd from "./Pages/Properties/Properties";
import PropertyList from "./Pages/PropertyList/PropertyList";




function App() {
  return (
    <Router>
      <Routes>

        {/* ===== PUBLIC ===== */}
        <Route path="/" element={<Allpage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ProductPage" element={<ProductPage />} />
         <Route path="/Favorites" element={<Favorites/>} />


       
        
         <Route path="/luxuryInterior" element={<LuxuryInterior />} />
         <Route path="/hotelRooms" element={<HotelRooms/>} />
          <Route path="/dormitory" element={<Dormetry/>} />
        
 <Route path="/Footer" element={<Footer />} />

  <Route path="/PropertyList" element={<PropertyList />} />
  <Route path="/OwnerProductAdd" element={<OwnerProductAdd />} /> 


 
  <Route path="/BookingForm" element={<BookingForm/>} />
  <Route path="/MyBookings" element={<MyBookings/>} />


  
 


 
  

        {/* ===== OWNER ===== */}
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/recycle-bin" element={<RecycleBin />} />
        
        

        {/* ===== OWNER DASHBOARD ===== */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute role="owner">
              <Dashboard />
            </PrivateRoute>
          }
        />

        {/* ===== ADMIN ===== */}
        <Route
          path="/admin"
          element={
            <PrivateRoute role="admin">
              <AdminLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="listings" element={<AdminListings />} />
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="manage-properties" element={<ManageProperties />} />
         <Route path="bookings" element={<AdminBookings/>} />
        

        </Route>



      </Routes>
    </Router>
  );
}

export default App;
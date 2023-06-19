/** @format */

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./E-CommerceAdmin/forms/Login";
import Dashboard from "./E-CommerceAdmin/pages/Dashboard";
import ECategory from "./E-CommerceAdmin/pages/ECategory";
import EProduct from "./E-CommerceAdmin/pages/EProduct";
import EAdminOrders from "./E-CommerceAdmin/pages/EAdminOrders";
import EAdminDelivery from "./E-CommerceAdmin/pages/EAdminDelivery";
import EAdminCustomer from "./E-CommerceAdmin/pages/EAdminCustomer";
import EAdmin from "./E-CommerceAdmin/pages/Employer";
import ESubCategory from "./E-CommerceAdmin/pages/ESubCategory";
import PushNotification from "./E-CommerceAdmin/pages/PushNotification";
import Coupon from "./E-CommerceAdmin/pages/Coupon";
import GetMeThis from "./E-CommerceAdmin/pages/GetMeThis";
import PrivacyPolicy from "./E-CommerceAdmin/pages/PrivacyPolicy";
import JobsDetails from "./E-CommerceAdmin/pages/JobsDetails";
import DriverDetails from "./E-CommerceAdmin/pages/DriverDetails";
import Post from "./E-CommerceAdmin/pages/Post";
import Notification from "./E-CommerceAdmin/pages/Notification";
import Help from "./E-CommerceAdmin/pages/Help";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Employer" element={<EAdmin />} />
        <Route path="/Customer" element={<EAdminCustomer />} />
        <Route path="/jobs/:id" element={<JobsDetails />} />
        <Route path="/Category" element={<ECategory />} />
        <Route path="/Support" element={<EAdminDelivery />} />
        <Route path="/driver/:id" element={<DriverDetails />} />
        <Route path="/Product" element={<EProduct />} />
        <Route path="/pushNotification" element={<PushNotification />} />
        <Route path="/coupon" element={<Coupon />} />
        <Route path="/getMeThis" element={<GetMeThis />} />
        <Route path="/Orders" element={<EAdminOrders />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/SubCategory" element={<ESubCategory />} />
        <Route path="/post" element={<Post />} />
        <Route path="/notification" element={<Notification />} />
        <Route path='/help_support' element={<Help />} />
      </Routes>
    </>
  );
}

export default App;

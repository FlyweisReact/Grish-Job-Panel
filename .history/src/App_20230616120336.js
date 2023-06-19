/** @format */

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./E-CommerceAdmin/forms/Login";
import Dashboard from "./E-CommerceAdmin/pages/Dashboard";
import ECategory from "./E-CommerceAdmin/pages/ECategory";
import EProduct from "./E-CommerceAdmin/pages/EProduct";
import EVendorList from "./E-CommerceAdmin/pages/EVendorList";
import EAdminOrders from "./E-CommerceAdmin/pages/EAdminOrders";
import EAdminProduct from "./E-CommerceAdmin/pages/EAdminProduct";
import EAdminDelivery from "./E-CommerceAdmin/pages/EAdminDelivery";
import EAdminCustomer from "./E-CommerceAdmin/pages/EAdminCustomer";
import EAdmin from "./E-CommerceAdmin/pages/EAdmin";
import ESubCategory from "./E-CommerceAdmin/pages/ESubCategory";
import ESingleProduct from "./E-CommerceAdmin/pages/ESingleProduct";
import PushNotification from "./E-CommerceAdmin/pages/PushNotification";
import Banners from "./E-CommerceAdmin/pages/Banners";
import Coupon from "./E-CommerceAdmin/pages/Coupon";
import GetMeThis from "./E-CommerceAdmin/pages/GetMeThis";
import PrivacyPolicy from "./E-CommerceAdmin/pages/PrivacyPolicy";
import Terms from "./E-CommerceAdmin/pages/Terms";
import HelpSupport from "./E-CommerceAdmin/pages/HelpSupport";
import Complaints from "./E-CommerceAdmin/pages/Complaints";
import JobsDetails from "./E-CommerceAdmin/pages/JobsDetails";
import DriverDetails from "./E-CommerceAdmin/pages/DriverDetails";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/Admin" element={<EAdmin />} />
        <Route path="/Customer" element={<EAdminCustomer />} />
        <Route path="/jobs/:id" element={<JobsDetails />} />
        <Route path="/Category" element={<ECategory />} />
        <Route path="/Support" element={<EAdminDelivery />} />
        <Route path="/driver/:id" element={<DriverDetails />} />
        <Route path="/Product" element={<EProduct />} />

        <Route path="/pushNotification" element={<PushNotification />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/banner" element={<Banners />} />
        <Route path="/coupon" element={<Coupon />} />
        <Route path="/getMeThis" element={<GetMeThis />} />
        <Route path="/Orders" element={<EAdminOrders />} />
        <Route path="/SubCategory" element={<ESubCategory />} />
        <Route path="/VendorList" element={<EVendorList />} />
        <Route
          path="/E-Commerce/Admin/Product/:id"
          element={<EAdminProduct />}
        />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/helpSupport" element={<HelpSupport />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route
          path="/E-Commerce/Admin/Sproduct/:id"
          element={<ESingleProduct />}
        />
      </Routes>
    </>
  );
}

export default App;
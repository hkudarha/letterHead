import { Axios } from "../../constants/maincontant";

// vendor registration
export const vendorRegister = async (data) => {
  try {
    const response = await Axios.post("/vendor/register", data);
    return response?.data;
  } catch (err) {
    return err?.response?.data;
  }
};

// verify email otp
export const verifyEmailOtp = async (data) => {
  try {
    const response = await Axios.post("/vendor/verify-otp", data);
    return response?.data;
  } catch (err) {
    return err?.response?.data;
  }
};

// router.post("/register" , registerVendor)
// router.post("/login" , loginVendor)
// router.get("/details" ,vendorAuthMiddleware , getVendorDetails)

// get vendor details
export const getVendorDetails = async () => {
  try {
    const response = await Axios.get("/vendor/details");
    return response?.data;
  } catch (err) {
    return err?.response?.data;
  }
};

// vendor login
export const vendorLogin = async (data) => {
  try {
    const response = await Axios.post("/vendor/login", data);
    return response?.data;
  } catch (err) {
    return err?.response?.data;
  }
};


// router.get("/all-orders" , vendorAuthMiddleware , getVendorOrders)

export const getVendorOrders = async () => {
  try {
    const response = await Axios.get("/vendor/all-orders");
    return response?.data;
  } catch (err) {
    return err?.response?.data;
  }
};

// router.patch("/change-order-status/:orderId" , vendorAuthMiddleware , updateOrderStatus)

export const updateOrderStatus = async (orderId, status) => {
  try {
    const response = await Axios.patch(`/vendor/change-order-status/${orderId}`, { status });
    return response?.data;
  }
  catch (err) {
    return err?.response?.data;
  }
};


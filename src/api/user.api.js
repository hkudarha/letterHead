import { Axios } from "../constants/maincontant";

export const userRegister = async (data) => {
  try {
    const response = await Axios.post("/user/register", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const verifyEmailOtp = async (data) => {
  try {
    const response = await Axios.post("/user/verify-otp", data);
    return response.data;
  }

  catch (error) {
    throw error;
  }
};

export const userLogin = async (data) => {
  try {
    const response = await Axios.post("/user/login", data);   
    return response.data;
  } catch (error) {
    throw error;
  }
};



export const getProfile = async (data) => {
  try {
    const response = await Axios.get("/user/profile", data);
    return response.data;
  }
  catch (error) {
    throw error;
  }
};
 
export const updateProfile = async (data) => {
  try {
    const response = await Axios.put("/user/get-profile", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// router.post("/change-password" , authMiddleware , changePassword)
// router.post("/forgot-password" , forgotPassword)

export const changePassword = async (data) => {
  try {
    const response = await Axios.post("/user/change-password", data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const forgotPassword = async (data) => {
  try {
    const response = await Axios.post("/user/forgot-password", data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};


//=================ADD FUND ROUTES===================//
// router.post("/request-fund" , authMiddleware ,  upload.single("paymentProof") , fundRequest)
// router.get("/get-fund-history" , authMiddleware , getMyFundRequests)
// router.get("/get-all-qr" , authMiddleware , getAllQRcode)
// router.get("/get-qr" , authMiddleware , getQRcode)

export const requestFund = async (data) => {
  try {
    const response = await Axios.post("/user/request-fund", data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getMyFundRequests = async () => {
  try {
    const response = await Axios.get("/user/get-fund-history");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getAllQRcode = async () => {
  try {
    const response = await Axios.get("/user/get-all-qr");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getQRcode = async () => {
  try {
    const response = await Axios.get("/user/get-qr");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};


// router.get("/my-orders" , authMiddleware , getMyOrders)

export const getMyOrders = async () => {
  try {
    const response = await Axios.get("/user/my-orders");
    return response.data;
  }
  catch (error) {
    return error.response.data;
  }
};

// router.get("/get-order/:orderId", getOrderByOrderId);

export const getOrderByOrderId = async (orderId) => {
  try {
    const response = await Axios.get(`/user/get-order/${orderId}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};


// router.post("/request-return", authMiddleware, requestReturn);

export const requestReturn = async (id, data) => {
  try {
    const response = await Axios.post(`/user/request-return/${id}`, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}


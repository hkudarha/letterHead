import { Axios } from "../constants/maincontant";

export const adminLogin = async (data) => {
  try {
    const response = await Axios.post("/admin/login", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// router.get("/dashboard" , adminAuthMiddleware , getAdminDashboardStats)

export const getAdminDashboardStats = async () => {
  try {
    const response = await Axios.get("/admin/dashboard");
    return response.data;
  } catch (error) {
    return (
      error.response?.data || { success: false, message: "An error occurred" }
    );
  }
};

// router.get("/all-users" , adminAuthMiddleware , getAllUsers)

export const getAllUsers = async () => {
  try {
    const response = await Axios.get("/admin/all-users"); 
    return response.data;
  } catch (error) {
    return (
      error.response?.data || { success: false, message: "An error occurred" }
    );
  }
};

// router.patch("/change-user-status/:userId" , adminAuthMiddleware , toggleUserStatus)

export const toggleUserStatus = async (userId) => {
  try {
    const response = await Axios.patch(`/admin/change-user-status/${userId}`); 
    return response.data;
  } catch (error) {
    return (
      error.response?.data || { success: false, message: "An error occurred" }
    );
  }
};

// router.patch("/block-user/:userId" , adminAuthMiddleware , BlockUserStatus)

export const blockUserStatus = async (userId) => {
  try {
    const response = await Axios.patch(`/admin/block-user/${userId}`);
    return response.data;
  }
  catch (error) {
    return (
      error.response?.data || { success: false, message: "An error occurred" }
    );
  }
};

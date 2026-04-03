import { Axios } from "../../constants/maincontant";


export const addProduct = async (formData) => {
    try {
        const response = await Axios.post("/admin/add-product", formData);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export const updateProduct = async (productId, formData) => {
    try {
        const response = await Axios.put(`/admin/update-product/${productId}`, formData);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export const deleteProduct = async (productId) => {
    try {
        const response = await Axios.delete(`/admin/delete/${productId}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export const toggleProductStatus = async (productId) => {
    try {
        const response = await Axios.patch(`/admin/update-status/${productId}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export const getProductById = async (productId) => {
    try {
        const response = await Axios.get(`/admin/get-product/${productId}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export const getAllProducts = async () => {
    try {
        const response = await Axios.get("/admin/all-products");
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};



//=================ORDERS========================//
// router.get("/all-orders" , adminAuthMiddleware , getAllOrders)
// router.patch("/change-order-status/:orderId" , adminAuthMiddleware , updateOrderStatus)

export const getAllOrders = async () => {
    try {
        const response = await Axios.get("/admin/all-orders");
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export const updateOrderStatus = async (orderId, status) => {
    try {
        const response = await Axios.patch(`/admin/change-order-status/${orderId}`, { status });
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
};


// router.put("/approve-return/:orderId", adminAuthMiddleware, approveReturn);
// router.put("/reject-return/:orderId", adminAuthMiddleware, rejectReturn);

export const approveReturn = async (orderId) => {
    try {
        const response = await Axios.put(`/admin/approve-return/${orderId}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export const rejectReturn = async (orderId) => {
    try {
        const response = await Axios.put(`/admin/reject-return/${orderId}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};


// router.put("/admin/complete-return/:orderId", adminAuthMiddleware, completeReturn);

export const completeReturn = async (orderId) => {
    try {
        const response = await Axios.put(`/admin/complete-return/${orderId}`);
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
};

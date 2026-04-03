import { Axios } from "../../constants/maincontant";
export const addVendorProduct = async (formData) => {
    try {
        const response = await Axios.post("/vendor/add-product", formData);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export const updateVendorProduct = async (productId, formData) => {
    try {
        const response = await Axios.put(`/vendor/update-product/${productId}`, formData);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export const deleteVendorProduct = async (productId) => {
    try {
        const response = await Axios.delete(`/vendor/delete/${productId}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export const toggleVendorProductStatus = async (productId) => {
    try {
        const response = await Axios.patch(`/vendor/update-status/${productId}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export const getVendorProductById = async (productId) => {
    try {
        const response = await Axios.get(`/vendor/get-product/${productId}`);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

export const getVendorAllProducts = async () => {
    try {
        const response = await Axios.get("/vendor/all-products");
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};

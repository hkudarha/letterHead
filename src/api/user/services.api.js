import { Axios } from "../../constants/maincontant";


// router.get("/get-service-category", getAllServiceCategories);

export const getAllServiceCategories = async () => {
    try {
        const response = await Axios.get("/user/get-service-category");
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
};


// router.get("/get-active-service" , getActiveServices)

export const getActiveServices = async () => {
    try {
        const response = await Axios.get("/user/get-active-service");
        return response.data;
    }
    catch (error) {

        return error.response.data;
    }
};


// router.get("/get-services/:serviceId" , getServiceById)

export const getServiceById = async (serviceId) => {
    try {
        const response = await Axios.get(`/user/get-services/${serviceId}`);
        return response.data;
    }
    catch (error) {
        return error.response.data;
    }
}

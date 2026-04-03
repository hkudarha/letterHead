import { Axios } from "../../constants/maincontant";

export const createVendorServiceCategory = async (formData) => {
  try {
    const response = await Axios.post(
      "/vendor/create-service-category",
      formData,
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getAllVendorServiceCategories = async () => {
  try {
    const response = await Axios.get("/vendor/get-service-category");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getVendorSingleServiceCategory = async (id) => {
  try {
    const response = await Axios.get(`/vendor/service-category/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateVendorServiceCategory = async (id, formData) => {
  try {
    const response = await Axios.put(
      `/vendor/update-service-category/${id}`,
      formData,
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteVendorServiceCategory = async (id) => {
  try {
    const response = await Axios.delete(`/vendor/delete-service-category/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const toggleVendorServiceCategoryStatus = async (id) => {
  try {
    const response = await Axios.patch(
      `/vendor/toggle-service-category/status/${id}`,
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// router.get("/get-all-active-category" , getAllActiveServiceCategory)

export const getAllActiveVendorServiceCategory = async () => {
  try {
    const response = await Axios.get("/vendor/get-all-active-category");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

//===================SERVICE SUBCATEGORY=====================//
// router.post("/create-service-subcategory", createServiceSubCategory);
// router.get("/get-service-subcategory", getAllServiceSubCategories);
// router.get("/get-service-subcategory/by-category/:categoryId",getSubCategoriesByCategory);
// router.get("/get-service-subcategory/:id", getSingleServiceSubCategory);
// router.put("/update-service-subcategory/:id", updateServiceSubCategory);
// router.delete("/delete-service-subcategory/:id", deleteServiceSubCategory);
// router.patch( "/toggle-service-subcategory/status/:id",toggleServiceSubCategoryStatus);

export const createVendorServiceSubCategory = async (data) => {
  try {
    const response = await Axios.post(
      "/vendor/create-service-subcategory",
      data,
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getAllVendorServiceSubCategories = async () => {
  try {
    const response = await Axios.get("/vendor/get-service-subcategory");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getVendorSubCategoriesByCategory = async (categoryId) => {
  try {
    const response = await Axios.get(
      `/vendor/get-service-subcategory/by-category/${categoryId}`,
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getSingleVendorServiceSubCategory = async (id) => {
  try {
    const response = await Axios.get(`/vendor/get-service-subcategory/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateVendorServiceSubCategory = async (id, data) => {
  try {
    const response = await Axios.put(
      `/vendor/update-service-subcategory/${id}`,
      data,
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteVendorServiceSubCategory = async (id) => {
  try {
    const response = await Axios.delete(
      `/vendor/delete-service-subcategory/${id}`,
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const toggleVendorServiceSubCategoryStatus = async (id) => {
  try {
    const response = await Axios.patch(
      `/vendor/toggle-service-subcategory/status/${id}`,
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

//===================SERVICE LISTING ROUTE=======================//
// router.post("/create-service" , adminAuthMiddleware , upload.array("images" , 5) , createService)
// router.get("/get-all-service" , adminAuthMiddleware , getAdminServices)
// router.put("/update-services/:id" , adminAuthMiddleware , upload.array("images" , 5) , updateService)
// router.patch("/toggle-service/:id" , adminAuthMiddleware , changeServiceStatus )

export const createVendorService = async (formData) => {
  try {
    const response = await Axios.post("/vendor/create-service", formData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getVendorServices = async () => {
  try {
    const response = await Axios.get("/vendor/get-all-service");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateVendorService = async (id, formData) => {
  try {
    const response = await Axios.put(`/vendor/update-services/${id}`, formData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const changeVendorServiceStatus = async (id, isActive) => {
  try {
    const response = await Axios.patch(`/vendor/toggle-service/${id}`, {
      isActive,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

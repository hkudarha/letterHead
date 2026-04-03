import { Axios } from "../../constants/maincontant";

export const createServiceCategory = async (formData) => {
  try {
    const response = await Axios.post(
      "/admin/create-service-category",
      formData,
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getAllServiceCategories = async () => {
  try {
    const response = await Axios.get("/admin/get-service-category");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getSingleServiceCategory = async (id) => {
  try {
    const response = await Axios.get(`/admin/service-category/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateServiceCategory = async (id, formData) => {
  try {
    const response = await Axios.put(
      `/admin/update-service-category/${id}`,
      formData,
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteServiceCategory = async (id) => {
  try {
    const response = await Axios.delete(`/admin/delete-service-category/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const toggleServiceCategoryStatus = async (id) => {
  try {
    const response = await Axios.patch(
      `/admin/toggle-service-category/status/${id}`,
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// router.get("/get-all-active-category" , getAllActiveServiceCategory)

export const getAllActiveServiceCategory = async () => {
  try {
    const response = await Axios.get("/admin/get-all-active-category");
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

export const createServiceSubCategory = async (data) => {
  try {
    const response = await Axios.post(
      "/admin/create-service-subcategory",
      data,
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getAllServiceSubCategories = async () => {
  try {
    const response = await Axios.get("/admin/get-service-subcategory");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getSubCategoriesByCategory = async (categoryId) => {
  try {
    const response = await Axios.get(
      `/admin/get-service-subcategory/by-category/${categoryId}`,
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getSingleServiceSubCategory = async (id) => {
  try {
    const response = await Axios.get(`/admin/get-service-subcategory/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateServiceSubCategory = async (id, data) => {
  try {
    const response = await Axios.put(
      `/admin/update-service-subcategory/${id}`,
      data,
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteServiceSubCategory = async (id) => {
  try {
    const response = await Axios.delete(
      `/admin/delete-service-subcategory/${id}`,
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const toggleServiceSubCategoryStatus = async (id) => {
  try {
    const response = await Axios.patch(
      `/admin/toggle-service-subcategory/status/${id}`,
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

export const createService = async (formData) => {
  try {
    const response = await Axios.post("/admin/create-service", formData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getAdminServices = async () => {
  try {
    const response = await Axios.get("/admin/get-all-service");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateService = async (id, formData) => {
  try {
    const response = await Axios.put(`/admin/update-services/${id}`, formData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const changeServiceStatus = async (id, isActive) => {
  try {
    const response = await Axios.patch(`/admin/toggle-service/${id}`, {
      isActive,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

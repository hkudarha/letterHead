import { Axios } from "../../constants/maincontant";

export const createCategory = async (formData) => {
  try {
    const response = await Axios.post("/admin/create-category", formData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateCategory = async (id, formData) => {
  try {
    const response = await Axios.put(`/admin/update-category/${id}`, formData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const toggleCategoryStatus = async (id) => {
  try {
    const response = await Axios.put(`/admin/toggle-category/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};


export const getAllCategories = async () => {
  try {
    const response = await Axios.get("/admin/all-categories");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const addSubCategory = async (categoryId, formData) => {
  try {
    const response = await Axios.post(
      `/admin/create-subcategory/${categoryId}`,
      formData,
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateSubCategory = async (id, formData) => {
  try {
    const response = await Axios.put(
      `/admin/update-subcategory/${id}`,
      formData,
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};


export const toggleSubCategoryStatus = async (id) => {
  try {
    const response = await Axios.put(`/admin/toggle-subcategory/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getAllSubCategories = async () => {
  try {
    const response = await Axios.get("/admin/get-subcategories");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
export const getSubCategoriesByCategory = async (categoryId) => {
  try {
    const response = await Axios.get(`/admin/category/${categoryId}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

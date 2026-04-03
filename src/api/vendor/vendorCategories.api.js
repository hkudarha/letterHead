import { Axios } from "../../constants/maincontant";

// =======================category=============================
export const CreateCategoryVendor = async (paylaod) => {
  try {
    const response = await Axios.post("/vendor/create-category", paylaod);
    return response?.data;
  } catch (err) {
    return err?.response?.data;
  }
};

export const getAllCategoriesVendor = async () => {
  try {
    const response = await Axios.get("/vendor/all-categories");
    return response?.data;
  } catch (err) {
    return err?.response?.data;
  }
};

export const EditCategoryVendor = async (id, paylaod) => {
  try {
    const response = await Axios.put(`/vendor/update-category/${id}`, paylaod);
    return response?.data;
  } catch (err) {
    return err?.response?.data;
  }
};




// ==============================SUB category=========================================


export const CreateSubCategoryVendor = async (id,data) => {
  try {
    const response = await Axios.post(`/vendor/create-subcategory/${id}`, data);
    return response?.data;
  } catch (err) {
    return err?.response?.data;
  }
};

export const getSubCategoriesVendor = async () => {
  try {
    const response = await Axios.get("/vendor/get-subcategories");
    return response?.data;
  } catch (err) {
    return err?.response?.data;
  }
};
export const getSubCategoriesByCategory = async (categoryId) => {
  try {
    const response = await Axios.get(`/vendor/category/${categoryId}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getCategories = async (categoryId) => {
  try {
    const response = await Axios.get(`/vendor/category/${categoryId}`);
    return response?.data;
  } catch (err) {
    return err?.response?.data;
  }
};

export const EditSubCategoryVendor = async (id, data) => {
  try {
    const response = await Axios.put(
      `/vendor/update-subcategory/${id}`,
      data
    );
    return response?.data;
  } catch (err) {
    return err?.response?.data;
  }
};
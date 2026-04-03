import { Axios } from "../../constants/maincontant";

//=================BANNER ROUTES=================
// router.post("/add-banner", adminAuthMiddleware, upload.single("image"), addBanners);
// router.delete("/delete-banner/:id", adminAuthMiddleware, deleteBanner);
// router.patch("/change-banner-status/:id", adminAuthMiddleware, changeBannerStatus);
// router.get("/banners", adminAuthMiddleware, getBanners)

export const addBanners = async (formData) => {
  try {
    const response = await Axios.post("/admin/add-banner", formData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteBanner = async (id) => {
  try {
    const response = await Axios.delete(`/admin/delete-banner/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const changeBannerStatus = async (id, isActive) => {
  try {
    const response = await Axios.patch(`/admin/change-banner-status/${id}`, {
      isActive,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getBanners = async () => {
  try {
    const response = await Axios.get("/admin/banners");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

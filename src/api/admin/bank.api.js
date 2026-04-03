import { Axios } from "../../constants/maincontant";

//================BANK QR UPLOAD ROUTES===================//
// router.post("/upload-qr" , adminAuthMiddleware , upload.single("qrCode"), saveQRCodeBank)
// router.get("/get-qr" , adminAuthMiddleware , getQrCode)
// router.delete("/delete-qr" , adminAuthMiddleware , deleteQrCode )
// router.put("/update-qr/:id" , adminAuthMiddleware , updateQrCode)

export const uploadBankQr = async (formData) => {
  try {
    const response = await Axios.post("/admin/upload-qr", formData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
export const getBankQr = async () => {
  try {
    const response = await Axios.get("/admin/get-qr");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteBankQr = async (id) => {
  try {
    const response = await Axios.delete(`/admin/delete-qr/${id}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateBankQr = async (id, formData) => {
  try {
    const response = await Axios.put(`/admin/update-qr/${id}`, formData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getAllFundRequests = async () => {
  try {
    const response = await Axios.get("/admin/all-fund-request");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const changeFundStatus = async (fundId, fundStatus) => {
  const response = await Axios.patch(`/admin/update-fund-status/${fundId}`, {
    fundStatus,
  });

  return response.data;
};

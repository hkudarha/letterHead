import { Axios } from "../../constants/maincontant";

// router.get("/get-active-banners" , getActiveBanners)
// router.get("/get-active-products" , getAllActiveProducts)

export const getActiveBanners = async () => {
  try {
    const response = await Axios.get("/user/get-active-banners");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getAllActiveProducts = async () => {
  try {
    const response = await Axios.get("/user/get-active-products");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// router.get("/get-particular-product/:productId" , getProductById)

export const getProductById = async (productId) => {
  try {
    const response = await Axios.get(
      `/user/get-particular-product/${productId}`,
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

//===================CART ROUTES=====================//
// router.post("/add-to-cart", authMiddleware, addToCart);
// router.get("/get-cart", authMiddleware, getCart);
// router.put("/update-cart", authMiddleware, updateCartItem);
// router.delete("/remove-cart/:productId", authMiddleware, removeFromCart);
// router.delete("/clear-cart", authMiddleware, clearCart);

export const addToCart = async (productId, quantity) => {
  try {
    const response = await Axios.post("/user/add-to-cart", {
      productId,
      quantity,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getCart = async () => {
  try {
    const response = await Axios.get("/user/get-cart");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateCartItem = async ({ productId, quantity }) => {
  console.log("API PAYLOAD:", { productId, quantity });

  return Axios.put("/user/update-cart", {
    productId: String(productId),
    quantity: Number(quantity),
  });
};


export const removeFromCart = async (productId) => {
  try {
    const response = await Axios.delete(`/user/remove-cart/${productId}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const clearCart = async () => {
  try {
    const response = await Axios.delete("/user/clear-cart");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};


// =======ADDRESS ROUTES====================//
// router.post("/create-address" , authMiddleware , createAddress)
// router.get("/all-address" ,authMiddleware, getAddresses)
// router.get("/get-address/:id" ,authMiddleware, getAddressById)
// router.put("/update-address/:id" ,authMiddleware, updateAddress)
// router.delete("/delete-address/:id" ,authMiddleware, deleteAddress)

export const createAddress = async (addressData) => {
  try {
    const response = await Axios.post("/user/create-address", addressData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }

};


export const getAddresses = async () => {
  try {
    const response = await Axios.get("/user/all-address");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getAddressById = async (addressId) => {
  try {
    const response = await Axios.get(`/user/get-address/${addressId}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateAddress = async (addressId, addressData) => {
  try {

    const response = await Axios.put(
      `/user/update-address/${addressId}`,
      addressData
    );
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
;

export const deleteAddress = async (addressId) => {
  try {
    const response = await Axios.delete(`/user/delete-address/${addressId}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

// router.patch("/toggle-primary/:id" , authMiddleware , setPrimaryAddress)
export const setPrimaryAddress = async (addressId) => {
  try {
    const response = await Axios.patch(`/user/toggle-primary/${addressId}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}





// router.get("/all-categories",getCategories)
// router.get("/category/:categoryId", getSubCategoriesByCategory);
export const getCategories = async () => {
  try {
    const response = await Axios.get("/user/all-categories");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getSubCategoriesByCategory = async (categoryId) => {
  try {
    const response = await Axios.get(`/user/category/${categoryId}`);
    return response.data;
  }
  catch (error) {
    return error.response.data;
  }
};



// router.post("/create-order" , authMiddleware , createOrder)

export const createOrder = async (orderData) => {
  try {
    const response = await Axios.post("/user/create-order", orderData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};


// router.post("/verify-payment" , authMiddleware , verifyPayment)

export const verifyPayment = async (paymentData) => {
  try { 

    const response = await Axios.post("/user/verify-payment", paymentData); 
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
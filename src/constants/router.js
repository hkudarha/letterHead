export const Routers = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  ADMIN_LOGIN: "/admin/login",

  GIFT_CARDS: "/gift-cards",
  CARDS: "/cards",
  SHOPPING: "/shopping",
  OFFERS: "/offers",
  RECHARGE: "/recharge",
  TRAVEL: "/travel",
  DIGIGOLD: "/digigold",
  VENDOR: "/vendor",
  VENDOR_LOGIN: "/vendor/login",
  DIGIGOLD: "/digigold",
  CASHAQUA: "/cashaqua",
  GGMALL: "/ggmall",
  LABS: "/labs",
  ENTERTAINMENT: "/entertainment",
  INSURANCE: "/insurance",

  SERVICE_CATEGORY: "/services/categories",
  SERVICES: "/services",
  SERVICE_DETAILS: "/service/:id",

  CART : "/cart",
  CHECKOUT : "/checkout",

  

  PRIVACY_POLICY: "/privacy-policy",
  SHIPPING_RETURNS: "/shipping-returns",
  FAQ: "/faq",
  PRODUCTS: "/products",
  PRODUCT_DETAILS: "/product/:id",
};

export const UserRouters = {
  DASHBOARD: "/user/dashboard",
  PROFILE: "/user/profile",
  CHANGE_PASSWORD: "/user/change-password",
  ORDER_HISTORY: "/user/order-history",

  INVOICE: "/user/invoice/:orderId",

  ADD_FUND: "/user/add-fund",
  FUND_HISTORY: "/user/fund-history",
};

export const AdminRouters = {
  DASHBOARD: "/admin/dashboard",
  USERS: "/admin/users",
  BANNER_MANAGEMENT: "/admin/banner-management",
  BANK_QR_MANAGEMENT: "/admin/bank-qr-management",
  FUND_REQUESTS: "/admin/fund-requests",

  SERVICE_CATEGORY_MANAGEMENT: "/admin/services/category-management",
  SERVICE_SUBCATEGORY_MANAGEMENT: "/admin/services/sub-category-management",
  SERVICE_MANAGEMENT: "/admin/services/service-management",

  CATEGORY_MANAGEMENT: "/admin/shopping/category-management",
  SUB_CATEGORY_MANAGEMENT: "/admin/shopping/sub-category-management",
  PRODUCT_MANAGEMENT: "/admin/shopping/product-management",

  USER_ORDERS: "/admin/user-orders",
};


export const VendorRouters = {
 DASHBOARD: "/vendor/dashboard",
 CREATE_VENDOR_CATEGORY: "/vendor/create-category",
 MANAGE_VENDOR_CATEGORY: "/vendor/manage-category",

 CREATE_SUB_CATEGORY_VENDOR: "/vendor/create-sub-category",
 PRODUCT_VENDOR_MANAGEMENT: "/vendor/product-management",

 VENDOR_SERVICE_CATEGORY_MANAGEMENT: "/vendor/services/category-management",
 VENDOR_SERVICE_SUBCATEGORY_MANAGEMENT: "/vendor/services/sub-category-management",
 VENDOR_SERVICE_MANAGEMENT: "/vendor/services/service-management",

 USER_ORDERS: "/vendor/user-orders",

 PROFILE: "/vendor/profile",
 CHANGE_PASSWORD: "/vendor/change-password",
};
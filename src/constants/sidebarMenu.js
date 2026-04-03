import { MdDashboard, MdPeople, MdSchool, MdSettings } from "react-icons/md";
import { AdminRouters, UserRouters, VendorRouters } from "./router";
import { LuUserRound } from "react-icons/lu";


export const sidebarMenu = {
  user: [
    {
      title: "Dashboard",
      path: UserRouters.DASHBOARD,
      icon: MdDashboard,
    },
    {
      title: "Orders History",
      path: UserRouters.ORDER_HISTORY,
      icon: MdDashboard,
    } ,
    {
      title: "Profile",
      icon: MdPeople,
      children: [
        {
          title: "Edit Profile",
          path: UserRouters.PROFILE,
        },
        {
          title: "Change Password",
          path: UserRouters.CHANGE_PASSWORD,
        },
      ],
    },
    {
      title: "Funds",
      icon: MdSchool,
      children: [
        {
          title: "Add Fund",
          path: UserRouters.ADD_FUND,
        },
        {
          title: "Fund History",
          path: UserRouters.FUND_HISTORY,
        },
      ],
    },
  ],

  Admin: [
    {
      title: "Dashboard",
      path: AdminRouters.DASHBOARD,
      icon: MdDashboard,
    },
    {
      title: "Users",
      path: AdminRouters.USERS,
      icon: MdPeople,
    },
    {
      title: "User Orders",
      path: AdminRouters.USER_ORDERS,
      icon: LuUserRound,
    } ,
    {
      title: "Banner Management",
      path: AdminRouters.BANNER_MANAGEMENT,
      icon: MdSettings,
    },
    {
      title: "Bank QR Management",
      path: AdminRouters.BANK_QR_MANAGEMENT,
      icon: MdSettings,
    },
    {
      title: "Fund Requests",
      path: AdminRouters.FUND_REQUESTS,
      icon: MdSettings,
    },
    {
      title: "Shopping Master",
      icon: MdSettings,
      children: [
        {
          title: "Category Management",
          path: AdminRouters.CATEGORY_MANAGEMENT,
        },
        {
          title: "Sub Category Management",
          path: AdminRouters.SUB_CATEGORY_MANAGEMENT,
        },
        {
          title: "Product Management",
          path: AdminRouters.PRODUCT_MANAGEMENT,
        },
      ],
    },
    {
      title: "Service Master",
      icon: MdSettings,
      children: [
        {
          title: "Service Category Management",
          path: AdminRouters.SERVICE_CATEGORY_MANAGEMENT,
        },
        {
          title: "Service Sub Category Management",
          path: AdminRouters.SERVICE_SUBCATEGORY_MANAGEMENT,
        },
        {
          title: "Service Management",
          path: AdminRouters.SERVICE_MANAGEMENT,
        },
      ],
    },
  ],

  Vendor: [
    {
      title: "Dashboard",
      path: VendorRouters.DASHBOARD,
      icon: MdDashboard,
    },{
      title: "User Orders", path: VendorRouters.USER_ORDERS, icon: LuUserRound,
    },
    {
      title: "Category",
      icon: MdSettings,
      children: [
        {
          title: "Category",
          path: VendorRouters.CREATE_VENDOR_CATEGORY,
        },
        {
          title: "Manage Category",
          path: VendorRouters.MANAGE_VENDOR_CATEGORY,
        },
      ],
    },
    {
      title: "Sub Category",
      icon: MdSettings,
      children: [
        {
          title: "Create SubCategory",
          path: VendorRouters.CREATE_SUB_CATEGORY_VENDOR,
        },
      ],
    },
    // {
    //   title: "Profile",
    //   icon: MdPeople,
    //   children: [
    //     {
    //       title: "Edit Profile",
    //       path: UserRouters.PROFILE,
    //     },
    //     {
    //       title: "Change Password",
    //       path: UserRouters.CHANGE_PASSWORD,
    //     },
    //   ],
    // },
    {
      title: "Products Management",
      icon: MdSchool,
      children: [
        {
          title: "Product List",
          path: VendorRouters.PRODUCT_VENDOR_MANAGEMENT,

        },
      ],
    },
    {
      title: "Services Master",
      icon: MdSchool,
      children: [
        {
          title: "Service Category Management",
          path: VendorRouters.VENDOR_SERVICE_CATEGORY_MANAGEMENT,
        },
        {
          title: "Service SubCategory Management",
          path: VendorRouters.VENDOR_SERVICE_SUBCATEGORY_MANAGEMENT,
        },
        {
          title: "Service Management",
          path: VendorRouters.VENDOR_SERVICE_MANAGEMENT,
        },
      ],
    },
  ],
};

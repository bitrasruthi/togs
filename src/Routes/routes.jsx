import React, { lazy } from "react";
import Dashboard from "../Components/Dashboard";
import ProductDetails from "../Components/products/ProductDetails";
import paths from "./paths";

export default {
  DEFAULT: {
    component: Dashboard,
    route: paths.DEFAULT,
  },
  PRODUCT: {
    component: ProductDetails,
    route: paths.PRODUCT,
  },
};

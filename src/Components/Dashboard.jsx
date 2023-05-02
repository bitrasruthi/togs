import * as React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import Header from "./Header";
import Categories from "./Categories";
import Sliders from "./products/Products";

const Dashboard = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [myFavorites, setMyFavorites] = React.useState();
  const [myCart, setMyCart] = React.useState();

  return (
    <>
      <Header myFavorites={myFavorites} myCart={myCart} />
      <Categories />
      <Sliders setMyFavorites={setMyFavorites} setMyCart={setMyCart} />
    </>
  );
};
export default Dashboard;

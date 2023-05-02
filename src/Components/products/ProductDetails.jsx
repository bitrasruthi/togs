import * as React from "react";
import { Grid, Paper, Typography } from "@mui/material";

const ProductDetails = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [myFavorites, setMyFavorites] = React.useState();
  const [myCart, setMyCart] = React.useState();

  React.useEffect(() => {
    console.log("test");
  }, []);

  return (
    <>
      <Typography>Details</Typography>
    </>
  );
};
export default ProductDetails;

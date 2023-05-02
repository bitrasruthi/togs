import * as React from "react";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Paper,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import DiamondIcon from "@mui/icons-material/Diamond";
import CableIcon from "@mui/icons-material/Cable";
import KitchenIcon from "@mui/icons-material/Kitchen";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import FastfoodIcon from "@mui/icons-material/Fastfood";
const icons = [
  {
    title: "Groceries",
    icons: FastfoodIcon,
  },
  {
    title: "Mobiles",
    icons: MobileScreenShareIcon,
  },
  {
    title: "Fashion",
    icons: DiamondIcon,
  },
  {
    title: "Electronics",
    icons: CableIcon,
  },
  {
    title: "Appliances",
    icons: KitchenIcon,
  },
  {
    title: "Travel",
    icons: LocalAirportIcon,
  },
  {
    title: "Gift cards",
    icons: CardGiftcardIcon,
  },
  {
    title: "Offers",
    icons: LocalOfferIcon,
  },
  {
    title: "Vehicles",
    icons: TwoWheelerIcon,
  },
];

const Categories = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Container sx={{ pt: 2 }}>
      <Box
        display="flex"
        sx={{
          justifyContent: "center",
          height: 80,
          flexWrap: matches ? "wrap" : "",
        }}
      >
        {icons.map((i, index) => (
          <Tooltip title={i.title} key={index}>
            <Avatar
              alt="Categories"
              sx={{
                cursor: "pointer",
                width: 70,
                height: 70,
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                background: "#d8cbc3",
                mr: 5,
              }}
            >
              <i.icons
                color="primary"
                sx={{
                  width: 30,
                  height: 30,
                  "&:hover": {
                    width: 50,
                    height: 50,
                  },
                }}
              />
              </Avatar>
              </Tooltip>
           
        ))}
      </Box>
    </Container>
  );
};
export default Categories;

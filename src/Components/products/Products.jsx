import * as React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Container,
  Divider,
  Grid,
  ImageListItem,
  ImageListItemBar,
  Slider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Rating from "@mui/material/Rating";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useHistory } from "react-router-dom";

var settings = {
  infinite: false,
  dots: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: (
    <ArrowForwardIosIcon
      sx={{
        backgroundColor: "black",
        borderRadius: "50%",
        padding: "15px",
        color: "#fff",
        "&:hover": {
          backgroundColor: "black",
          color: "#fff",
        },
      }}
    />
  ),
  prevArrow: (
    <ArrowBackIosNewIcon
      sx={{
        backgroundColor: "black",
        borderRadius: "50%",
        padding: "15px",
        zIndex: 1001,
        color: "#fff",
        "&:hover": {
          backgroundColor: "black",
          color: "#fff",
        },
      }}
    />
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

const products = [
  {
    id: 101,
    title: "boAt",
    subTitle: "boAt Flash Edition Smart Watch with Activity Tracker",
    imgUrl: "../../images/watches/1.jpg",
    discount: 25,
    price: 500,
  },
  {
    id: 102,
    title: "Louis Devin",
    subTitle: "Silicone Strap Analog Wrist Watch for Men",
    imgUrl: "../../images/watches/2.jpg",
    price: 500,
  },
  {
    id: 103,
    title: "Fire-Boltt",
    subTitle: "Fire-Boltt Phoenix Smart Watch with Bluetooth Calling",
    imgUrl: "../../images/watches/3.jpg",
    price: 200,
  },
  {
    id: 104,
    title: "Fastrack",
    subTitle: "Analog Black Dial Unisex-Adult Watch-38024PP25",
    imgUrl: "../../images/watches/4.jpg",
    price: 400,
  },

  {
    id: 105,
    title: "Fire-Boltt",
    subTitle: "Fire-Boltt Phoenix Pro 1.39 Bluetooth Calling Smartwatch",
    imgUrl: "../../images/watches/5.jpg",
    price: 200,
  },
  {
    id: 106,
    title: "boAt",
    subTitle: "boAt Flash Edition Smart Watch with Activity Tracker",
    imgUrl: "../../images/watches/1.jpg",
    price: 700,
  },
  {
    id: 107,
    title: "boAt",
    subTitle: "boAt Flash Edition Smart Watch with Activity Tracker",
    imgUrl: "../../images/watches/1.jpg",
    price: 200,
  },
  {
    id: 108,
    title: "boAt",
    subTitle: "boAt Flash Edition Smart Watch with Activity Tracker",
    imgUrl: "../../images/watches/1.jpg",
    price: 500,
  },
  {
    id: 109,
    title: "Louis Devin",
    subTitle: "Silicone Strap Analog Wrist Watch for Men",
    imgUrl: "../../images/watches/2.jpg",
    price: 800,
  },
  {
    id: 1010,
    title: "Fire-Boltt",
    subTitle: "Fire-Boltt Phoenix Smart Watch with Bluetooth Calling",
    imgUrl: "../../images/watches/3.jpg",
    price: 200,
  },
];

const prices = [
  {
    min: 200,
  },
  {
    value: 300,
  },
  {
    value: 500,
  },
  {
    value: 1000,
  },
];

const Sliders = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  const history = useHistory();
  const [favorite, setFavorite] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [rating, setRating] = React.useState(2);
  const [slider, setSlider] = React.useState();

  React.useEffect(() => {
    if (favorite.length > 0) {
      props.setMyFavorites(favorite.length);
    }
    if (cartItems.length > 0) {
      props.setMyCart(cartItems.length);
    }
  }, [favorite, cartItems]);

  const handleFavorites = (id) => {
    if (!favorite.includes(id)) {
      setFavorite([...favorite, id]);
    }
  };

  const handleCartItems = (id) => {
    if (!cartItems.includes(id)) {
      setCartItems([...cartItems, id]);
    }
  };

  const handleSliderChange = (event, newValue) => {
    setSlider(newValue);
  };

  const handleProductDetails = (id) => {
    // history.push(`/Product/${id}`);
  };

  return (
    <Box sx={{ p: matches ? 10 : 2 }}>
      <Grid container>
        <Grid item xs={2}>
          <Box
            sx={{
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              width: "100%",
              p: 1,
            }}
          >
            <Typography sx={{ fontWeight: "bold", p: 1 }}>Filters</Typography>
            <Divider />
            <Typography sx={{ fontWeight: 500, p: 1 }}>Price</Typography>
            <Slider
              defaultValue={5000}
              aria-label="Custom marks"
              valueLabelDisplay="auto"
              step={500}
              max={10000}
              onChange={handleSliderChange}
            />
            <Divider />

            <Accordion elevation={0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ fontWeight: 500 }}>Brand</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {products.map((i, index) => (
                  <Box key={index} display={"flex"}>
                    <Checkbox sx={{ color: "#83766b" }} />
                    <Typography sx={{ mt: 1 }}>{i.title}</Typography>
                  </Box>
                ))}
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>

        <Grid item xs={10}>
          <Box
            display={"flex"}
            justifyContent="center"
            sx={{ flexWrap: "wrap", width: "100%" }}
          >
            {products.map((item, index) => (
              <Card
                onClick={() => {
                  handleProductDetails(item.id);
                }}
                key={index}
                sx={{
                  maxWidth: 200,
                  maxHeight: 325,
                  mr: 3,
                  mb: 3,
                  cursor: "pointer",
                }}
              >
                <CardMedia
                  component="img"
                  height="194"
                  image={item.imgUrl}
                  alt="Paella dish"
                  sx={{ p: 1 }}
                />
                {item.discount > 0 && (
                  <ImageListItem>
                    <ImageListItemBar
                      className="primary-background"
                      key={index}
                      sx={{ bgcolor: "transparent" }}
                      position="top"
                      title={
                        <Typography
                          sx={{
                            position: "absolute",
                            right: -5,
                            top: "-190px",
                            width: "50px !important",
                            bgcolor: "#83766b",
                            zIndex: 1,
                            pl: 1,
                            fontWeight: 600,
                            fontSize: "10px",
                            borderRadius: "10px",
                          }}
                        >
                          {item.discount}% Off
                        </Typography>
                      }
                    />
                  </ImageListItem>
                )}
                <CardContent>
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <Typography
                        variant="body2"
                        color="text.primary"
                        sx={{ fontWeight: "bold" }}
                      >
                        {item.title}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="body2"
                        color="text.primary"
                        sx={{ fontSize: "18px" }}
                      >
                        ${item.price}.00
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Rating
                        sx={{ color: "#83766b" }}
                        size="small"
                        name="simple-controlled"
                        value={rating}
                        onChange={(event, newValue) => {
                          setRating(newValue);
                        }}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Box
                        onClick={() => {
                          handleFavorites(item.id);
                        }}
                      >
                        <FavoriteIcon
                          sx={{
                            cursor: "pointer",
                            height: 15,
                            width: 15,
                            color: favorite.includes(item.id)
                              ? "#d8cbc3"
                              : "#83766b",
                            bgcolor: favorite.includes(item.id)
                              ? "black"
                              : "transparent",
                            borderRadius: "50%",
                            p: 0.3,
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={2}>
                      <Box
                        onClick={() => {
                          handleCartItems(item.id);
                        }}
                      >
                        <LocalGroceryStoreIcon
                          sx={{
                            cursor: "pointer",
                            height: 15,
                            width: 15,
                            color: cartItems.includes(item.id)
                              ? "#d8cbc3"
                              : "#83766b",
                            bgcolor: cartItems.includes(item.id) ? "black" : "",
                            borderRadius: "50%",
                            p: 0.3,
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          fontSize: "12px",
                          textOverflow: "ellipsis !important",
                          overflow: "hidden !important",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.subTitle}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Sliders;

import {
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";
export default function ProductCard({product}) {
  // let product = {
  //   id: 1,
  //   title: "Essence Mascara Lash Princess",
  //   description:
  //     "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
  //   category: "beauty",
  //   price: 9.99,
  //   discountPercentage: 7.17,
  //   rating: 4.94,
  //   stock: 5,
  //   tags: ["beauty", "mascara"],
  //   brand: "Essence",
  //   sku: "RCH45Q1A",
  //   weight: 2,
  //   dimensions: {
  //     width: 23.17,
  //     height: 14.43,
  //     depth: 28.01,
  //   },
  //   warrantyInformation: "1 month warranty",
  //   shippingInformation: "Ships in 1 month",
  //   availabilityStatus: "Low Stock",
  //   reviews: [
  //     {
  //       rating: 2,
  //       comment: "Very unhappy with my purchase!",
  //       date: "2024-05-23T08:56:21.618Z",
  //       reviewerName: "John Doe",
  //       reviewerEmail: "john.doe@x.dummyjson.com",
  //     },
  //     {
  //       rating: 2,
  //       comment: "Not as described!",
  //       date: "2024-05-23T08:56:21.618Z",
  //       reviewerName: "Nolan Gonzalez",
  //       reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
  //     },
  //     {
  //       rating: 5,
  //       comment: "Very satisfied!",
  //       date: "2024-05-23T08:56:21.618Z",
  //       reviewerName: "Scarlett Wright",
  //       reviewerEmail: "scarlett.wright@x.dummyjson.com",
  //     },
  //   ],
  //   returnPolicy: "30 days return policy",
  //   minimumOrderQuantity: 24,
  //   meta: {
  //     createdAt: "2024-05-23T08:56:21.618Z",
  //     updatedAt: "2024-05-23T08:56:21.618Z",
  //     barcode: "9164035109868",
  //     qrCode: "https://assets.dummyjson.com/public/qr-code.png",
  //   },
  //   images: [
  //     "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
  //   ],
  //   thumbnail:
  //     "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
  // };
  return (
    <div>
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
        <Paper elevation={2} sx={{ height: "100%" }}>
          <CardMedia
            component="img"
            alt={product.title}
            height={"400"}
            image={product.thumbnail}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="overline"
              fontWeight="bolder"
              component="div"
            >
              {product.title}
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
              }}
            >
              <Typography variant="subtitle1">{product.brand}</Typography>

              <Box sx={{ display: "flex", justifyContent: "end", gap: 2 }}>
                {product.tags.map((i) => (
                  <Chip
                    key={i}
                    label={i}
                    size="small"
                    sx={{ borderRadius: "10px" }}
                    variant="outlined"
                  />
                ))}
              </Box>
            </Box>
          </CardContent>
          <CardActions>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "100%",
                }}
              > 
                <Typography variant="subtitle2">${product.price}</Typography>

                <Typography variant="subtitle2">
                  <strike>
                    $
                    {(product.price + product.discountPercentage / 100).toFixed(
                      2
                    )}
                  </strike>
                </Typography>

                <Typography sx={{ color: "green", fontSize: "14px" }}>
                  {product.discountPercentage}% Off
                </Typography>
              </Box>

              <Chip
                label={product.rating}
                size="small"
                color="success"
                sx={{ borderRadius: "10px" }}
                icon={<StarRateIcon sx={{ fontSize: "10px" }} />}
              />
            </Box>
          </CardActions>
        </Paper>
      </Link>
    </div>
  );
}

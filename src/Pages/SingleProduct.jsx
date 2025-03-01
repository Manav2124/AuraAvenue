import {
  Box,
  Chip,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";
export default function SingleProduct() {
  // let productInfo = {
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
  //   console.log(productInfo);
  

  let {abcd}= useParams()
  const [productInfo,setProductInfo]= useState(null)
  const [imageIndex,setImageIndex]= useState(0)
  useEffect(()=>{
    // let id = params.id
    axios.get(`https://dummyjson.com/products/${abcd}`)
    .then((res)=>{
        console.log(res.data,555)
        setProductInfo(res.data)
        
    })
    .catch((err)=>{
      console.log(err,222)
    })
    
  },[])
  // let params= useParams()
  // console.log(params.abcd)
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Box sx={{ p: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}>
            <Paper
              elevation={0}
              sx={{
                height: "104vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              {productInfo?.images.map((image, index) => (
                <Box
                  key={index}
                  onClick={()=>setImageIndex(index)}
                  sx={{
                    cursor: "pointer",
                    margin: "10px 0",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <img
                    src={image}
                    style={{
                      width: "60%",
                      height: "60%",
                      objectFit: "contain",
                    }}
                    alt={`Product ${index}`}
                  />
                </Box>
              ))}
            </Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                p: 2,
              }}
            >
              <img
                src={productInfo?.images[imageIndex]}
                style={{
                  width: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
                alt="Selected"
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper elevation={0} sx={{ height: "100vh", padding: 2 }}>
              <Box>
                <Typography
                  variant="button"
                  color="text.secondary"
                  sx={{ fontSize: "14px", fontWeight: "bolder" }}
                >
                  {productInfo?.brand}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="button"
                  color="text.secondary"
                  sx={{ fontSize: "24px", fontWeight: "bolder" }}
                >
                  {productInfo?.title}
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}
              >
                <Chip
                  size="small"
                  label={productInfo?.rating}
                  color={
                    productInfo?.rating > 4.5
                      ? "success"
                      : productInfo?.rating > 4
                      ? "warning"
                      : "error"
                  }
                  icon={<StarRateIcon sx={{ fontSize: "16px" }} />}
                  sx={{ borderRadius: "10px" }}
                />
                <Typography variant="body" color="text.secondary">
                  {productInfo?.reviews.length} reviews
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}
              >
                <Typography
                  variant="h6"
                  mt={1}
                  fontWeight={"bolder"}
                  color="green"
                >
                  Extra {productInfo?.discountPercentage}% Off
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}
              >
                <Typography variant="h4" mt={1} color="text.secondary">
                  $ {productInfo?.price}
                </Typography>
                <Typography variant="h6" mt={1} color="text.secondary">
                  <strike>
                    $
                    {parseInt(
                      productInfo?.price + productInfo?.discountPercentage / 100
                    )}
                  </strike>
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "flex-start", gap: 2 }}
              >
                <Typography variant="caption" mb={1} color="text.secondary">
                  {productInfo?.shippingInformation}
                </Typography>
              </Box>
              <Divider />
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Description</TableCell>
                      <TableCell>
                        <Typography variant="caption" color="text.secondary">
                          {productInfo?.description}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Warranty information</TableCell>
                      <TableCell>
                        <Typography variant="caption" color="text.secondary">
                          {productInfo?.warrantyInformation}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Return policy</TableCell>
                      <TableCell>
                        <Typography variant="caption" color="text.secondary">
                          {productInfo?.returnPolicy}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Status</TableCell>
                      <TableCell>
                        <Typography variant="caption" color="text.secondary">
                          {productInfo?.availabilityStatus}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody></TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

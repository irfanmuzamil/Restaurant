import React from "react";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { chefsData } from "../data/chefsData";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 3,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
          At Shinwari Restaurant, we believe in more than just great food. We
          believe in creating an experience that nourishes both body and soul.
          Our journey began 5 Yeas ago when founders' <b>internnCraft</b> opened
          the doors with a vision.
        </p>
        <h3>Our Story</h3>
        <br />
        <p>
          Shinwari Restaurant has been a cornerstone of at Karachi dining scene
          since 5. Founded by internnCraft, our restaurant has evolved from a
          humble beginning into a culinary destination renowned for its
          delecious food in the form of Desi and Fast foods.
        </p>

        <h3>Our Mission</h3>
        <p>
          Our Mission At Shinwari Restaurant, our mission is simple: to delight
          our guests with exceptional dining experiences that nourish the body
          and soul. We strive to create a warm and welcoming environment where
          every guest feels like a part of our family.
        </p>
        <h3>Our Staff</h3>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {chefsData?.map((menu) => (
            <Card sx={{ maxWidth: "300px", display: "flex", m: 2 }}>
              <CardActionArea>
                <CardMedia
                  sx={{ minHeight: "200px" }}
                  component={"img"}
                  src={menu.images}
                  alt={menu.names}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    gutterBottom
                    component={"div"}
                    style={{
                      fontWeight: "bold",
                      color: "purple",
                      fontSize: 20,
                      fontStyle: "oblique",
                    }}
                  >
                    {menu.names}
                  </Typography>
                  <Typography
                    variant="h5"
                    gutterBottom
                    component={"div"}
                    style={{
                      fontWeight: "100",
                      color: "black",
                      fontSize: 15,
                      fontStyle: "italic",
                    }}
                  >
                    {menu.descriptions}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Box>
    </Layout>
  );
};

export default About;

import React from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Fast } from "../data/Fast";

const Menu = () => {
  return (
    <Layout>
      {" "}
      <h1 style={{ marginTop: 20, textAlign: "center", alignItems: "center" }}>
        Desi Food
      </h1>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "200px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "200px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    fontWeight: "100",
                    color: "black",
                    fontSize: 15,
                    fontStyle: "italic",
                  }}
                >
                  {menu.description}
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    fontWeight: "bold",
                    color: "red",
                    fontSize: 20,
                    fontStyle: "oblique",
                  }}
                >
                  {menu.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <Box>
        <h1
          style={{ marginTop: 20, textAlign: "center", alignItems: "center" }}
        >
          Fast Food
        </h1>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {Fast.map((menu) => (
            <Card sx={{ maxWidth: "200px", display: "flex", m: 2 }}>
              <CardActionArea>
                <CardMedia
                  sx={{ minHeight: "200px" }}
                  component={"img"}
                  src={menu.images}
                  alt={menu.names}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom component={"div"}>
                    {menu.names}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{
                      fontWeight: "100",
                      color: "black",
                      fontSize: 15,
                      fontStyle: "italic",
                    }}
                  >
                    {menu.descriptions}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{
                      fontWeight: "bold",
                      color: "red",
                      fontSize: 20,
                      fontStyle: "oblique",
                    }}
                  >
                    {menu.prices}
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

export default Menu;

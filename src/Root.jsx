import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const Root = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div>
          <Container maxWidth="xs">
            <Typography
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>

            <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              laudantium asperiores porro. Ullam ipsum sapiente, quas saepe, et
              facilis quam nobis aperiam in placeat, doloremque totam dolore
              voluptas nesciunt voluptatibus!
            </Typography>
          </Container>
        </div>
      </main>
    </>
  );
};

export default Root;

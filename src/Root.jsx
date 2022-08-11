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

import useStyles from "./styles/style";

const Root = () => {
  const classes = useStyles();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon className={classes.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div className={classes.container}>
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

            <div className={classes.buttons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained">See all photos</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="secondary">
                    See my photos
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9"
                    title="Image Album"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5">Image </Typography>
                    <Typography variant="subtitle2">
                      Poluptatem velit commodi non voluptatibus aspernatur
                      exercitationem fugiat ut alias enim!
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="sm">View</Button>
                    <Button size="sm">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Container maxWidth="sm" align="center">
          <Typography variant="h4" color="secondary">
            Footer
          </Typography>
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quod
            autem praesentium quo voluptatem itaque, quia in vitae odio, sit ex
            cumque ducimus expedita, ab rem aliquam omnis excepturi fugiat!
          </Typography>
        </Container>
      </footer>
    </>
  );
};

export default Root;

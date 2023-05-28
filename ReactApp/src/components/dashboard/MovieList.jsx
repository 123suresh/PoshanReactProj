import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMovieList } from "../../action/movie";
import MovieCard from "../common/MovieCard";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.main,
  },
  cardStyle: {
    // marginLeft: "78px",
    boxSizing: "border-box",
  },
  paper: {
    alignItems: "center",
    // marginLeft: "50px",
    // marginRight: "50px",
  },
}));

function MovieList() {
  const classes = useStyles();
  const allMovies = useSelector((state) => state.info.movieList);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovieList());
  }, []);

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <Typography variant="h4" className={classes.title}>
          Movies
        </Typography>
      </Box>
      <div>
        <Grid
          container
          rowSpacing={2}
          sx={{
            justifyContent: "space-between",
          }}
        >
            <>
              {allMovies.map(({ id, src }) => (
                <React.Fragment key={id}>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    sx={{ padding: "32px" }}
                  >
                    <div className={classes.cardStyle}>
                        <MovieCard
                          imgSrc={src}
                          width="250"
                          height="350"
                          id={id}
                        />
                    </div>
                  </Grid>
                </React.Fragment>
              ))}
            </>
        </Grid>
      </div>
    </Container>
  );
}

export default MovieList;

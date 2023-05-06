import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import * as yup from "yup";

const movieValidationSchema = yup.object({
  name: yup.string().required("required"),
  poster: yup.string().required("required"),
  rating: yup.number().required("required"),
  summary: yup.string().required("required").min(20, "Need a bigger summary"),
  trailer: yup.string().required("required"),
});

function Addmovie() {
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        poster: "",
        rating: "",
        summary: "",
        trailer: "",
      },
      validationSchema: movieValidationSchema,
      onSubmit: (newMovie) => {
        console.log("The form values are", newMovie);
        addMovie(newMovie);
      },
    });

  const navigate = useNavigate();

  const addMovie = (newMovie) => {
    console.log(newMovie);
    fetch("https://63678f29f5f549f052d7b19a.mockapi.io/movies", {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/movies"));
  };

  return (
    <form onSubmit={handleSubmit} className="add-movie-container">
      <TextField
        id="filled-basic"
        label="Movie Name"
        variant="filled"
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.name && errors.name}
        helperText={touched.name && errors.name ? errors.name : null}
      />
      <TextField
        id="filled-basic"
        label="Poster"
        variant="filled"
        name="poster"
        value={values.poster}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.poster && errors.poster}
        helperText={touched.poster && errors.poster ? errors.poster : null}
      />
      <TextField
        id="filled-basic"
        label="Rating"
        variant="filled"
        name="rating"
        value={values.rating}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.rating && errors.rating}
        helperText={touched.rating && errors.rating ? errors.rating : null}
      />
      <TextField
        id="filled-basic"
        label="Summary"
        variant="filled"
        name="summary"
        value={values.summary}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.summary && errors.summary}
        helperText={touched.summary && errors.summary ? errors.summary : null}
      />
      <TextField
        id="filled-basic"
        label="trailer"
        variant="filled"
        name="trailer"
        value={values.trailer}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.trailer && errors.trailer}
        helperText={touched.trailer && errors.trailer ? errors.trailer : null}
      />
      <Button type="submit" variant="contained">
        Add Movie
      </Button>
    </form>
  );
}

export default Addmovie;

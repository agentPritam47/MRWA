import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWU4MjNlYWQ5YmY1ZWFjYjg0YzVlMjk0MDU0YmIzMSIsInN1YiI6IjY2NDIxODk3MzM3YjRmZmIxMTAxZGEwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9Mtx8z_9Xi1tqaoypyZMo2e76XgyrmgiQqKZ4Z_8jlQ",
  },
});

export default instance;
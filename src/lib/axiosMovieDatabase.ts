import axios from "axios";

//  https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1
/*
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmIxNmVlMzBiZDRlNzRlOTA4ZGI2ZWViNWI2ZmZlYSIsIm5iZiI6MTcyMTI3MDYwNC4zMDUwMzksInN1YiI6IjY2ODIxMDE1MzQ4MTVmMDg4MzEyMDhiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.96-lbkoJYoo0P6QS7lCipZXcF0R3VT8mdVpNHd8xNCo",
  },
};
*/
export const API_TMD = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",

  headers: {
    Accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmIxNmVlMzBiZDRlNzRlOTA4ZGI2ZWViNWI2ZmZlYSIsIm5iZiI6MTcyMTI3MDYwNC4zMDUwMzksInN1YiI6IjY2ODIxMDE1MzQ4MTVmMDg4MzEyMDhiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.96-lbkoJYoo0P6QS7lCipZXcF0R3VT8mdVpNHd8xNCo",
  },
});

/*
fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
*/
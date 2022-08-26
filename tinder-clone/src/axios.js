import axios from "axios";

const instance = axios.create({
  // localhost
//   baseURL: "http://localhost:8000",
  // host on heroku
  baseURL: "https://tinder-mernstackdev.herokuapp.com/",
});

export default instance;

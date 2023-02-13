import axios from "axios";

let URL = "http://localhost:5000/products";

switch (process.env.PRODUCTION) {
  case "PRODUCTION":
    URL = "http://localhost:5000/products";
    break;
  case "DEPLOYMENT":
    URL = "https://fnewfnoen.com";
    break;

  default:
    URL = "http://localhost:5000/products";
    break;
}

const instance = axios.create({
  baseURL: URL,
});

export default instance;

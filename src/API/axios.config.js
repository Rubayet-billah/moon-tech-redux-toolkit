import axios from "axios";

let URL = "http://localhost:5000";

switch (process.env.REACT_APP_DEVELOPMENT) {
  case "DEVELOPMENT":
    URL = "http://localhost:5000";
    break;
  case "PRODUCTION":
    URL = "https://fnewfnoen.com";
    break;

  default:
    URL = "http://localhost:5000";
    break;
}

const instance = axios.create({
  baseURL: URL,
});

export default instance;

 import axios from "axios";

const axiosFetch = axios.create({
  baseURL: "http://siscon.info/api",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer npBt1iRLFW6l2RzG"
  }
});

export default axiosFetch;

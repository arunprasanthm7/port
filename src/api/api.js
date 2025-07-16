import axios from "axios";

const api = axios.create({
  baseURL:
    "https://raw.githubusercontent.com/arunprasanthm7/mini-portfolio-data/refs/heads/main/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

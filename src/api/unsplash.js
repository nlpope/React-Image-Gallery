import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID GS0RmJD0NZduUPrCcuJGamsbu80TwK6oYMyyS9f7_Ck"
  }
});

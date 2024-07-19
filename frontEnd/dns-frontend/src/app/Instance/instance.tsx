import axios from "axios"


export const Axios= axios.create({
    baseURL: "http://localhost:3002" || "https://dns-5.onrender.com",
    headers: {
      "Content-Type":"application/json",
    }
  })


import axios from "axios"


export const Axios= axios.create({
    baseURL: "https://dns-6.onrender.com",
    headers: {
      "Content-Type":"application/json",
    }
  })


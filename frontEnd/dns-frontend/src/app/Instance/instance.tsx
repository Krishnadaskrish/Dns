import axios from "axios"


export const Axios= axios.create({
    baseURL: "https://dns-4.onrender.com",
    headers: {
      "Content-Type":"application/json",
    }
  })

  console.log(process.env.REACT_BASE_URL);
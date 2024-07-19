import axios from "axios"


export const Axios= axios.create({
    // baseURL: "http://localhost:3002/" || "https://food-court-1.onrender.com/",
    headers: {
      "Content-Type":"application/json",
    }
  })

  console.log(process.env.REACT_BASE_URL);
import Axios from "axios"

const KEY = "AIzaSyAwGCJD4FG7dL1saWpxerDk23IbQbZjJXw"

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY
  }
})

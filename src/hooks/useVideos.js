import { useState, useEffect } from "react"
import youtube from "../api/youtube"
const KEY = "AIzaSyAwGCJD4FG7dL1saWpxerDk23IbQbZjJXw"

const useVideos = defaultSearchTerm => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    search(defaultSearchTerm)
  }, [defaultSearchTerm])

  const search = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResult: 5,
        key: KEY
      }
    })
    setVideos(response.data.items)
  }
  return [videos, search]
}

export default useVideos

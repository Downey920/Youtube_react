import React, { useEffect, useState, useRef, useCallback } from "react";
import Videos from "./components/VideoList/videos";

const App = props => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCLa7D2kMUdQtWa8wAj2hpWciL1ksrtSA8",
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log("error", error));
  }, []);

  return <Videos videos={videos} />;
};

export default App;

import React, { useEffect, useState, useRef, useCallback } from "react";
import Search from "./components/Search_Header/search";
import Videos from "./components/VideoList/videos";
import styles from "./app.module.css";

const App = props => {
  const [videos, setVideos] = useState([]);

  const search = query => {
    props.youtube
      .search(query) //
      .then(setVideos);
  };

  useEffect(() => {
    props.youtube
      .mostPopular() //
      .then(setVideos);
  }, []);

  return (
    <div className={styles.app}>
      <Search onSearch={search} />
      <Videos videos={videos} />
    </div>
  );
};

export default App;

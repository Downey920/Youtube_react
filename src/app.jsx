import React, { useEffect, useState, useRef, useCallback } from "react";
import Search from "./components/Search_Header/search";
import Videos from "./components/VideoList/videos";
import styles from "./app.module.css";
import VideoDetail from "./components/Video_detail/video_detail";

const App = props => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = video => {
    setSelectedVideo(video);
    window.scrollTo(0, 0);
  };

  const search = useCallback(
    query => {
      props.youtube
        .search(query) //
        .then(videos => {
          setVideos(videos);
          setSelectedVideo(null);
        });
    },
    [props.youtube]
  );

  useEffect(() => {
    props.youtube
      .mostPopular() //
      .then(setVideos);
  }, [props.youtube]);

  return (
    <div className={styles.app}>
      <Search onSearch={search} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <Videos
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
};

export default App;

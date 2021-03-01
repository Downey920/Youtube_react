import React, { useEffect, useState } from "react";
import Video from "../VideoItem/video";
import styles from "./videos.module.css";

const Videos = props => {
  return (
    <ul className={styles.videos}>
      {props.videos.map(video => {
        return <Video key={video.id} video={video} />;
      })}
    </ul>
  );
};

export default Videos;

import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = props => {
  return (
    <section className={styles.detail}>
      <div className={styles.videoPlayer}>
        <iframe
          className={styles.video}
          type="text/html"
          title="youtube video player"
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${props.video.id}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <h2>{props.video.snippet.title}</h2>
      <h3>{props.video.snippet.channelTitle}</h3>
      <pre className={styles.description}>
        {props.video.snippet.description}
      </pre>
    </section>
  );
};

export default VideoDetail;

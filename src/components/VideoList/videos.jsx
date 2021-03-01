import React, { useEffect, useState } from "react";
import Video from "../VideoItem/video";

const Videos = props => {
  return (
    <ul className="videos">
      {props.videos.map(video => {
        return <Video key={video.id} video={video} />;
      })}
    </ul>
  );
};

export default Videos;

import React from "react"
import styles from "./styles.module.css"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className={""}>
    <div className={"row"}>
      <div className={"post-wrapper large-centered"}>
        <iframe
          className={styles["embedded-video-16-9"]}
          src={videoSrcURL}
          title={videoTitle}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
          // width="100%"
        />
      </div>
    </div>
  </div>
)
export default Video
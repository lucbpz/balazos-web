import React from "react"
import { useEffect, useState } from "react"

// Styles
import styles from "./instagram.module.css"

const Instagram = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Your specifications
  const INSTAGRAM_ID = "1371378923"
  const THUMBNAIL_WIDTH = 640
  const PHOTO_COUNT = 24

  useEffect(() => {
    fetch(
      `https://www.instagram.com/graphql/query?query_id=17888483320059182&variables={"id":"${INSTAGRAM_ID}","first":${PHOTO_COUNT},"after":null}`
    )
      .then(response => response.json())
      .then(({ data }) => {
        const photos = data.user.edge_owner_to_timeline_media.edges.map(
          ({ node }) => {
            const { id } = node
            const comments = node.edge_media_to_comment.count
            const likes = node.edge_media_preview_like.count
            const caption = node.edge_media_to_caption.edges[0].node.text
            const thumbnail = node.thumbnail_resources.find(
              thumbnail => thumbnail.config_width === THUMBNAIL_WIDTH
            )
            const {
              src,
              config_width: width,
              config_height: height,
            } = thumbnail
            const url = `https://www.instagram.com/p/${node.shortcode}`
            return {
              id,
              caption,
              src,
              width,
              height,
              url,
              comments,
              likes,
            }
          }
        )
        setPhotos(photos)
        setLoading(false)
      })
  }, [])

  return (
    <div className={styles["post-wrapper"]}>
      {loading === true ? (
        <div style={{ textAlign: "center" }}>
          <h1>Loading ...</h1>
        </div>
      ) : (
        photos.length &&
        photos.map(({ src, url, id, likes, comments, caption }) => (
          <a
            href={url}
            target="_blank"
            className={styles["post-item"]}
            rel="noopener noreferrer"
            key={id}
          >
            <img
              src={src}
              className={styles["post-image"]}
              alt={caption.substring(0, 40)}
            />
            {/*  */}
            <div className={styles["post-item-info"]}>
              <ul>
                <li className={styles["post-item-likes"]}>
                  <span role="img" aria-label="heart">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      fill="white"
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.45",
                      }}
                    >
                      <path d="M12 4.435C10.011-.964 0-.162 0 8.003 0 12.071 3.06 17.484 12 23c8.94-5.516 12-10.929 12-14.997C24-.115 14-.996 12 4.435z"></path>
                    </svg>
                  </span>{" "}
                  {likes !== null ? likes.toLocaleString() : 0}
                </li>
                <li className={styles["post-item-comments"]}>
                  <span role="img" aria-label="speech-balloon">
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      fill="white"
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.45",
                      }}
                    >
                      <path d="M24 9.874C24 4.42 18.627 0 12 0S0 4.42 0 9.874c0 4.512 3.678 8.317 8.701 9.496L12 24l3.299-4.63C20.322 18.19 24 14.385 24 9.874z"></path>
                    </svg>
                  </span>{" "}
                  {comments !== null ? comments.toLocaleString() : 0}
                </li>
              </ul>
            </div>
          </a>
        ))
      )}
    </div>
  )
}

export default Instagram;
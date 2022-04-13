import React from "react"
import Image from "next/image"
import styles from "./background-section.module.css"

const BackgroundSection = ({ src, className, children }) => (
  <div className={styles.wrapper}>
    <div className={styles.bg}>

    </div>
    <div className={styles.fg}>
      {children}
    </div>
  </div>
)

export default BackgroundSection

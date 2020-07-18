import React from "react"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ img, title, styleClass, children }) => {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="text-center text-white font-weight-bold text-uppercase display-4">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}

export default BackgroundSection

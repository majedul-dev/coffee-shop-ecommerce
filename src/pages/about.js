import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"

const about = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <BackgroundSection
        title="about us"
        img={data.img.childImageSharp.fluid}
        styleClass="about-background"
      />
      <Info />
    </Layout>
  )
}
export const query = graphql`
  {
    img: file(relativePath: { eq: "about-bg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default about

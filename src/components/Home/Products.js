import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Product from "./Product"
import Title from "../Globals/Title"

const Products = () => {
  const data = useStaticQuery(graphql`
    {
      products: allContentfulCoffeeProduct {
        edges {
          node {
            id
            title
            price
            image {
              fluid(maxHeight: 426) {
                src
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section className="py-5">
      <div className="container">
        <Title title="our products" />
        <div className="row">
          {data.products.edges.map(({ node: product }) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products

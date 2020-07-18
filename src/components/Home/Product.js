import React from "react"
import Img from "gatsby-image"

const Product = ({ product }) => {
  const { id, title, price, image } = product
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card text-center product-card">
        <Img fluid={image.fluid} />
        <div className="card-body text-center">
          <h5>{title}</h5>
          <h6 className="text-yellow">
            <strong>${price}</strong>
          </h6>
          <button
            className="btn btn-yellow mt-3 text-capitalize snipcart-add-item"
            data-item-id={id}
            data-item-price={price}
            data-item-url="http://localhost:8000/"
            data-item-image={image.fluid.src}
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product

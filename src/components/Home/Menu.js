import React, { useState, useEffect } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"

const Menu = ({ edges }) => {
  const [items, setItems] = useState([])
  const [categories, setCategories] = useState([])

  const getCategories = items => {
    let tempItems = items.map(item => {
      return item.node.category
    })
    let tempCategories = new Set(tempItems)
    let categories = Array.from(tempCategories)
    categories = ["all", ...categories]
    return categories
  }

  useEffect(() => {
    setItems(edges)
    setCategories(getCategories(edges))
  }, [])

  const handleItems = category => {
    let tempItems = [...edges]

    if (category === "all") {
      setItems(tempItems)
    } else {
      let items = tempItems.filter(({ node }) => node.category === category)
      setItems(items)
    }
  }
  if (items.length > 0) {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="best of our menu" />
          {/* categories */}
          <div className="row mb-5">
            <div className="col-10 mx-auto text-center">
              {categories.map((category, index) => (
                <>
                  <button
                    key={index}
                    onClick={() => handleItems(category)}
                    className="btn text-uppercase btn-yellow m-3"
                  >
                    {category}
                  </button>
                </>
              ))}
            </div>
          </div>
          {/* items */}
          <div className="row mb-5">
            {items.map(({ node }) => {
              const {
                id,
                title,
                price,
                image,
                description: { description },
              } = node
              return (
                <div key={id} className="col-11 col-sm-6 my-3 d-flex mx-auto">
                  <div>
                    <Img fixed={image.fixed} />
                  </div>
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">
                        <strong>{title}</strong>
                      </h6>
                      <h6 className="mb-0 text-yellow">
                        <strong>${price}</strong>
                      </h6>
                    </div>
                    <p className="text-muted">
                      <small>{description}</small>
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  } else {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="best of our menu" />
          <div className="row">
            <div className="col-10 col-sm6 mx-auto text-center text-capitalize">
              <h1>there are no items to display</h1>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Menu

import React from "react"
import { Link } from "gatsby"

import Title from "../Globals/Title"

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt est
              eum corporis, velit aperiam vitae in nihil esse, aliquid cum fuga
              voluptatibus necessitatibus nobis nisi porro corrupti aspernatur
              inventore delectus omnis, iste rerum minus error officiis. Aliquid
              modi suscipit doloremque libero labore illum quis nobis repellat,
              officia adipisci eveniet, corporis sint, commodi totam? Possimus
              dolore consequatur vero obcaecati, deleniti vitae.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info

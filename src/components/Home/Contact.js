import React from "react"
import Title from "../Globals/Title"

const Contact = () => {
  return (
    <section className="contact py-5">
      <Title title="contact us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                name="description"
                id="description"
                rows="5"
                className="form-control"
              />
            </div>
            <button className="btn btn-yellow btn-block text-capitalize">
              submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

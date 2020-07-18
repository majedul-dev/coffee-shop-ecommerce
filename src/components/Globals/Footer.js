import React from "react"

const Footer = () => {
  return (
    <div className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 text-yellow text-center text-capitalize">
            <h3>
              all right reserved by majedul &copy;
              {new Date().getFullYear().toString()}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="authentication-area bg-light">
  <div className="container">
    <div className="row min-vh-100 align-items-center">
      <div className="col-12">
        <div className="wrapper shadow-md radius-lg bg-white">
          <div className="row align-items-center">
            <div className="col-lg-6 bg-primary-light">
              <div className="content">
                <div className="logo mb-3 p-30">
                  <Link to="/" target="_self" title="Teeno"><img src="assets/images/logo/logo1.png" alt="Logo" /></Link>
                </div>
                <div className="svg-image">
                  <img className="lazyload" src="/assets/images/login.svg" data-src="/assets/images/login.svg" alt="Image" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="main-form">
                <Link to="/" className="icon-link" title="Go back to home" target="_self"><i className="fal fa-home" /></Link>
                <div className="title">
                  <h3 className="mb-30">Signup to Slotsmart</h3>
                </div>
                <form id="#authForm">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group mb-20">
                        <label htmlFor="userName" className="form-label color-dark">Username Name<span className="color-red">*</span></label>
                        <input type="text" name="user_name" id="userName" className="form-control" placeholder="Username" required />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group mb-20">
                        <label htmlFor="email" className="form-label color-dark">Email<span className="color-red">*</span></label>
                        <input type="email" name="email" id="email" className="form-control" placeholder="Your email address" required />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group mb-20">
                        <label htmlFor="password3" className="form-label color-dark">Password<span className="color-red">*</span></label>
                        <div className="position-relative">
                          <input type="password" name="password" id="password3" className="form-control" placeholder="Enter password" required />
                          <span className="show-password-field">
                            <i className="show-icon" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group mb-20">
                        <label htmlFor="confirmPassword" className="form-label color-dark">Confirm Password<span className="color-red">*</span></label>
                        <div className="position-relative">
                          <input type="password" name="password" id="confirmPassword" className="form-control" placeholder="Confirm password" required />
                          <span className="show-password-field">
                            <i className="show-icon" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="custom-checkbox font-sm">
                        <input className="input-checkbox" type="checkbox" name="checkbox" id="checkbox4" defaultValue />
                        <label className="form-check-label" htmlFor="checkbox4"><span> I agree with Teeno's <a href="terms-conditions.html">Terms &amp; Conditions</a></span></label>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-20">
                    <button className="btn btn-lg btn-primary btn-gradient w-100" type="submit" aria-label="Signup">Signup</button>
                    <div className="link font-sm mt-15">
                      Already a member? <Link to="/login" target="_self" title="Login Now">Login Now</Link> 
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Signup

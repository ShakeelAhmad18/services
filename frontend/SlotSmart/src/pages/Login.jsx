import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
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
                  <img className="lazyload" src="assets/images/login.svg" data-src="assets/images/login.svg" alt="Image" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="main-form">
                <Link to="/" className="icon-link" title="Go back to home" target="_self"><i className="fal fa-home" /></Link>
                <div className="title">
                  <h3 className="mb-30">Login to Slotsmart</h3>
                </div>
                <form id="#authForm">
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group mb-20">
                        <label htmlFor="userName2" className="form-label color-dark">Username Name<span className="color-red">*</span></label>
                        <input type="text" name="user_name" id="userName2" className="form-control" placeholder="Username" required />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group mb-20">
                        <label htmlFor="password" className="form-label color-dark">Password<span className="color-red">*</span></label>
                        <div className="position-relative">
                          <input type="password" name="password" id="password" className="form-control" placeholder="Enter password" required />
                          <span className="show-password-field">
                            <i className="show-icon" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="custom-checkbox mb-10 font-sm">
                        <input className="input-checkbox" type="checkbox" name="checkbox" id="checkbox4" defaultValue />
                        <label className="form-check-label" htmlFor="checkbox4"><span> I agree with Teeno's <a href="terms-conditions.html">Terms &amp; Conditions</a></span></label>
                      </div>
                      <div className="custom-checkbox mb-10 font-sm">
                        <input className="input-checkbox" type="checkbox" name="checkbox" id="checkbox5" defaultValue />
                        <label className="form-check-label" htmlFor="checkbox5"><span>I’d like being informed about latest news and tips</span></label>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-10 mb-15">
                    <button className="btn btn-lg btn-primary btn-gradient w-100" type="submit" aria-label="Login">Login</button>
                  </div>
                  <div className="d-flex justify-content-between flex-wrap gap-2">
                    <div className="link font-sm">
                      <a href="forgot-password.html" title="Forgot Password">Forgot password?</a>
                    </div>
                    <div className="link font-sm">
                      Don't have an account? <Link to="/signup" title="Go Signup" target="_self">Click Here</Link> to Signup
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

export default Login

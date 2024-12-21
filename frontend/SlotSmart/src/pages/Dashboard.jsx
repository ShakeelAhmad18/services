import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Dashboard = () => {

    const handleTop=()=>{
        window.scrollTo(0,0)
    }

  return (
    <div>
     <Navbar/>
  <div className="page-title-area bg-img bg-cover" style={{backgroundColor:'black'}} data-bg-image="assets/images/page-title-bg-1.png">
    <div className="container">
      <div className="content">
        <h2>Dashboard</h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  {/* Page title end*/}
  {/* Dashboard-area start */}
  <div className="user-dashboard pt-100 pb-60">
    <div className="container">
      <div className="row gx-xl-5">
        <div className="col-lg-3">
          <aside className="widget-area mb-40">
            <div className="widget p-25 radius-md">
              <ul className="links">
                <li><Link to="/dashboard" className="active">Dashboard</Link></li>
                <li><a href="order.html">My Orders </a></li>
                <li><a href="wishlist.html">My Wishlist </a></li>
                <li><a href="order-details.html">Orders Details</a></li>
                <li><a href="reset-password.html">Reset Password </a></li>
                <li><a href="profile.html">Edit Profile </a></li>
              </ul>
            </div>
          </aside>
        </div>
        <div className="col-lg-9">
          <div className="user-profile-details mb-30">
            <div className="account-info radius-md">
              <div className="title">
                <h4>Account Information</h4>
              </div>
              <div className="main-info">
                <h6>User</h6>
                <ul className="list">
                  <li><span>Email:</span> <span>user@gmail.com</span></li>
                  <li><span>Phone:</span> <span>34534534534</span></li>
                  <li><span>Fax:</span> <span>34534534534</span></li>
                  <li><span>City:</span> <span>Test City</span></li>
                  <li><span>Zip:</span> <span>3100</span></li>
                  <li><span>Address:</span> <span>Test Address</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card card-box radius-md mb-30 color-1">
                <div className="card-icon mb-15">
                  <i className="fal fa-shopping-bag" />
                </div>
                <div className="card-info">
                  <h3 className="mb-0">120</h3>
                  <p className="mb-0">Total Add Posted</p>
                </div>
                <div className="card-line">
                  <svg className="mw-100" data-src="assets/images/chart-line.svg" data-unique-ids="disabled" data-cache="disabled" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-box radius-md mb-30 color-2">
                <div className="card-icon mb-15">
                  <i className="fal fa-clipboard-list-check" />
                </div>
                <div className="card-info">
                  <h3 className="mb-0">160</h3>
                  <p className="mb-0">Total Add Review</p>
                </div>
                <div className="card-line">
                  <svg className="mw-100" data-src="assets/images/chart-line.svg" data-unique-ids="disabled" data-cache="disabled" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-box radius-md mb-30 color-3">
                <div className="card-icon mb-15">
                  <i className="far fa-users" />
                </div>
                <div className="card-info">
                  <h3 className="mb-0">210</h3>
                  <p className="mb-0">Total Revenue</p>
                </div>
                <div className="card-line">
                  <svg className="mw-100" data-src="assets/images/chart-line.svg" data-unique-ids="disabled" data-cache="disabled" />
                </div>
              </div>
            </div>
          </div>
          <div className="account-info radius-md mb-40">
            <div className="title">
              <h4>Recent Orders</h4>
            </div>
            <div className="main-info">
              <div className="main-table">
                <div className="table-responsiv">
                  <table id="myTable" className="table table-striped w-100">
                    <thead>
                      <tr>
                        <th>Order number</th>
                        <th>Date</th>
                        <th>Total Order Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#mza11</td>
                        <td>2020-04-21</td>
                        <td><span className="reject">Reject</span></td>
                        <td><a href="javaScript:void(0)" className="btn">Details</a></td>
                      </tr>
                      <tr>
                        <td>#mza12</td>
                        <td>2020-04-21</td>
                        <td><span className="complete">Complete</span></td>
                        <td><a href="javaScript:void(0)" className="btn">Details</a></td>
                      </tr>
                      <tr>
                        <td>#mza13</td>
                        <td>2020-04-21</td>
                        <td><span className="pending">Pending</span></td>
                        <td><a href="javaScript:void(0)" className="btn">Details</a></td>
                      </tr>
                      <tr>
                        <td>#mza11</td>
                        <td>2020-04-21</td>
                        <td><span className="reject">Reject</span></td>
                        <td><a href="javaScript:void(0)" className="btn">Details</a></td>
                      </tr>
                      <tr>
                        <td>#mza12</td>
                        <td>2020-04-21</td>
                        <td><span className="complete">Complete</span></td>
                        <td><a href="javaScript:void(0)" className="btn">Details</a></td>
                      </tr>
                      <tr>
                        <td>#mza16</td>
                        <td>2020-04-21</td>
                        <td><span className="pending">Pending</span></td>
                        <td><a href="javaScript:void(0)" className="btn">Details</a></td>
                      </tr>
                      <tr>
                        <td>#mza17</td>
                        <td>2020-04-21</td>
                        <td><span className="pending">Pending</span></td>
                        <td><a href="javaScript:void(0)" className="btn">Details</a></td>
                      </tr>
                      <tr>
                        <td>#mza18</td>
                        <td>2020-04-21</td>
                        <td><span className="pending">Pending</span></td>
                        <td><a href="javaScript:void(0)" className="btn">Details</a></td>
                      </tr>
                      <tr>
                        <td>#mza19</td>
                        <td>2020-04-21</td>
                        <td><span className="pending">Pending</span></td>
                        <td><a href="javaScript:void(0)" className="btn">Details</a></td>
                      </tr>
                      <tr>
                        <td>#mza20</td>
                        <td>2020-04-21</td>
                        <td><span className="pending">Pending</span></td>
                        <td><a href="javaScript:void(0)" className="btn">Details</a></td>
                      </tr>
                      <tr>
                        <td>#mza21</td>
                        <td>2020-04-21</td>
                        <td><span className="pending">Pending</span></td>
                        <td><a href="javaScript:void(0)" className="btn">Details</a></td>
                      </tr>
                      <tr>
                        <td>#mza22</td>
                        <td>2020-04-21</td>
                        <td><span className="pending">Pending</span></td>
                        <td><a href="javaScript:void(0)" className="btn">Details</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Dashboard-area end */}
  {/* Footer-area start */}
  <footer className="footer-area mt-30 bg-primary-light">
    <div className="go-top" onClick={handleTop}><i className="fal fa-long-arrow-up"/></div>
    <div className="footer-top pt-100 pb-70 text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="navbar-brand mt-10">
              <span />
              <a href="index.html" target="_self" title="Link">
                <img src="assets/images/logo/logo1.png" alt="Brand Logo" />
              </a>
              <span />
            </div>
            <ul className="info-list mt-20">
              <li>
                <a href="mailto:live@example.com">live@example.com</a>
              </li>
              <li>
                <a href="tel:9992233555">+999 22 33 5555</a>
              </li>
            </ul>
            <div className="social-link mt-20">
              <a href="https://www.instagram.com/" target="_blank" title="instagram"><i className="fab fa-instagram" /></a>
              <a href="https://www.dribbble.com/" target="_blank" title="dribbble"><i className="fab fa-dribbble" /></a>
              <a href="https://www.twitter.com/" target="_blank" title="twitter"><i className="fab fa-twitter" /></a>
              <a href="https://www.youtube.com/" target="_blank" title="youtube"><i className="fab fa-youtube" /></a>
            </div>
            <div className="newsletter-form mx-auto mt-30">
              <form id="newsletterForm">
                <div className="form-group">
                  <input className="form-control" placeholder="Enter email here..." type="text" name="EMAIL" required autoComplete="off" />
                  <button className="btn btn-md btn-primary btn-gradient no-animation" type="submit">Subscribe</button>
                </div>
              </form>
            </div>
            <ul className="footer-links list-unstyled mt-30">
              <li className="nav-item">
                <a href="index.html" className="nav-link" target="_self" title="link">Home</a>
              </li>
              <li className="nav-item">
                <a href="about-us.html" className="nav-link" target="_self" title="link">About</a>
              </li>
              <li className="nav-item">
                <a href="services.html" className="nav-link" target="_self" title="link">Services</a>
              </li>
              <li className="nav-item">
                <a href="vendors.html" className="nav-link" target="_self" title="link">Shops</a>
              </li>
              <li className="nav-item">
                <a href="contact.html" className="nav-link" target="_self" title="link">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="copy-right-area border-top ptb-30">
      <div className="container">
        <div className="copy-right-content">
          <span>
            Copyright <i className="fal fa-copyright" /><span id="footerDate" /> <a href="index.html" target="_self" title="Bookapp" className="color-primary">Slotsmart</a>. All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  </footer>
  {/* Footer-area end*/}
</div>

  )
}

export default Dashboard

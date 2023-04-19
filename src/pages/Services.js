import React from 'react'
import { NavLink } from 'react-router-dom'
// import './App.css'

const Services = () => {
  return (
    <div>
       <header>
        <nav>
          {/* <div class="logo">
                    <a href="/">
                        <img src="" alt="IdeNavLinkl Softwares" />
                    </a>
                </div> */}
          <ul>
            <li>
              <a href="tel:123-456-7890">CLICK TO CALL</a>
            </li>
            <li>|</li>
            <li>
              <NavLink to="/services">Call For Any Concern</NavLink>
            </li>
          </ul>
          <ul className="middle">
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>|</li>
            <li>
              <NavLink to="/services">Portfolio</NavLink>
            </li>
            <li>|</li>
            <li>
              <NavLink to="/services">Contact Us</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <div className="middle-header">
        <h2>RV Technology</h2>
        <div className="search-tool">
          <form action="" >
            <input type="search" placeholder="Search for tools, Products" style={{ height: 40, width: 300, margin: 10, padding: 10 }} />
            <button className="search-btn" >Search</button>
          </form>
        </div>
           <div className="account">
          <NavLink className="nav-item" to="/loginform"><i class="fa-solid fa-user"></i>
          <h3>Login</h3></NavLink> 
           </div>
        




        </div>

        <section className="header-main">

          <ul>
            <li>
              <div className="drop-btn">Home
                <div className="content">
                  <a href="/">Link 1</a>
                  <a href="/">Link 1</a>
                  <a href="/">Link 1</a>
                </div>
              </div>
              {/* <a href="/">Home</a> */}
            </li>

            <li>
              <div className="drop-btn">Premium Tools
                <div className="content">
                  <a href="/">Link 1</a>
                  <a href="/">Link 1</a>
                  <a href="/">Link 1</a>
                </div>
              </div>
              {/* <a href="/">About</a> */}
            </li>


            <li>
              <div className="drop-btn">Advertising
                <div className="content">
                  <a href="/">Link 1</a>
                  <a href="/">Link 1</a>
                  <a href="/">Link 1</a>
                </div>
              </div>
              {/* <a href="/">Services</a> */}
            </li>

            <li>
              <div className="drop-btn">Services
                <div className="content">
                  <a href="/">Link 1</a>
                  <a href="/">Link 1</a>
                  <a href="/">Link 1</a>
                </div>
              </div>
              {/* <a href="/">Products</a> */}
            </li>


            <li>
              <div className="drop-btn">Web Hosting
                <div className="content">
                  <a href="/">Link 1</a>
                  <a href="/">Link 1</a>
                  <a href="/">Link 1</a>
                </div>
              </div>
              {/* <a href="/">Premium Tools</a> */}
            </li>
            <li>
              <div className="drop-btn">My Products
                <div className="content">
                  <a href="/">Link 1</a>
                  <a href="/">Link 1</a>
                  <a href="/">Link 1</a>
                </div>
              </div>
              {/* <a href="/">Web Hosting</a> */}
            </li>
          </ul>
         
        </section>

      <div className="heading">
        This is service page
      </div>
        

      <footer>
            {/* footer main  */}
            <section class="ft-main">
              <div class="ft-main-item">
                <h2 class="ft-title">About</h2>
                <ul>
                  <li><a href="/">Services</a></li>
                  <li><a href="/">Portfolios</a></li>
                  <li><a href="/">Pricing</a></li>
                  <li><a href="/">Customers</a></li>
                  <li><a href="/">Careers</a></li>
                </ul>
              </div>
              <div class="ft-main-item">
                <h2 class="ft-title">About</h2>
                <ul>
                  <li><a href="/">Services</a></li>
                  <li><a href="/">Portfolios</a></li>
                  <li><a href="/">Pricing</a></li>
                  <li><a href="/">Customers</a></li>
                  <li><a href="/">Careers</a></li>
                </ul>
              </div>

              <div class="ft-main-item">
                <h2 class="ft-title">Contact</h2>
                <ul>
                  <li><a href="/">Help</a></li>
                  <li><a href="/">Sales</a></li>
                  <li><a href="/">Advertise</a></li>
                  <li><a href="/">Advertise</a></li>
                  <li><a href="/">Advertise</a></li>
                </ul>
              </div>
              <div class="ft-main-item">
                <h2 class="ft-title">Stay Updated</h2>
                <p>Subscribe to our newslatter to get our latest news.</p>
                <form>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                  />
                  <button className="btn" type="submit" value="Subscribe" >SUBSCRIBE</button>
                </form>
              </div>
            </section>
            {/* Footer Social  */}
            <section class="ft-social">
              <ul class="ft-social-list">
                <li>
                  <a href="/"><i class="fab fa-facebook"></i></a>
                </li>
                {/* <li>
            <a href="/"><i class="fab fa-Instagram"></i></a>
          </li>
          <li>
            <a href="/"><i class="fab fa-Linkdin"></i></a>
          </li>
          <li>
            <a href="/"><i class="fab fa-Github"></i></a>
          </li> */}
                <li>
                  <a href="/"><i class="fab fa-youtube"></i></a>
                </li>
                <li>
                  <a href="/"><i class="fa-brands fa-square-instagram"></i></a>
                </li>
                <li>
                  <a href="/"><i class="fa-brands fa-github"></i></a>
                </li>
              </ul>
            </section>
            {/* Footer Main */}
            <section class="ft-legal">
              <ul class="ft-legal-list">
                <li><a href="/">Term &amp; Condition</a></li>
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">&copy; 2019 Copyright Nowrap Inc.</a></li>
              </ul>
            </section>
          </footer>
    </div>
  )
}

export default Services

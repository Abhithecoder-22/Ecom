import React from "react";
import img1 from "../images/img.png";
import img2 from "../images/arti.webp"
import img3 from "../images/face.webp"
import img4 from "../images/web.webp"
import img5 from "../images/marvin-meyer-SYTO3xs06fU-unsplash.jpg"
import img6 from "../images/ramon-salinero-vEE00Hx5d0Q-unsplash.jpg"
import img7 from "../images/shahadat-rahman-BfrQnKBulYQ-unsplash.jpg"


// import { NavLink, BrowserRouter as Router,Routes, Route } from 'react-router-dom';
// import LoginForm from '../components/LoginForm'
// import { Routes, Route } from "react-router-dom";
// import LoginForm from './LoginForm';
import ImageSlider, { Slide } from "react-auto-image-slider";
import { NavLink } from "react-router-dom";
// import SimpleImageSlider from "react-simple-image-slider";

// import { Link} from "react-router-dom";
// import LoginForm from "./LoginForm";
// import LoginForm from "./LoginForm";

const Navbar = () => {
  // render() {
  return (
      <>
      <header>
        <nav>
          {/* <div class="logo">
                    <a href="/">
                        <img src="" alt="Ideal Softwares" />
                    </a>
                </div> */}
          <ul>
            <li>
              <a href="tel:123-456-7890">CLICK TO CALL</a>
            </li>
            <li>|</li>
            <li>
              <a href="/">Call For Any Concern</a>
            </li>
          </ul>
          <ul className="middle">
            <li>
              <a href="/">Services</a>
            </li>
            <li>|</li>
            <li>
              <a href="/">Portfolio</a>
            </li>
            <li>|</li>
            <li>
              <a href="/">Contact Us</a>
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
        <main>
          <section class="hero">
            <ImageSlider effectDelay={1000} autoPlayDelay={1000} >
              <Slide>
                <img alt="img2" src={img5}
                 

                />
                <div className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id soluta minima doloribus rerum, magni illo. Neque labore temporibus autem ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt architecto obcaecati minima esse iste! Blanditiis nemo officiis repellendus fugit consectetur eveniet adipisci exercitationem magni velit saepe ipsum quam voluptas placeat illum dolor quaerat sed dolorem nam iusto, aspernatur ducimus natus?</div>
              </Slide>
              <Slide>
                <img alt="img2" src={img6} />
                <div className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id soluta minima doloribus rerum, magni illo. Neque labore temporibus autem ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt architecto obcaecati minima esse iste! Blanditiis nemo officiis repellendus fugit consectetur eveniet adipisci exercitationem magni velit saepe ipsum quam voluptas placeat illum dolor quaerat sed dolorem nam iusto, aspernatur ducimus natus?</div>
              </Slide>
              <Slide>
                <img alt="img1" src={img7} />
                <div className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id soluta minima doloribus rerum, magni illo. Neque labore temporibus autem ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt architecto obcaecati minima esse iste! Blanditiis nemo officiis repellendus fugit consectetur eveniet adipisci exercitationem magni velit saepe ipsum quam voluptas placeat illum dolor quaerat sed dolorem nam iusto, aspernatur ducimus natus?</div>
              </Slide>
            </ImageSlider>
          </section>

          <section className="about">
            <h1>About RVT Technology</h1>
            <div className="about-content">
              <img src={img5} style={{ width: 500, height: 500 }} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis inventore similique exercitationem at adipisci velit consequatur perspiciatis, voluptas officiis? Ipsam atque reprehenderit tempora, enim quisquam suscipit laboriosam minima impedit at. Lorem ipsum, dolor sit amet consectetur adipisicing elit. A sit quasi voluptatum cumque, quas facere saepe? Doloribus perferendis voluptas expedita rerum, quae nihil eaque, debitis laborum cumque sint quasi maxime placeat amet, vitae et error voluptatibus necessitatibus aut! Ea distinctio necessitatibus consectetur, dicta tempora deleniti laboriosam impedit reiciendis rem, quo, mollitia nostrum assumenda saepe excepturi id ullam quisquam a modi esse iste. Asperiores cum, sequi voluptatem aliquid commodi incidunt dolorem quia nisi tenetur magni accusamus delectus, aperiam laboriosam eos quo esse sint rerum quis quae provident. Sapiente quo sit officia, fugiat inventore eos vitae, asperiores nam molestias error amet harum!</p>

            </div>
            <button className="btn">Know More</button>

          </section>

          <section class="services">
            <h2>Our Services</h2>
            <ul>
              <li>
                <img src={img2} alt="Service 1" />
                <h1>Logo Designing & Branding</h1>
                <button className="btn">Know More</button>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sit amet tellus quis nisi euismod suscipit. Aliquam vitae erat
                  justo. Sed euismod urna nec dapibus tincidunt.{" "}
                </p> */}
              </li>
              <li>
                <img src={img5} alt="Service 2" />
                <h1>Web Designing & Developement</h1>
                <button className="btn">Know More</button>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sit amet tellus quis nisi euismod suscipit. Aliquam vitae erat
                  justo. Sed euismod urna nec dapibus tincidunt.{" "}
                </p> */}
              </li>
              <li>
                <img src={img3} alt="Service 3" />
                <h1>Artificial Intelligence</h1>
                <button className="btn">Know More</button>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sit amet tellus quis nisi euismod suscipit. Aliquam vitae erat
                  justo. Sed euismod urna nec dapibus tincidunt.{" "}
                </p> */}
              </li>
              <li>
                <img src={img4} alt="Service 3" />
                <h1>Artificial Intelligence</h1>
                <button className="btn">Know More</button>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sit amet tellus quis nisi euismod suscipit. Aliquam vitae erat
                  justo. Sed euismod urna nec dapibus tincidunt.{" "}
                </p> */}
              </li>
              <li>
                <img src={img2} alt="Service 3" />
                <h1>Artificial Intelligence</h1>
                <button className="btn">Know More</button>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sit amet tellus quis nisi euismod suscipit. Aliquam vitae erat
                  justo. Sed euismod urna nec dapibus tincidunt.{" "}
                </p> */}
              </li>
              <li>
                <img src={img2} alt="Service 3" />
                <h1>Whatsapp Marketing</h1>
                <button className="btn">Know More</button>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sit amet tellus quis nisi euismod suscipit. Aliquam vitae erat
                  justo. Sed euismod urna nec dapibus tincidunt.{" "}
                </p> */}
              </li>
            </ul>
          </section>
          <section className="consultation">
            <h1>Free Consultation</h1>
            <div className="consult-content">

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, vitae et. Iure assumenda, maiores culpa itaque maxime facere placeat modi mollitia dicta deserunt hic provident aliquid explicabo totam in fuga eaque velit, aut corrupti debitis ipsa veritatis! Esse ratione Suscipit, aperiam eligendi deleniti nihil nemo adipisci cum in cumque voluptatum quos praesentium illum, eum rem. Vitae optio non omnis dolores quis ad labore, placeat deserunt nam nulla in deleniti.  laborum, minus magnam eius exercitationem excepturi aspernatur deleniti dolorem nulla consequuntur? Ipsa minima dicta quis, facilis beatae quam! Facere possimus inventore pariatur et minus dolore magni. </p>
              <form action="" className="request">

                <input type="text" id="text" placeholder="Name" style={{ height: 40, margin: 10, padding: 10 }} />
                <input type="text" id="text" placeholder="Company Name" style={{ height: 40, margin: 10, padding: 10 }} />
                <input type="text" id="text" placeholder="Email" style={{ height: 40, margin: 10, padding: 10 }} />
                <input type="text" id="text" placeholder="Contact" style={{ height: 40, margin: 10, padding: 10 }} />
                <input type="text" id="text" placeholder="City" style={{ height: 40, margin: 10, padding: 10 }} />
                <button className="btn">Request Demo</button>
              </form>
            </div>
          </section>
          <section className="contact-us">
            <h1>Let’s start a new project together</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, aliquam.</p>
            <button className="btn">Contact Us</button>
          </section>

          <section class="products">

            <h2>Our Products</h2>
            <ul>
              <li>
                <img src={img1} alt="product 1" />

                <h1>Logo Designing & Branding</h1>
                <div className="product-content">
                  <button className="btn">Know More</button>
                </div>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sit amet tellus quis nisi euismod suscipit. Aliquam vitae erat
                  justo. Sed euismod urna nec dapibus tincidunt.{" "}
                </p> */}
              </li>
              <li>
                <img src={img2} alt="product 2" />
                <h1>Web Designing & Developement</h1>
                <div className="product-content">
                  <button className="btn">Know More</button>
                </div>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sit amet tellus quis nisi euismod suscipit. Aliquam vitae erat
                  justo. Sed euismod urna nec dapibus tincidunt.{" "}
                </p> */}
              </li>
              <li>
                <img src={img3} alt="product 3" />
                <h1>Artificial Intelligence</h1>
                <div className="product-content">
                  <button className="btn">Know More</button>
                </div>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sit amet tellus quis nisi euismod suscipit. Aliquam vitae erat
                  justo. Sed euismod urna nec dapibus tincidunt.{" "}
                </p> */}
              </li>
              <li>
                <img src={img4} alt="product 3" />
                <h1>Artificial Intelligence</h1>
                <div className="product-content">
                  <button className="btn">Know More</button>
                </div>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sit amet tellus quis nisi euismod suscipit. Aliquam vitae erat
                  justo. Sed euismod urna nec dapibus tincidunt.{" "}
                </p> */}
              </li>
              <li>
                <img src={img5} alt="product 3" />
                <h1>Artificial Intelligence</h1>
                <div className="product-content">
                  <button className="btn">Know More</button>
                </div>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sit amet tellus quis nisi euismod suscipit. Aliquam vitae erat
                  justo. Sed euismod urna nec dapibus tincidunt.{" "}
                </p> */}
              </li>
              <li>
                <img src={img6} alt="product 3" />
                <h1>Whatsapp Marketing</h1>
                <div className="product-content">
                  <button className="btn">Know More</button>
                </div>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sit amet tellus quis nisi euismod suscipit. Aliquam vitae erat
                  justo. Sed euismod urna nec dapibus tincidunt.{" "}
                </p> */}
              </li>
            </ul>

          </section>
          <div className="all-btn">
            <button className="btn">Show All Products</button>
          </div>
          {/* <section class="portfolio">
            <h2>Our Portfolio</h2>
            <ul>
              <li>
                <img src={img} alt="Project 1" />
                <h3>Project 1</h3>
              </li>
              <li>
                <img src={img} alt="Project 2" />
                <h3>Project 2</h3>
              </li>
              <li>
                <img src={img} alt="Project 3" />
                <h3>Project 3</h3>
              </li>
            </ul>
          </section> */}


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
        </main>
      </>
      );
  }


      export default Navbar
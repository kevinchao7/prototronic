// "use strict";
import React, {Component} from "react";
import ReactDOM from 'react-dom';
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from 'react-scroll';
import $ from 'jquery';
import { Parallax, Background } from 'react-parallax';

const durationFn = function(deltaTop) {
  return deltaTop;
};
class App extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    // Events.scrollEvent.register('begin', function() {
    //   console.log("begin", arguments);
    // });
    //
    // Events.scrollEvent.register('end', function() {
    //   console.log("end", arguments);
    // });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() => scroller.scrollTo('scroll-container-second-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      containerId: 'scroll-container'
    }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  toggleSideNav = () => {
    var menu = $('.menu-toggle');
    var menuBtn = $('#menuBtn');
    var sideNav = $('#sidebar-wrapper');
    if(menu.hasClass('active')){
      sideNav.removeClass('active');
      menu.removeClass('active');
      menuBtn.addClass('fa-bars');
      menuBtn.removeClass('fa-times');
    }else {
      sideNav.addClass('active');
      menu.addClass('active');
      menuBtn.addClass('fa-times');
      menuBtn.removeClass('fa-bars');
    }
  }

  render() {
    return (

      <div id='main'>

        <a className="menu-toggle rounded" onClick={this.toggleSideNav}>
          <i className="fa fa-bars" id='menuBtn'></i>
        </a>

        <nav id="sidebar-wrapper">
          <ul className="sidebar-nav">
            {/* <li className="sidebar-brand">
              <a className="js-scroll-trigger" href="#page-top">Start Bootstrap</a>
            </li> */}
            <li className="sidebar-nav-item">
              <Link activeClass="active" to="header" spy={true} smooth={true} duration={750}>Home</Link>
            </li>
            <li className="sidebar-nav-item">
              <Link activeClass="active" to="about" spy={true} smooth={true} duration={750}>About</Link>
            </li>
            <li className="sidebar-nav-item">
              <Link activeClass="active" to="services" spy={true} smooth={true} duration={750}>Services</Link>
            </li>
            <li className="sidebar-nav-item">
              <Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={750}>Portfolio</Link>
            </li>
            <li className="sidebar-nav-item">
              <Link activeClass="active" to="contact" spy={true} smooth={true} duration={750}>Contact</Link>
            </li>
          </ul>
        </nav>

        {/*<!-- Header -->*/}
        {/* <header className="masthead d-flex" id='header'>
          <div className="container text-center my-auto">
            <h1 className="mb-1">Stylish Portfolio</h1>
            <h3 className="mb-5">
              <em>A Free Bootstrap Theme by Start Bootstrap</em>
            </h3>
            <Link className="btn btn-primary btn-xl" activeClass="active" to="about" spy={true} smooth={true} duration={750}>Find Out More</Link>
          </div>
          <div className="overlay"></div>
        </header> */}

        <Parallax strength={300} className='homepage'>
          <Background>
            <img className='homeImg' src="img/Background_1080.jpg"/>
          </Background>
          <header className="masthead d-flex" id='header'>
            <div className="container text-center my-auto">
              {/* <h1 className="mb-1 myName">Prototronic Inc.</h1> */}
              {/* <h3 className="mb-5 myTitle">
                <em style={{color:'white'}}>Design and Engineering</em>
              </h3> */}
              {/* <Link className="btn btn-about btn-primary btn-xl" activeClass="active" to="about" spy={true} smooth={true} duration={750} style={{color:'black !important;'}}>Find Out More</Link> */}
            </div>
            <div className="overlay"></div>
          </header>
        </Parallax>

        {/*<!-- Company Background -->*/}
        <section className="content-section bg-light" id="about">
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <img className="img-fluid rounded portfolio-image" src="img/Kevin_13_small.jpg"></img>
                <h2 className='aboutTitle'>Engineer & Developer,</h2>
                <p className="lead mb-5" style={{'text-align':'justify'}}>Kevin holds a bachelors of  science degree in Mechanical Engineering from California State University, Long Beach and a Full Stack Web Development Certificate from University of California, Irvine. He is an active mechanical engineer in the aerospace field. He also designs and builds full stack web applications from scratch with the latest technologies. On his spare time, he enjoys traveling, basketball, and indoor rock climbing.</p>
              </div>
              <div className="col-lg-10 mx-auto">
                <Link className="btn btn-dark btn-xl" style={{clear:'both'}} activeClass="active" to="services" spy={true} smooth={true} duration={750}>What Kevin Offers</Link>
              </div>

            </div>
          </div>
        </section>

        {/*<!-- Services -->*/}
        <section className="content-section bg-services text-white text-center" id="services">
          <div className="container">
            <div className="content-section-heading">
              <h3 className="text-secondary mb-0">Services</h3>
              <h2 className="mb-5">What Kevin Offers</h2>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  <i className="icon-screen-smartphone"></i>
                </span>
                <h4>
                  <strong>Responsive</strong>
                </h4>
                <p className="text-faded mb-0">Mobile responsive applications that looks great on any screen size!</p>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  <i className="icon-layers"></i>
                </span>
                <h4>
                  <strong>Full Stack</strong>
                </h4>
                <p className="text-faded mb-0">MongoDB/Sequelize, Express JS, Node JS, and React JS.</p>
              </div>
              <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  <i className="icon-calculator"></i>
                </span>
                <h4>
                  <strong>Algorithms</strong>
                </h4>
                <p className="text-faded mb-0">Working mechanical engineer. Solves math & physics problems daily.</p>
              </div>
              <div className="col-lg-3 col-md-6">
                <span className="service-icon rounded-circle mx-auto mb-3">
                  <i className="icon-diamond"></i>
                </span>
                <h4>
                  <strong>Polishing & TouchUps</strong>
                </h4>
                <p className="text-faded mb-0">Polishing and touching up existing web applications.</p>
              </div>
            </div>
          </div>
        </section>

        {/*<!-- Callout -->*/}
        {/* <section className="callout">
          <div className="container text-center">
            <h2 className="mx-auto mb-5">Welcome to
              <em>your</em>
              next website!</h2>
            <a className="btn btn-primary btn-xl" href="https://startbootstrap.com/template-overviews/stylish-portfolio/">Download Now!</a>
          </div>
        </section> */}
        {/* <Parallax strength={300}>
          <Background>
            <img src="img/code.jpg" style={{width:'1300px'}}/>
          </Background>
          <section className="callout">
            <div className="container text-center">
              <h2 className="mx-auto mb-5">Welcome to
                <em>your</em>
                next website!</h2>
              <a className="btn btn-primary btn-xl" href="https://startbootstrap.com/template-overviews/stylish-portfolio/">Download Now!</a>
            </div>
          </section>
        </Parallax> */}

        {/*<!-- Portfolio -->*/}
        <section className="content-section" id="portfolio">
          <div className="container">
            <div className="content-section-heading text-center">
              <h3 className="text-secondary mb-0">Portfolio</h3>
              <h2 className="mb-5">Recent Projects</h2>
            </div>
            <div className="row no-gutters">
              <div className="col-lg-6">
                <a className="portfolio-item" target='_blank' href="https://uptobudget.herokuapp.com">
                  <span className="caption">
                    <span className="caption-content">
                      <h2>Up to Budget</h2>
                      <p className="mb-0">A financial budgeting web app that utilizes the 50% fixed cost, 20% financial goals, and 30% flexible spending principle. This app uses sequlize, express, node, react, google oauth, passportjs, and express sessions.</p>
                    </span>
                  </span>
                  <img className="img-fluid" src="img/uptobudget.png" alt=""></img>
                </a>
              </div>
              <div className="col-lg-6">
                <a className="portfolio-item" target='_blank' href="https://kevinchao7.github.io/RPS-Multiplayer/">
                  <span className="caption">
                    <span className="caption-content">
                      <h2>Rock Paper Scissor Multi-Player</h2>
                      <p className="mb-0">A PVP rock paper scissor web application. This app uses materialize css and firebase.</p>
                    </span>
                  </span>
                  <img className="img-fluid" src="img/rps.png" alt=""></img>
                </a>
              </div>
              <div className="col-lg-6">
                <a className="portfolio-item" target='_blank' href="https://kevinchao7.github.io/spaceinvader/">
                  <span className="caption">
                    <span className="caption-content">
                      <h2>Space Invaders Web Game</h2>
                      <p className="mb-0">Space Invaders made with vanilla javascript.</p>
                    </span>
                  </span>
                  <img className="img-fluid" src="img/spaceinvader.png" alt=""></img>
                </a>
              </div>
              <div className="col-lg-6">
                <a className="portfolio-item" target='_blank' href="https://medaman.github.io/dancing-salmon">
                  <span className="caption">
                    <span className="caption-content">
                      <h2>Dancing Salmon</h2>
                      <p className="mb-0">A search music discography web application utilizing discogs API and google firebase!</p>
                    </span>
                  </span>
                  <img className="img-fluid" src="img/dancing-salmon.png" alt=""></img>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Call to Action --> */}
        {/* <section className="content-section bg-primary text-white">
          <div className="container text-center">
            <h2 className="mb-4">The buttons below are impossible to resist...</h2>
            <a href="#" className="btn btn-xl btn-light mr-4">Click Me!</a>
            <a href="#" className="btn btn-xl btn-dark">Look at Me!</a>
          </div>
        </section> */}

        {/* <!-- Map --> */}
        <section id="contact" className="map">
          <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDLDqhu_Ed16sk-7OwNsDCipprgxoMvaY0&q= Downtown+Los Angeles,+CA"></iframe>
          <br/>
        </section>

        {/* <!-- Footer --> */}
        <footer className="footer text-center">
          <div className="container">
            <h5>Connect with Kevin</h5><br></br>
            <ul className="list-inline mb-5">
              <li className="list-inline-item">
                <a className="social-link rounded-circle text-white mr-3" target="_blank" href="https://www.linkedin.com/in/kevin-chao-eit-b98a5592/">
                  <i className="icon-social-linkedin"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="social-link rounded-circle text-white" target="_blank" href="https://github.com/kevinchao7">
                  <i className="icon-social-github"></i>
                </a>
              </li>
              <li className="list-inline-item emailIcon">
                <a className="social-link rounded-circle text-white" href="mailto:kevinchao562@yahoo.com?Subject=Hello%20Kevin!">
                  <i className="icon-speech"></i>
                </a>
              </li>
            </ul>
            <p className="text-muted small mb-0">Copyright &copy; ChaoKevin.com 2017</p>
          </div>
        </footer>


        {/* <!-- Scroll to Top Button--> */}
        <a class="scroll-to-top rounded js-scroll-trigger"  onClick={this.scrollToTop}>
          <i class="fa fa-angle-up"></i>
        </a>

      </div>

    );
  }
}
export default App;

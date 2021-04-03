import style from './App.module.scss';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { HeadProvider } from 'react-head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

library.add(faLinkedinIn, faTwitter, faFacebook, faEnvelope);
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function App() {
  const getDot = () => {
    const dots: JSX.Element[] = [];
    for (let index = 0; index <= 18; index++) {
      dots.push(<span className={classNames(style.dot, 'mr-2')} key={index}></span>);
    }
    return dots;
  }
  return (
    <>
      <HeadProvider>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"></meta>
      </HeadProvider>
      <Navbar id={style['navbar']} expand="lg" variant="light" bg="light">
        <Container id={style['mobile-nav']} className="d-md-none">
          <Row className="w-100">
            <Col></Col>
            <Col className="d-flex justify-content-center">
              <Navbar.Brand href="#">
                <img alt="image" id={style['brand-logo']} src="/Logo.png" />
              </Navbar.Brand>
            </Col>
            <Col className="d-flex justify-content-end">
              <button id={style['nav-button']} className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </Col>
          </Row>
        </Container>
        <Container fluid id={style['desktop-nav']} className="d-none d-md-block">
          <Row className="justify-content-center">
            <Col md="auto">
              <Navbar.Brand href="#">
                <img alt="image" id={style['desktop-brand-logo']} src="/desktop-logo.png" />
              </Navbar.Brand>
            </Col>
            <Col id={style['brand-title']} md="auto" className="d-flex flex-column justify-content-center">
              <h6 id={style['research-professional']} className={classNames('mb-0 font-weight-light')}>Research Professional</h6>
              <h4 id={style['platform']} className={classNames('font-weight-bold')}>Platform</h4>
            </Col>
            <Col md="auto" className="d-flex align-items-center">
              <Nav className="mr-auto">
                <Nav.Link className={classNames(style['nav-item'])} href="#home">Home</Nav.Link>
                <Nav.Link className={classNames(style['nav-item'])} href="#features">About Us</Nav.Link>
                <Nav.Link className={classNames(style['nav-item'])} href="#pricing">Insights</Nav.Link>
                <Nav.Link className={classNames(style['nav-item'])} href="#pricing">Events</Nav.Link>
                <Nav.Link className={classNames(style['nav-item'])} href="#pricing">Contact Us</Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>

      <Container fluid id={style.banner} className="h-75 h-md-50 position-relative">
        <Container className="h-100">
          <Row className="h-75 align-content-center">
            <Col id={style['banner-content']}>
              <h5 id={style.rpp} className={classNames(style.text, 'pt-3 pb-5')}>Research Professional Platform</h5>
              <h5 id={style['acme-wealth']} className={classNames(style.text)}>ACME Wealth</h5>
              <h1 id={style['management-platform']} className={classNames(style.text)}>Management Platforms</h1>
              <div id={style['dot-container']} className={'pb-3'}>
                {getDot()}
              </div>
              <ul id={style.list} className={classNames(style.text)}>
                <li>Investment excellence.</li>
                <li>Diversity of thought.</li>
                <li>Organizational strength.</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <img alt="image" id={style['desktop-background']} className="d-none d-md-block" src="/desktop-background.png" />
      </Container>

      <Container id={style.insights} className="h-75">
        <Row className="h-100 align-content-center">
          <Col>
            <h5 id={style['acme-insights']} className={classNames(style.text)}>
              ACME &nbsp;
              <span className="font-weight-bold">Insights </span>
            </h5>
            <p id={style['acme-insights-sub']} className={classNames(style.text)}>How are factors being used around the world?</p>

            <Swiper
              spaceBetween={300}
              slidesPerView={2}
              pagination={{ clickable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}>
              <SwiperSlide>
                <Container>
                  <Row>
                    <Col className={classNames(style['slider-item'], 'h-100')}>
                      <div className={classNames(style['image-container'], 'my-3 position-relative')}>
                        <div className={classNames(style['triangle'], style['top'], 'position-absolute')}></div>
                        <div className={classNames(style['triangle'], style['bottom'], 'position-absolute')}></div>
                        <img alt="image" src="/img.png" className={classNames(style.image, 'w-100')} />
                      </div>
                      <h5 className={classNames(style.caption)}>Global Factor Investing Study</h5>
                    </Col>
                  </Row>
                </Container>
              </SwiperSlide>
              <SwiperSlide><Container>
                <Row>
                  <Col className={classNames(style['slider-item'], 'h-100')}>
                    <div className={classNames(style['image-container'], 'my-3 position-relative')}>
                      <div className={classNames(style['triangle'], style['top'], 'position-absolute')}></div>
                      <div className={classNames(style['triangle'], style['bottom'], 'position-absolute')}></div>
                      <img alt="image" src="/img.png" className={classNames(style.image, 'w-100')} />
                    </div>
                    <h5 className={classNames(style.caption)}>Global Factor Investing Study</h5>
                  </Col>
                </Row>
              </Container></SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>

      <Container fluid id={style['who-we-are']} className="" style={{ backgroundImage: `url('/fractal.png')` }}>
        <Container>
          <Row className="py-5 text-center">
            <Col>
              <h5 className={classNames(style.text, 'text-center px-5')}>Our Commitment  to Professionals</h5>
              <p className={classNames(style.text, 'text-center')}>
                We help our partners deliver industry leading results with a commitment to excellence, thought-provoking insights and experienced distribution. We are laser focused on our shared goal – helping clients achieve their objectives.
            </p>
              <button id={style['contact-us']} type="button" className={classNames(style.button, style.text, 'btn btn-light')}>Contact Us</button>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container id={style.events} className="py-5">
        <Row>
          <Col>
            <h4 id={style['upcoming-insights']}>
              Upcoming &nbsp;
              <span className="font-weight-bold">Insights </span>
            </h4>
            <p id={style['upcoming-insights-sub']} className={classNames(style.text)}>At ACME, we're dedicated to learning connecting, and exploring opportunities.</p>
            <Swiper
              spaceBetween={300}
              slidesPerView={2}
              pagination={{ clickable: true }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}>
              <SwiperSlide>
                <div className={classNames(style['event-item'], 'py-5 px-3 position-relative')}>
                  <div className={classNames(style['event-when'], 'position-absolute w-100 d-inline-flex')}>
                    <div className={classNames(style.triangle, style.bottom)}></div>
                    <div className={classNames(style.date, 'd-flex flex-column text-center')}>
                      <p className={classNames(style.month, 'font-weight-light')}>Jan</p>
                      <p className={classNames('font-weight-bold')}>28</p>
                    </div>
                  </div>
                  <h4 className={classNames(style.details)}>Insight Exchange Network</h4>
                  <p className={classNames(style.details)}>Join us for this conference showcasing innovation...</p>
                  <button type="button" className={classNames(style.button, style.text, style['view-event-details'], 'btn btn-light')}>View Event Details</button>
                  <div className={classNames(style.location, 'w-100 text-right position-absolute d-inline-flex justify-content-between')}>
                    <div className={classNames(style.triangle, style.top)}></div>
                    <p className="font-weight-bold mr-2 mb-0">Chicago,&nbsp;<span className="font-weight-light">IL</span></p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classNames(style['event-item'], 'py-5 px-3 position-relative')}>
                  <div className={classNames(style['event-when'], 'position-absolute w-100 d-inline-flex')}>
                    <div className={classNames(style.triangle, style.bottom)}></div>
                    <div className={classNames(style.date, 'd-flex flex-column text-center')}>
                      <p className={classNames(style.month, 'font-weight-light')}>Jan</p>
                      <p className={classNames('font-weight-bold')}>28</p>
                    </div>
                  </div>
                  <h4 className={classNames(style.details)}>Insight Exchange Network</h4>
                  <p className={classNames(style.details)}>Join us for this conference showcasing innovation...</p>
                  <button type="button" className={classNames(style.button, style.text, style['view-event-details'], 'btn btn-light')}>View Event Details</button>
                  <div className={classNames(style.location, 'w-100 text-right position-absolute d-inline-flex justify-content-between')}>
                    <div className={classNames(style.triangle, style.top)}></div>
                    <p className="font-weight-bold mr-2 mb-0">Chicago,&nbsp;<span className="font-weight-light">IL</span></p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>

      <Container id={style['mobile-footer']} className="pb-3 d-md-none">
        <Row>
          <Col id={style['footer-brand-logo']} xs={12} className="d-flex justify-content-center mb-3 py-3">
            <img alt="image" src="/footer-logo.png" />
          </Col>
          <Col xs={6}>
            <button type="button" className={classNames(style.button, 'w-100', 'btn btn-primary')}>Privacy Policy</button>
          </Col>
          <Col xs={6}>
            <button type="button" className={classNames(style.button, 'w-100', 'btn btn-primary')}>Terms of Use</button>
          </Col>
          <Col xs={12}>
            <p id={style['site-links']} className={classNames('text-center')}>Site Links</p>
          </Col>
          <Col xs={12}>
            <button type="button" className={classNames(style.button, 'w-100', 'btn btn-primary')}>Home</button>
          </Col>
          <Col xs={12}>
            <button type="button" className={classNames(style.button, 'w-100', 'btn btn-primary')}>About Us</button>
          </Col>
          <Col xs={12}>
            <button type="button" className={classNames(style.button, 'w-100', 'btn btn-primary')}>Insights</button>
          </Col>
          <Col xs={12}>
            <button type="button" className={classNames(style.button, 'w-100', 'btn btn-primary')}>Events</button>
          </Col>
          <Col xs={12}>
            <button type="button" className={classNames(style.button, 'w-100', 'btn btn-primary')}>Due Diligince</button>
          </Col>
          <Col xs={12}>
            <button type="button" className={classNames(style.button, 'w-100', 'btn btn-primary')}>Contact Us</button>
          </Col>
        </Row>
      </Container>

      <Container fluid id={style['desktop-footer']} className="d-none d-md-block">
        <Container className="py-3">
          <Row>
            <Col>
              <h6 className="mb-0">Call us at 111-222-3333</h6>
              <h6>for more information</h6>
            </Col>
            <Col className="d-flex align-items-center justify-content-end">
              <p className="mb-0 mr-2">Social Share</p>
              <FontAwesomeIcon className="mr-2" icon={["fab", "twitter"]} />
              <FontAwesomeIcon className="mr-2" icon={["fab", "facebook"]} />
              <FontAwesomeIcon className="mr-2" icon={["fab", "linkedin-in"]} />
              <FontAwesomeIcon className="mr-2" icon={["far", "envelope"]} />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default App;

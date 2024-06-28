import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Logo from "../assets/img/svg/logo.svg";
import {
  Ellips,
  Langauge,
  Mouse,
  Paragraphs,
  ShopingCart,
} from "../assets/Icon";
import CommonBtn from "../common/CommonBtn";
import HeroImg2 from "../assets/img/png/hero-mobile-img.webp";

const Hero = () => {
  return (
    <>
      <header className="minvh-100 d-sm-flex flex-column justify-content-center header-bg-img position-relative">
        <Navbar expand="lg" className="nav-py-26 nav-border">
          <Container>
            <div className=" d-flex align-items-center gap-12 pointer">
              <img src={Logo} alt="page-logo" />
              <h4 className=" mb-0 clr-yello fw-semibold ff-manrope fs-32 lh-48">
                $CLAIR
              </h4>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  className=" ff-manrope clr-gray navItems fw-medium lh-24"
                  href="#About"
                >
                  About
                </Nav.Link>
                <Nav.Link
                  className=" ff-manrope clr-gray navItems fw-medium lh-24"
                  href="#Tokenomics"
                >
                  Tokenomics
                </Nav.Link>
                <Nav.Link
                  className=" ff-manrope clr-gray navItems fw-medium lh-24"
                  href="#Audit"
                >
                  Audit
                </Nav.Link>
                <Nav.Link
                  className=" ff-manrope clr-gray navItems fw-medium lh-24"
                  href="#Roadmap"
                >
                  Roadmap
                </Nav.Link>
                <Nav.Link
                  className=" ff-manrope clr-gray navItems fw-medium lh-24"
                  href="#WhitePaper"
                >
                  White Paper
                </Nav.Link>
                <NavDropdown title={<Langauge />} id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Spanish
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">
                    English
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/*  */}
        <section className=" flex-sm-grow-1 py-xs-80 pt-50 d-sm-flex align-items-center position-relative">
          <Container className="position-relative">
            <div className="text-center mx-auto max-720">
              <h1 className=" fw-bold fs-60 lh-72 ff-manrope mb-md-3 mb-2 clr-whiteF1">
                Presale is <span className="clr-yello">Live</span>
              </h1>
              <Paragraphs
                clsName="clr-D9 mb-32"
                Content="Led by the most advanced AI technology, with a unique burn
                system to potentially increase its value significantly. Secure
                your chance to become the next millionaire!"
              />
              <CommonBtn name="Buy $Clair" icon={<ShopingCart />} />
            </div>
            <div className=" d-flex justify-content-center mt-md-1 mt-4">
              <img
                src={HeroImg2}
                className=" w-100 hero-img"
                alt="hero-image"
              />
            </div>
            <span className="d-none d-xxl-inline">
              <Mouse />
            </span>
            <Ellips setPositon="header-ellips" />
          </Container>
          <span className="d-xxl-none d-inline">
            <Mouse />
          </span>
        </section>
      </header>
    </>
  );
};

export default Hero;

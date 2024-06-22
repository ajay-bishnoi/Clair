import React from "react";
import { Container, Nav, NavLink } from "react-bootstrap";
import { Ellips, FooterLinks } from "../assets/Icon";
import About from "./About";

const Footer = () => {
  return (
    <div id="WhitePaper" className="footer-layer py-120-71">
      <Container className=" position-relative">
        <div className="text-center max-758 w-100 mx-auto mb-40 ">
          <h1 className=" ff-manrope fw-semibold fs-60 lh-72 clr-yello mb-20">
            $CLAIR
          </h1>
          <p className="clr-gray3 ff-manrope fw-normal fs-16 lh-24 mb-50">
            In this meme-driven world, laughter is not just a reaction; it's a
            powerful tool for chang
            <span className=" d-md-block">
              and Baby Sinclair is wielding it with style. The bad players
              better watch out;
            </span>
            the crypto defender is here, armed with memes and ready to act.
          </p>
          <Nav className=" d-flex align-items-center gap-32 justify-content-md-between justify-content-center">
            <FooterLinks path="about" name="About" />
            <FooterLinks path="Tokenomics" name="Tokenomics" />
            <FooterLinks path="Audit" name="Audit" />
            <FooterLinks path="Roadmap" name="Roadmap" />
            <FooterLinks
              path=" WhitePaper"
              name=" White Paper"
              clsName1="d-none "
              clsName2="d-md-block "
            />
            <FooterLinks
              path="Privacy"
              name="Privacy"
              clsName1="d-none "
              clsName2="d-md-block "
            />
            <FooterLinks
              path="Cookies"
              name="Cookies"
              clsName1="d-none "
              clsName2="d-md-block "
            />
            <FooterLinks
              path="Disclaimer"
              name="Disclaimer"
              clsName1="d-none "
              clsName2="d-md-block "
            />
          </Nav>
          <Nav className=" d-flex d-md-none align-items-center gap-32 justify-content-md-between justify-content-center mt-sm-3 mt-2">
            <FooterLinks path="WhitePaper" name="White Paper" />
            <FooterLinks path="Privacy" name="Privacy" />
            <FooterLinks path="Cookies" name="Cookies" />
            <FooterLinks path="Disclaimer" name="Disclaimer" />
          </Nav>
        </div>
        <div className="FooterBorder d-flex align-items-center justify-content-sm-between justify-content-center flex-wrap">
          <h5 className=" ff-manrope fw-normal fs-16 lh-24 clr-gray3 me-3">
            contact@clairmeme.com
          </h5>
          <h5 className=" ff-manrope fw-normal fs-16 lh-24 clr-gray3 ">
            © 2024 Baby Sinclair All rights reserved
          </h5>
        </div>
        <Ellips setPositon="footer-ellips" />
      </Container>
    </div>
  );
};

export default Footer;

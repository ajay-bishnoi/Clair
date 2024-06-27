import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Protect from "../assets/img/png/Secure.webp";
import ProtectLayer from "../assets/img/png/S.png";
import CommonBtn from "../common/CommonBtn";
import TokenIcon from "../assets/img/svg/slideimg1.svg";
import TokenIcon2 from "../assets/img/svg/slideimg2.svg";
import TokenIcon3 from "../assets/img/svg/slideimg3.svg";
import TokenIcon4 from "../assets/img/svg/slideimg4.svg";
import TokenIcon5 from "../assets/img/svg/slideimg5.svg";
import TokenIcon6 from "../assets/img/svg/slideimg6.svg";
import { Ellips } from "../assets/Icon";

const Secure = () => {
  return (
    <div id="Audit" className="py-160 secureBg">
      <Container className="my-xs-80 position-relative z-3">
        <Row className="pb-83 secureBorder align-items-center flex-column-reverse flex-md-row">
          <Col md={6} className=" d-flex  justify-content-center mt-md-0 mt-5 ">
            <div className=" position-relative">
              <img src={Protect} alt="Secure" className="secure" />
              <img
                src={ProtectLayer}
                alt="protect-layer"
                className="protect-layer "
              />
            </div>
          </Col>
          <Col
            md={6}
            className=" d-flex justify-content-center justify-content-md-start "
          >
            <div className="text-center text-md-start">
              <h5 className=" mb-10 ff-manrope fw-normal fs-20 clr-gray lh-30">
                Rest easy knowing that $CLAIR is
              </h5>
              <h6 className=" mb-10 ff-manrope fw-semibold fs-32 lh-48 clr-yello  ">
                Fully Audited and 100% Secure.
              </h6>
              <h5 className=" mb-32 ff-manrope fw-normal fs-20 clr-gray lh-30">
                Zero Room for Rug Pulls: Invest with Confidence.
              </h5>
              <CommonBtn name="Audit" />
            </div>
          </Col>
        </Row>
        <Row className="mt-sm-5 mt-4 align-items-center">
          <Col
            md={6}
            className=" d-flex justify-content-md-end justify-content-center"
          >
            <div className="max-475 text-center text-md-start">
              <h6 className=" mb-lg-3 mb-2 ff-manrope fw-semibold fs-32 lh-48 clr-whiteF1">
                Listing on <span className="clr-yello"> Major Exchanges</span>
              </h6>
              <p className=" fw-normal fs-20 lh-30 ff-manrope clr-gray mb-0">
                Baby Sinclair’s Team is in action to secure the{" "}
                <span className=" clr-yello">$CLAIR</span> listing on major
                exchanges. Exciting milestones ahead.
              </p>
            </div>
          </Col>
          <Col
            md={6}
            className=" d-flex justify-content-md-end justify-content-center mt-md-0 mt-5"
          >
            <div className="slideBox position-relative w-100">
              <div className="slideContainer h-100 d-flex align-items-start gap-32">
                <div className="slideData d-inline-block">
                  <img src={TokenIcon} alt="Token-Icon" />
                </div>
                <div className="slideData d-inline-block">
                  <img src={TokenIcon2} alt="Token-Icon" />
                </div>
                <div className="slideData d-inline-block">
                  <img src={TokenIcon3} alt="Token-Icon" />
                </div>
                <div className="slideData d-inline-block">
                  <img src={TokenIcon4} alt="Token-Icon" />
                </div>
                <div className="slideData d-inline-block">
                  <img src={TokenIcon5} alt="Token-Icon" />
                </div>
                <div className="slideData d-inline-block">
                  <img src={TokenIcon6} alt="Token-Icon" />
                </div>
              </div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Col>
        </Row>
        <Ellips setPositon="secure-ellips" />
      </Container>
    </div>
  );
};

export default Secure;

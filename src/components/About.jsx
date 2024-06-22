import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CommonBtn from "../common/CommonBtn";
import {
  BNBicon,
  Clockicon,
  ETHERicon,
  Ellips,
  Headings,
  Paragraphs,
  USDCicon,
  USDTicon,
} from "../assets/Icon";
import Faceicon from "../assets/img/svg/cartonFace.svg";
import Dino from "../assets/img/png/dino.webp";

const About = () => {
  const initialTime = { days: 0, hours: 12, minutes: 46, seconds: 19 };
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;
        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(interval);
          return { days, hours, minutes, seconds };
        }

        if (seconds === 0) {
          seconds = 59;
          if (minutes === 0) {
            minutes = 59;
            if (hours === 0) {
              hours = 23;
              if (days > 0) {
                days--;
              }
            } else {
              hours--;
            }
          } else {
            minutes--;
          }
        } else {
          seconds--;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const formatTime = (value) => {
    return value.toString().padStart(2, "0");
  };
  return (
    <div id="AboutData" className="-mt-111 pb-62 position-relative z-3">
      <Container className=" position-relative">
        <div className="Coin-data max-818 w-100 mx-auto mb-100">
          <Row>
            <Col
              lg={5}
              className=" d-flex justify-content-center justify-content-lg-start"
            >
              <div className=" w-100 d-flex flex-column iconCard">
                <div className="mb-3 d-flex gap-28 justify-content-between align-items-center">
                  <div className=" d-flex flex-column">
                    <h5 className="mb-1 fw-normal ff-manrope fs-16 lh-24 clr-gray">
                      1 $Clair
                    </h5>
                    <h4 className="mb-0 fw-bold fs-16 lh-24 clr-yello ff-manrope">
                      0.00387 $
                    </h4>
                  </div>
                  <div className="gradientline"></div>
                  <div className=" d-flex flex-column">
                    <h5 className="mb-1 fw-normal ff-manrope fs-16 lh-24 clr-gray">
                      Raised Amount
                    </h5>
                    <h4 className="mb-0 fw-bold fs-16 lh-24 clr-yello ff-manrope">
                      332,123$
                    </h4>
                  </div>
                </div>
                <div className="mb-32 d-flex align-items-center justify-content-center gap-14">
                  <USDCicon />
                  <USDTicon />
                  <ETHERicon />
                  <BNBicon />
                </div>
                <CommonBtn name="Buy Now" className=" w_100" />
              </div>
            </Col>
            <Col lg={7} className="mt-lg-0 mt-md-5 mt-4">
              <div className=" w-100">
                <div className="mb-18 px-sm-3 d-flex justify-content-between gap-28 align-items-center">
                  <div className=" d-flex flex-column">
                    <h5 className="mb-1 fw-normal ff-manrope fs-16 lh-24 clr-gray">
                      Tokens are Sold
                    </h5>
                    <h4 className="mb-0 fw-bold fs-16 lh-24 clr-yello ff-manrope">
                      98,212,738
                    </h4>
                  </div>
                  <div className=" d-flex flex-column">
                    <h5 className="mb-1 fw-normal ff-manrope fs-16 lh-24 clr-gray">
                      Tokens Remaining
                    </h5>
                    <h4 className="mb-0 fw-bold fs-16 lh-24 clr-whiteF1 ff-manrope">
                      80,212,738
                    </h4>
                  </div>
                </div>
                <div className="mb-06 rangeLine position-relative ">
                  <img src={Faceicon} className=" faceimg" alt="face-icon" />
                </div>
                <p className="mb-3 ff-manrope fw-normal fs-14 lh-21 clr-gray3">
                  Purchase $Clair fast until the price increase.
                </p>
                <div className=" d-flex gap-32 flex-wrap align-items-center justify-content-sm-between justify-content-center">
                  <div className=" d-flex align-items-center gap-10">
                    <Clockicon />
                    <h5 className=" ff-manrope fw-normal fs-16 lh-20 clr-whiteF1 mb-0">
                      Price <span className=" d-lg-block"> increase in</span>
                    </h5>
                  </div>
                  {/* timer */}
                  <div className=" d-flex gap-2 align-items-end">
                    <div className=" d-flex flex-column align-items-center gap-02">
                      <h6 className=" fw-normal ff-manrope fs-14 lh-21 clr-gray3 mb-0">
                        Days
                      </h6>
                      <div className="time day d-flex flex-column align-items-center justify-content-center">
                        <h3 className=" fw-normal ff-manrope fs-24 lh-36 clr-whiteF1 mb-0">
                          {`${formatTime(time.days)}`}
                        </h3>
                      </div>
                    </div>
                    <div className="dot d-flex gap-2 flex-column">
                      <span></span>
                      <span></span>
                    </div>
                    <div className=" d-flex flex-column align-items-center gap-02">
                      <h6 className=" fw-normal ff-manrope fs-14 lh-21 clr-gray3 mb-0">
                        Hours
                      </h6>
                      <div className="time day d-flex flex-column align-items-center justify-content-center">
                        <h3 className=" fw-normal ff-manrope fs-24 lh-36 clr-whiteF1 mb-0">
                          {`${formatTime(time.hours)}`}
                        </h3>
                      </div>
                    </div>
                    <div className="dot d-flex gap-2 flex-column">
                      <span></span>
                      <span></span>
                    </div>
                    <div className=" d-flex flex-column align-items-center gap-02">
                      <h6 className=" fw-normal ff-manrope fs-14 lh-21 clr-gray3 mb-0">
                        Mins
                      </h6>
                      <div className="time day d-flex flex-column align-items-center justify-content-center">
                        <h3 className=" fw-normal ff-manrope fs-24 lh-36 clr-whiteF1 mb-0">
                          {`${formatTime(time.minutes)}`}
                        </h3>
                      </div>
                    </div>
                    <div className="dot d-flex gap-2 flex-column">
                      <span></span>
                      <span></span>
                    </div>
                    <div className=" d-flex flex-column align-items-center gap-02">
                      <h6 className=" fw-normal ff-manrope fs-14 lh-21 clr-gray3 mb-0">
                        Secs
                      </h6>
                      <div className="time day d-flex flex-column align-items-center justify-content-center">
                        <h3 className=" fw-normal ff-manrope fs-24 lh-36 clr-whiteF1 mb-0">
                          {`${formatTime(time.seconds)}`}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div
          id="About"
          className="max-856 mx-auto text-center position-relative z-3"
        >
          <Headings
            clsValue1="clr-whiteF1 mb-3"
            clsValue2="clr-yello"
            Content1=" About"
            Content2="$CLAIR"
          />
          <Paragraphs
            clsName="clr-gray3 mb-12"
            Content=" As you navigate through the avatars, you'll find each one has a
            unique voice, bringing laughter and a touch of sarcasm to the
            otherwise serious discussions in the crypto space."
          />
          <Paragraphs
            clsName="clr-gray3 mb-12"
            Content=" In a landscape where tensions can run high, Baby Sinclair’s memes
            serve as a reminder that, sometimes, the best way to confront
            challenges is with a good laugh."
          />
          <Paragraphs
            clsName=" clr-gray3 mb-32"
            Content=" In this meme-driven world, laughter is not just a reaction; it's a
            powerful tool for change, and Baby Sinclair is wielding it with
            style. The bad players better watch out; the crypto defender is
            here, armed with memes and ready to act"
          />
          <CommonBtn name="Learn More" />
          <img src={Dino} alt="Dino-image" className="dino" />
        </div>
        <Ellips setPositon="about-ellips" />
      </Container>
    </div>
  );
};

export default About;

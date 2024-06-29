import React, { useEffect, useRef, useState } from "react";
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

  //
  const [value, setValue] = useState(55);

  const initialTokensSold = 98212738;
  const initialTokensRemaining = 80212738;
  const initialSliderValue = 50;
  const totalTokens = initialTokensSold + initialTokensRemaining;
  const calculatedTokensSold = Math.round(totalTokens * (value / 100));
  const calculatedTokensRemaining = Math.max(
    totalTokens - calculatedTokensSold,
    0
  );

  return (
    <div id="AboutData" className="pt-66 pb-62 position-relative z-3">
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
                <div className="mb-18 px-3 d-flex justify-content-between gap-28 align-items-center">
                  <div className=" d-flex flex-column">
                    <h5 className="mb-1 fw-normal ff-manrope  fs-16 lh-24 clr-gray ">
                      Tokens are Sold
                    </h5>
                    <h4
                      className={`mb-0 fw-bold fs-16 lh-24  ff-manrope ${
                        value >= 38 ? "clr-yello" : "clr-white"
                      }`}
                    >
                      {calculatedTokensSold.toLocaleString()}
                    </h4>
                  </div>
                  <div className=" d-flex flex-column">
                    <h5 className="mb-1 fw-normal ff-manrope fs-16 lh-24 clr-gray">
                      Tokens Remaining
                    </h5>
                    <h4
                      className={`mb-0 fw-bold fs-16 lh-24  ff-manrope ${
                        value >= 98 ? "clr-yello" : "clr-white"
                      }`}
                    >
                      {calculatedTokensRemaining.toLocaleString()}
                    </h4>
                  </div>
                </div>
                <div className="mb-06 rangeLine position-relative ">
                  <input
                    type="range"
                    aria-label="range-input"
                    className="rangeSlider"
                    min="0"
                    max="100"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <span className="DenoteIcon1">
                    <svg
                      width="42"
                      height="32"
                      viewBox="0 0 42 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M41.5 3.5H42V3H41.5V3.5ZM0.833333 3.5C0.833333 4.97276 2.02724 6.16667 3.5 6.16667C4.97276 6.16667 6.16667 4.97276 6.16667 3.5C6.16667 2.02724 4.97276 0.833333 3.5 0.833333C2.02724 0.833333 0.833333 2.02724 0.833333 3.5ZM42 31.5V3.5H41V31.5H42ZM41.5 3H3.5V4H41.5V3Z"
                        fill={value >= 38 ? "#FEF538" : "white"}
                      />
                    </svg>
                  </span>
                  <span className="DenoteIcon2">
                    <svg
                      width="42"
                      height="32"
                      viewBox="0 0 42 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M41 3.5H41.5V3H41V3.5ZM0.333333 3.5C0.333333 4.97276 1.52724 6.16667 3 6.16667C4.47276 6.16667 5.66667 4.97276 5.66667 3.5C5.66667 2.02724 4.47276 0.833333 3 0.833333C1.52724 0.833333 0.333333 2.02724 0.333333 3.5ZM41.5 31.5V3.5H40.5V31.5H41.5ZM41 3H3V4H41V3Z"
                        fill={value >= 98 ? "#FEF538" : "white"}
                      />
                    </svg>
                  </span>
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
                      <p className=" fw-normal ff-manrope fs-14 lh-21 clr-gray3 mb-0">
                        Days
                      </p>
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
                      <p className=" fw-normal ff-manrope fs-14 lh-21 clr-gray3 mb-0">
                        Hours
                      </p>
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
                      <p
                        className=" fw-normal ff-manrope fs-14 lh-21 clr-gray3 mb-0">
                        Mins
                      </p>
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
                      <p className=" fw-normal ff-manrope fs-14 lh-21 clr-gray3 mb-0">
                        Secs
                      </p>
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

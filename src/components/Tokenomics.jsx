import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TokenGraph from "../assets/img/png/tokenData.webp";
import {
  Claircoin,
  Ellips,
  Headings,
  Paragraphs,
  Plusicon,
  Shibacoin,
  TokenArrow,
} from "../assets/Icon";
import ClairImg from "../assets/img/svg/clair.svg";
const Tokenomics = () => {
  return (
    <div id="Tokenomics" className="pt-124-98 token-bg">
      <Container className=" position-relative">
        <Row className=" justify-content-between align-items-center mb-60">
          <Col md={6} xl={4}>
            <div className="text-center text-md-start d-flex d-md-block flex-column justify-content-center align-items-center">
              <Headings
                clsValue1="clr-whiteF1 mb-lg-4 mb-3"
                Content1="Tokenomics"
              />

              <div className=" d-flex align-items-center justify-content-center justify-content-md-start justify-content-lg-start gap-3 mb-lg-4 mb-sm-3 mb-2">
                <h3 className=" ff-manrope fw-normal fs-24 lh-36 clr-gray mb-0">
                  Baby Sinclair
                </h3>
                <div className="clairBorder">
                  <h3 className=" ff-manrope fw-normal fs-24 lh-36 clr-yello mb-0">
                    $Clair
                  </h3>
                </div>
              </div>
              <div className="mb-32">
                <h6 className=" fw-medium fs-16 lh-24 ff-manrope clr-gray mb-1">
                  Total Tokens
                </h6>
                <h3 className="mb-0 ff-manrope fw-semibold fs-40 lh-48 clr-yello">
                  100,000,000,000
                </h3>
              </div>
              <div className=" d-flex flex-column gap-12">
                <div className=" d-flex align-items-center gap-12">
                  <TokenArrow />
                  <div className=" d-flex align-items-end gap-12">
                    <h4 className=" ff-manrope fw-medium fs-24 lh-36 clr-gray mb-0">
                      1%
                    </h4>
                    <h6 className=" ff-manrope fw-normal fs-16 lh-24 clr-gray mb-0">
                      Presale
                    </h6>
                  </div>
                </div>
                <div className=" d-flex align-items-center gap-12">
                  <TokenArrow />
                  <div className=" d-flex align-items-end gap-12">
                    <h4 className=" ff-manrope fw-medium fs-24 lh-36 clr-gray mb-0">
                      3%
                    </h4>
                    <h6 className=" ff-manrope fw-normal fs-16 lh-24 clr-gray mb-0">
                      Marketing
                    </h6>
                  </div>
                </div>
                <div className=" d-flex align-items-center gap-12">
                  <TokenArrow />
                  <div className=" d-flex align-items-end gap-12">
                    <h4 className=" ff-manrope fw-medium fs-24 lh-36 clr-gray mb-0">
                      5%
                    </h4>
                    <h6 className=" ff-manrope fw-normal fs-16 lh-24 clr-gray mb-0">
                      Team - locked for 24 months
                    </h6>
                  </div>
                </div>
                <div className=" d-flex align-items-center gap-12">
                  <TokenArrow />
                  <div className=" d-flex align-items-end gap-12">
                    <h4 className=" ff-manrope fw-medium fs-24 lh-36 clr-gray mb-0">
                      10%
                    </h4>
                    <h6 className=" ff-manrope fw-normal fs-16 lh-24 clr-gray mb-0">
                      Investors - locked for 24 months
                    </h6>
                  </div>
                </div>
                <div className=" d-flex align-items-center gap-12">
                  <TokenArrow />
                  <div className=" d-flex align-items-end gap-12">
                    <h4 className=" ff-manrope fw-medium fs-24 lh-36 clr-gray mb-0">
                      21%
                    </h4>
                    <h6 className=" ff-manrope fw-normal fs-16 lh-24 clr-gray mb-0">
                      Exchange listings & liquidity
                    </h6>
                  </div>
                </div>
                <div className=" d-flex align-items-center gap-12">
                  <TokenArrow />
                  <div className=" d-flex align-items-end gap-12">
                    <h4 className=" ff-manrope fw-medium fs-24 lh-36 clr-gray mb-0">
                      60%
                    </h4>
                    <h6 className=" ff-manrope fw-normal fs-16 lh-24 clr-gray mb-0">
                      Rewards and burns
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col
            md={6}
            xl={6}
            className=" d-flex justify-content-md-end justify-content-center mt-lg-0 mt-4"
          >
            <img
              src={TokenGraph}
              alt="Token-Graph-Data"
              className=" w-100 graphData"
            />
          </Col>
        </Row>
        <div className=" d-flex flex-md-row flex-column align-items-center justify-content-md-between justify-content-center shibaBoxBorder gap-80">
          <div className=" d-flex align-items-center gap-20">
            <Shibacoin />
            <Plusicon />
            <Claircoin images={<img src={ClairImg} alt="clair-img" />} />
          </div>
          <div className="text-center text-md-start">
            <h4 className=" fw-semibold ff-manrope fs-20 lh-30 clr-whiteF1 mb-10">
              Baby Sinclair Stands Strong with the Shiba Inu Community
            </h4>
            <Paragraphs
              clsName="clr-gray mb-0"
              Content="10% of every $CLAIR token sold post-presale will be dedicated to
              burning SHIB."
            />
          </div>
        </div>
        <Ellips setPositon="contract-ellips" />
        <Ellips setPositon="token-ellips" />
      </Container>
    </div>
  );
};

export default Tokenomics;

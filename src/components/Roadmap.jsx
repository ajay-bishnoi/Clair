import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Ellips, Headings, PhaseCard } from "../assets/Icon";
import { data } from "../assets/Helper";
import CandleChart from "../assets/img/png/candle-chart.webp";

const Roadmap = () => {
  return (
    <div className="roadmap-bg py-71-366 position-relative z-3">
      <Container className=" position-relative">
        <Headings
          clsValue1="clr-whiteF1 text-center mb-101"
          Content1="Roadmap"
        />
        <Row className="h-512 justify-content-center">
          {data.map((phaseData, index) => {
            return (
              <PhaseCard
                key={index}
                headingName={phaseData.title}
                content={phaseData.items}
                clsName={phaseData.style}
              />
            );
          })}
        </Row>
        <Ellips setPositon="roadmap-ellips" />
        <Ellips setPositon="roadmap2-ellips" />
      </Container>
    </div>
  );
};

export default Roadmap;

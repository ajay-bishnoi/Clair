import React from "react";
import { Container } from "react-bootstrap";
import Dino from "../assets/img/png/dino2.webp";
import {
  DiscordIcon,
  Ellips,
  Headings,
  Paragraphs,
  TelegramIcon,
  TwiterIcon,
} from "../assets/Icon";

const Social = () => {
  return (
    <div className="py-124-34 ">
      <Container className=" position-relative z-3">
        <div className=" w-100 mx-auto socialCard text-center ">
          <Headings
            clsValue1="clr-whiteF1 mb-3"
            clsValue2="clr-yello"
            Content1="Our"
            Content2="Socials"
          />
          <Paragraphs
            clsName="clr-gray3 mb-0"
            Content=" Join us on social media for exclusive giveaways and stay connected!"
          />
          <h4 className=" mb-32 clr-yello fw-normal fs-20 lh-30  ff-manrope mt-32">
            “Exciting Releases of 'Bad Players' Avatars Coming Soon: Be Ready
            for the Fun!"
          </h4>
          <div className=" d-flex align-items-center justify-content-center gap-3">
            <DiscordIcon />
            <TwiterIcon />
            <TelegramIcon />
          </div>
        </div>
        <img src={Dino} alt="dino img" className="dino2 w-100" />
        <Ellips setPositon="social-ellips" />
      </Container>
    </div>
  );
};

export default Social;

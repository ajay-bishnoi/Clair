import React, { useState } from "react";
import { Container } from "react-bootstrap";
import CommonBtn from "../common/CommonBtn";
import { Ellips, Headings, Paragraphs } from "../assets/Icon";

const Contract = () => {
  const [inputText, setInputText] = useState(
    "0xFD1929755F73f974648daD00ab491a7C44a00eeD"
  );

  const [buttonText, setButtonText] = useState("Copy");

  const handleCopy = (e) => {
    const inputField = document.getElementById("myInput");
    if (inputField) {
      inputField.select();
      document.execCommand("copy");
      setButtonText("Copied");
      setTimeout(() => {
        alert("Copied successfully!");
        setButtonText("Copy");
      }, 100);
    }
  };

  return (
    <div className="py-168 contract-bg">
      <Container>
        <div className="max-806 mx-auto text-center">
          <div className=" d-flex flex-column align-items-center justify-content-center">
            <Headings
              clsValue1="clr-yello mb-4"
              Content1="$CLAIR"
              clsValue2="clr-whiteF1"
              Content2="$Smart Contract Address"
            />
            <form className=" d-flex justify-content-between align-items-center mb-32">
              <input
                type="text"
                id="myInput"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="inputBox ff-manrope fw-normal fs-16 lh-24 clr-gray w-100"
              />
              <div onClick={handleCopy}>
                <CommonBtn name={buttonText} />
              </div>
            </form>
          </div>
          <Paragraphs
            clsName="clr-gray3 mb-0"
            Content="Built on the Ethereum blockchain and powered by the most advanced AI
            technology, Baby Sinclair has the potential to make millions in both
            early stages and long-term investment. Our strategic burn system,
            which will burn millions of $CLAIR quarterly, aims to increase its
            value significantly. Don't miss out! Get in early and secure your
            chance to become the next millionaire."
          />
        </div>
      </Container>
    </div>
  );
};

export default Contract;

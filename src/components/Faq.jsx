import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { DownArrow, Headings, UpArrow } from "../assets/Icon";

const Faq = () => {
  const [openAccordion, setOpenAccordion] = useState(0);
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  const accordionData = [
    {
      title: "WHAT IS $CLAIR?",
      content: `Built on the Ethereum blockchain and powered by the most
                advanced AI technology, Baby Sinclair has the potential to make
                millions.`,
    },
    {
      title: "Arcu in pellentesque sit odio.",
      content: `Built on the Ethereum blockchain and powered by the most
                advanced AI technology, Baby Sinclair has the potential to make
                millions.`,
    },
    {
      title:
        "Lorem gravida feugiat aliquet arcu porttitor sodales tellus habitant sed.",
      content: `Built on the Ethereum blockchain and powered by the most
                advanced AI technology, Baby Sinclair has the potential to make
                millions.`,
    },
    {
      title: "Metus augue dictumst sit amet.",
      content: `Built on the Ethereum blockchain and powered by the most
                advanced AI technology, Baby Sinclair has the potential to make
                millions.`,
    },
    {
      title: "Elementum viverra tellus tincidunt nunc odio at id ipsum.",
      content: `Built on the Ethereum blockchain and powered by the most
                advanced AI technology, Baby Sinclair has the potential to make
                millions.`,
    },
    {
      title: "Sagittis morbi aliquam facilisis ornare lacus tempus massa.",
      content: `Built on the Ethereum blockchain and powered by the most
                advanced AI technology, Baby Sinclair has the potential to make
                millions.`,
    },
    {
      title: "Elementum at dui varius consequat fringilla.",
      content: `Built on the Ethereum blockchain and powered by the most
                advanced AI technology, Baby Sinclair has the potential to make
                millions.`,
    },
  ];
  return (
    <div className="py-180 faq-bg">
      <Container>
        <Headings
          clsValue1="clr-whiteF1 text-center mb-60"
          clsValue2="clr-yello"
          Content1="Frequently Asked"
          Content2="Questions"
        />
        <div className="accordionContainer d-flex flex-column w-100 mx-auto">
          {accordionData.map((item, index) => {
            return (
              <div key={index} className="accordionItem overflow-hidden">
                <div
                  onClick={() => toggleAccordion(index)}
                  className="accordionHead d-flex align-items-center justify-content-between gap-3 pointer"
                >
                  <h6
                    className={`mb-0 ${
                      openAccordion === index ? "fw-semibold" : "fw-normal"
                    } ff-manrope fs-16 lh-24 clr-gray `}
                  >
                    {item.title}
                  </h6>
                  <span>
                    {openAccordion === index ? <UpArrow /> : <DownArrow />}
                  </span>
                </div>
                <div
                  className={`accordionBody w-100 ${
                    openAccordion === index ? "active" : " "
                  }`}
                >
                  <p className="mb-0 fw-normal ff-manrope fs-16 lh-24 clr-gray3">
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Faq;

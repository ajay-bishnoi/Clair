import React from "react";
import { Button } from "react-bootstrap";

const CommonBtn = ({ name, icon }) => {
  return (
    <>
      <Button className="fw-bold fs-16 lh-24 ff-manrope clr-black comonbtn ">
        {name}
       {icon}
      </Button>
    </>
  );
};

export default CommonBtn;

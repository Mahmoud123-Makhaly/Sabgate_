"use client";
import React, { useState } from "react";
import ToolBar from "./toolbar/ToolBar";
import NavBar from "./navbar/NavBar";
import { Container } from "reactstrap";
import InfoBar from "./info-bar/InfoBar";

const Header = () => {
  const [canvasToggler, setCanvasToggler] = useState(false);
  const offCanvasToggler = () => {
    setCanvasToggler(!canvasToggler);
  };
  return (
    <div className="flex-column">
      <div className="bg-heading d-none d-lg-block">
        <Container>
          <InfoBar />
        </Container>
      </div>

      <div className="border-bottom">
        <Container>
          <ToolBar offcanvasToggeler={offCanvasToggler} />
        </Container>
      </div>
      <div className="border-bottom d-lg-block d-none">
        <Container>
          <NavBar
            offCanvasToggler={offCanvasToggler}
            canvasToggler={canvasToggler}
          />
        </Container>
      </div>
    </div>
  );
};

export default Header;

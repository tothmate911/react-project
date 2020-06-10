import React from "react";
import logo from "./logo.svg";
import Navigation from "./Navigation";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  background-color: white;
  display: flex;
  height: 120px;
  width: 100%;
  align-items: right;
  justify-content: right;
  color: white;
`;

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  align-self: left;
  margin-left: 30px;
`;

const Logo = styled.img`
  height: 120px;
  margin-bottom: 20px;
  pointer-events: none;
`;

function Header() {
  return (
    <div className="Header">
      <HeaderContainer>
        <LogoContainer>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
        </LogoContainer>
        <Navigation />
      </HeaderContainer>
    </div>
  );
}

export default Header;

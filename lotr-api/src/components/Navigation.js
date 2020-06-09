import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
  z-index: 1;
  & a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  & a:hover {
    background-color: #ddd;
  }
`;

const Button = styled.div`
  position: relative;
  display: inline-block;
  background-color: #2f4f4f;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  &:hover {
    background-color: #253f3f;
  }
  &:hover ${DropdownContent} {
    display: block;
  }
`;

export default function Navigation() {
  return (
    <div>
      <Router>
        <Button>
          <span>Books</span>
          <DropdownContent>
            <Route path="/">
              <Link to="/">Dropdown here</Link>
              <Link to="/">Dropdown here</Link>
            </Route>
          </DropdownContent>
        </Button>
        <Button>
          <span>Movies</span>
          <DropdownContent>
            <Route path="/">
              <Link to="/">Dropdown here</Link>
            </Route>
          </DropdownContent>
        </Button>
        <Button>
          <span>Characters</span>
          <Route></Route>
        </Button>
      </Router>
    </div>
  );
}

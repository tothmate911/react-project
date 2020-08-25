import React, { useRef } from "react";
import styled from "styled-components";
import trailer from "./trailer.mp4";

const Background = styled.div`
  background-color: black;
  position: fixed;
  top: 120px;
  left: 0;
  min-width: 100%;
  min-height: 100%;
`;

const Video = styled.video`
  position: fixed;
  right: 0;
  top: 120;
  min-width: 100%;
  box-sizing: border-box;
`;

const Content = styled.div`
  position: fixed;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

function MainPage() {
  const vidRef = useRef(null);

  return (
    <React.Fragment>
      <Background>
        <Video id={vidRef} autoPlay muted loop>
          <source src={trailer} type="video/mp4" />
        </Video>
        <Content>
          <h1>Lord of the Rings Trilogy</h1>
          <p>
            The future of civilization rests in the fate of the One Ring, which
            has been lost for centuries. Powerful forces are unrelenting in
            their search for it.
          </p>
          <p>
            But fate has placed it in the hands of a young Hobbit named Frodo
            Baggins, who inherits the Ring and steps into legend. A daunting
            task lies ahead for Frodo and his fellowship when he becomes the
            Ringbearer - to destroy the One Ring in the fires of Mount Doom
            where it was forged.
          </p>
        </Content>
      </Background>
    </React.Fragment>
  );
}

export default MainPage;

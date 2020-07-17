import React from "react";
import styled from "styled-components";
import Encoder from "./app/Encoder";

const Skin = styled.div`
  font-family: sans-serif;
`;

const App = () => (
  <Skin>
    <h1>WeirdText</h1>
    <Encoder />

    <h2>Decoder</h2>
    <h3>Input</h3>
    <h4>Text to decode</h4>
    <textarea rows="5" />

    <h4>List of the original words that got encoded</h4>
    <div>
      <input type="text" />
    </div>

    <h3>Output</h3>
    <h4>Decoded text</h4>
    <div>Here the text.</div>
  </Skin>
);

export default App;

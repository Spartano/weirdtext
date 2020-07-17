import React from "react";
import { useState } from "react";
import styled from "styled-components";

import TextArea from "../components/TextArea";
import encode from "../util/encode";

const Box = styled.div`
  margin-left: 8px;
`;

const Encoder = () => {
  const [inputValue, setInputValue] = useState(
    "This is a long looong test sentence, with some big (biiiiig) words!"
  );

  const { message, encodedWords } = encode(inputValue);
  return (
    <div className=".encoder">
      <h2>Encoder</h2>
      <h3>Input</h3>
      <h4>Text to encode</h4>
      <TextArea value={inputValue} setValue={setInputValue} />

      <h3>Output</h3>
      <h4>{message}</h4>

      <h4>List of the original words that got encoded</h4>

      <div style={{ display: "flex" }}>
        {encodedWords.map(word => (
          <Box>{word}</Box>
        ))}
      </div>
    </div>
  );
};

export default Encoder;

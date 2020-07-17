import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import App from "./App";

const Skin = styled.div`
  font-family: sans-serif;
`;

// export const App = () => {
//   return (
//     <Skin>
//       <h1>WeirdText</h1>
//       <h2>Encoder</h2>
//       <h3>Input</h3>
//       <h4>Text to encode</h4>
//       <textarea rows="5" />

//       <h3>Output</h3>
//       <h4>Encoded text</h4>
//       <div>Here the text.</div>

//       <h4>List of the original words that got encoded</h4>
//       <div>Here the list.</div>

//       <h2>Decoder</h2>
//       <h3>Input</h3>
//       <h4>Text to decode</h4>
//       <textarea rows="5" />

//       <h4>List of the original words that got encoded</h4>
//       <div>
//         <input type="text" />
//       </div>

//       <h3>Output</h3>
//       <h4>Decoded text</h4>
//       <div>Here the text.</div>
//     </Skin>
//   );
// };

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);

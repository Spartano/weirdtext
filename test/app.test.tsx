import React from "react";
import App from "../src/App";

import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("Smoke", () => {
  it("shallow renders", () => {
    shallow(<App />);
  });

  it("mounts", () => {
    mount(<App />);
  });
});

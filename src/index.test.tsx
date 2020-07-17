import React from "react";
import { Encoder } from "./Encoder";

import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("Greeting", () => {
  it("renders without crashing", () => {
    const wrapper = mount(<Encoder />);
    expect(wrapper.find(".hello").text()).toBe("Hello");
  });
});

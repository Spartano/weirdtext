import React from "react";
import TextArea from "../src/components/TextArea";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

const TEST_PROPS = {
  setValue: jest.fn(),
  value: "this is me"
};

describe("Text Area Component", () => {
  it("shallow renders", () => {
    shallow(<TextArea {...TEST_PROPS} />);
  });

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TextArea {...TEST_PROPS} />);
  });

  it("should have proper props for textarea ", () => {
    expect(wrapper.props()).toEqual({
      onChange: expect.any(Function),
      rows: 5,
      value: "this is me"
    });
  });

  it("should call the change function on user input ", () => {
    const event = { target: { value: "sometext" } };

    expect(wrapper.find("textarea").simulate("change", event));
    expect(TEST_PROPS.setValue).toHaveBeenCalledTimes(1);
    expect(TEST_PROPS.setValue).toHaveBeenLastCalledWith(event.target.value);
  });
});

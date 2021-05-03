import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import Header from "./Header";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<Header />);

test("render component without error", () => {
  const wrapper = setup();
  const header = wrapper.find("[data-test='header']");
  expect(header.length).toBe(1);
});

test("check for header name", () => {
  const wrapper = setup();
  const header = wrapper.find("[data-test='header-text']");
  expect(header.text()).toBe("Imaginary");
});

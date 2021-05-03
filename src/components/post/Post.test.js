import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";

import Post from "./Post";

Enzyme.configure({ adapter: new EnzymeAdapter() });

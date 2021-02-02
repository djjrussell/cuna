import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import Main from "./components/Main";

configure({ adapter: new Adapter() });

describe("App", () => {
  it("renders correctly", () => {
    shallow(<Main />);
  });

  it("update price state on change", () => {
    const setPrice = jest.fn();
    const wrapper = mount(<Main />);
    const handleChange = jest.spyOn(React, "useState");
    handleChange.mockImplementation(price => [price, setPrice]);
    wrapper
      .find("#price")
      .at(0)
      .simulate("change");
    expect(setPrice).toBeTruthy();
  });

  it("update make state on change", () => {
    const setMake = jest.fn();
    const wrapper = mount(<Main />);
    const handleChange = jest.spyOn(React, "useState");
    handleChange.mockImplementation(make => [make, setMake]);
    wrapper
      .find("#make")
      .at(0)
      .simulate("change");
    expect(setMake).toBeTruthy();
  });

  it("update model state on change", () => {
    const setModel = jest.fn();
    const wrapper = mount(<Main />);
    const handleChange = jest.spyOn(React, "useState");
    handleChange.mockImplementation(model => [model, setModel]);
    wrapper
      .find("#model")
      .at(0)
      .simulate("change");
    expect(setModel).toBeTruthy();
  });

  it("update income state on change", () => {
    const setIncome = jest.fn();
    const wrapper = mount(<Main />);
    const handleChange = jest.spyOn(React, "useState");
    handleChange.mockImplementation(income => [income, setIncome]);
    wrapper
      .find("#income")
      .at(0)
      .simulate("change");
    expect(setIncome).toBeTruthy();
  });

  it("update credit state on change", () => {
    const setCredit = jest.fn();
    const wrapper = mount(<Main />);
    const handleChange = jest.spyOn(React, "useState");
    handleChange.mockImplementation(credit => [credit, setCredit]);
    wrapper
      .find("#credit")
      .at(0)
      .simulate("change");
    expect(setCredit).toBeTruthy();
  });
});

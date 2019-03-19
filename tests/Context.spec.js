import React from "react";
import renderer from "react-test-renderer";
import Context from "../src/Context";

it("Context renders without crashing.", () => {
  const component = renderer.create(
    <Context.Provider>
      <Context.Consumer>
        {context => {
          JSON.stringify(context);
        }}
      </Context.Consumer>
    </Context.Provider>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

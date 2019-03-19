import React from "react";
import renderer from "react-test-renderer";
import Context from "../src/Context";
import Row from "../src/Row";

it("Row renders without crashing.", () => {
  const component = renderer.create(<Row gutters={24}>Row Content</Row>);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("Row with context renders without crashing.", () => {
  const component = renderer.create(
    <Context.Provider>
      <Context.Consumer>
        {({ gutters }) => <Row gutters={gutters}>Row Content</Row>}
      </Context.Consumer>
    </Context.Provider>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

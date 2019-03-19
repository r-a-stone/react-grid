import React from "react";
import renderer from "react-test-renderer";
import Column from "../src/Column";
import Context from "../src/Context";

beforeEach(() => {
  jest.resetModules();
});

test("Column renders without crashing.", () => {
  const component = renderer.create(
    <Column
      columns={12}
      gutters={24}
      breakpoints={[
        {
          name: "xs",
          minWidth: 0
        },
        {
          name: "sm",
          minWidth: 480
        },
        {
          name: "md",
          minWidth: 768
        },
        {
          name: "lg",
          minWidth: 1024
        }
      ]}
    >
      Content
    </Column>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Column with context renders without crashing.", () => {
  const component = renderer.create(
    <Context.Provider>
      <Context.Consumer>
        {({ breakpoints, columns, gutters }) => (
          <Column breakpoints={breakpoints} columns={columns} gutters={gutters}>
            Content
          </Column>
        )}
      </Context.Consumer>
    </Context.Provider>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

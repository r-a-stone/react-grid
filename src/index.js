import React from "react";
import Context from "./Context";
import RowComponent from "./Row";
import ColumnComponent from "./Column";

export const GridProvider = Context.Provider;

export const GridConsumer = Context.Consumer;

export const Column = ({ children, ...props }) => (
  <GridConsumer>
    {({ breakpoints, columns, gutters }) => (
      <ColumnComponent
        {...props}
        breakpoints={breakpoints}
        columns={columns}
        gutters={gutters}
      >
        {children}
      </ColumnComponent>
    )}
  </GridConsumer>
);

export const Row = ({ children, ...props }) => (
  <GridConsumer>
    {({ gutters }) => (
      <RowComponent {...props} gutters={gutters}>
        {children}
      </RowComponent>
    )}
  </GridConsumer>
);

export default {
  Row,
  Column
};

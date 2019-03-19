import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

const Context = createContext();

const propTypes = {
  columns: PropTypes.number,
  gutters: PropTypes.number,
  breakpoints: PropTypes.array
};

const defaultProps = {
  columns: 12,
  gutters: 24,
  breakpoints: [
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
  ]
};

const GridProvider = ({ children, ...props }) => {
  const [columns, setColumns] = useState(props.columns);
  const [gutters, setGutters] = useState(props.gutters);
  const [breakpoints, setBreakpoints] = useState(props.breakpoints);

  return (
    <Context.Provider
      value={{
        columns,
        gutters,
        breakpoints,

        setColumns,
        setGutters,
        setBreakpoints
      }}
    >
      {children}
    </Context.Provider>
  );
};

GridProvider.propTypes = propTypes;
GridProvider.defaultProps = defaultProps;

export default {
  Provider: GridProvider,
  Consumer: Context.Consumer
};

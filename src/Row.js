import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const propTypes = {
  flexDirection: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse"
  ]),
  flexWrap: PropTypes.oneOf(["wrap-reverse", "wrap", "nowrap"]),
  justifyContent: PropTypes.oneOf([
    "flex-start",
    "center",
    "flex-end",
    "space-between",
    "stretch",
    "normal"
  ]),
  alignItems: PropTypes.oneOf([
    "flex-start",
    "center",
    "flex-end",
    "baseline",
    "stretch",
    "normal"
  ]),
  alignContent: PropTypes.oneOf([
    "flex-start",
    "center",
    "flex-end",
    "baseline",
    "stretch",
    "normal"
  ])
};

const defaultProps = {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "normal",
  alignItems: "normal",
  alignContent: "normal"
};

export const StyledRow = styled("div")`
  box-sizing: border-box;
  &:before,
  &:after {
    box-sizing: border-box;
  }

  margin-right: ${props => `${props.theme.gutters / 2 / 16}rem`};
  margin-left: ${props => `${props.theme.gutters / 2 / 16}rem`};

  display: flex;
  flex-direction: ${props => props.flexDirection};
  flex-wrap: ${props => props.flexWrap};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  align-content: ${props => props.alignContent};
`;

const Row = ({
  children,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
  gutters,
  ...props
}) => {
  return (
    <StyledRow
      {...props}
      theme={{
        gutters,
        flexDirection,
        flexWrap,
        justifyContent,
        alignItems,
        alignContent
      }}
    >
      {children}
    </StyledRow>
  );
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;

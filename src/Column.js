import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { StyledRow } from "./Row";

const propTypes = {
  shape: PropTypes.object,
  order: PropTypes.object
};

const defaultProps = {
  shape: {
    xs: 12
  },
  order: {
    xs: 1
  }
};

const StyledColumn = styled("div")`
  box-sizing: border-box;
  &:before,
  &:after {
    box-sizing: border-box;
  }

  padding-right: ${props => `${props.theme.gutters / 2 / 16}rem`};
  padding-left: ${props => `${props.theme.gutters / 2 / 16}rem`};

  ${StyledRow} {
    margin-right: ${props => `${props.theme.gutters / -2 / 16}rem`};
    margin-left: ${props => `${props.theme.gutters / -2 / 16}rem`};
  }

  flex-basis: 100%;
  flex-grow: 0;
  flex-shrink: 1;

  ${props => {
    const { shape, order, breakpoints, columns } = props.theme;
    return breakpoints.reduce((mediaQueries, breakpoint) => {
      const { name, minWidth } = breakpoint;
      if (shape[name] !== undefined || order[name] !== undefined) {
        mediaQueries = `${mediaQueries}
            @media (min-width: ${minWidth / 16}em) {
                ${
                  shape[name] !== undefined
                    ? `flex-basis: ${(shape[name] * 100) / columns}%;`
                    : ""
                }
                ${order[name] !== undefined ? `order: ${order[name]};` : ""}
            }
        `;
      }
      return mediaQueries;
    }, "");
  }}
`;

const Column = ({
  children,
  shape,
  order,
  breakpoints,
  columns,
  gutters,
  ...props
}) => {
  return (
    <StyledColumn
      {...props}
      theme={{ shape, order, breakpoints, columns, gutters }}
    >
      {children}
    </StyledColumn>
  );
};

Column.propTypes = propTypes;
Column.defaultProps = defaultProps;

export default Column;

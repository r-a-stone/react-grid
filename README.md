# React Grid

## Example usage

```javascript
import React from "react";
import { GridProvider, Row, Column } from "@webcode.io/react-grid";

const App = () => (
  <GridProvider
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
    <header>
      <Row>
        <Column>Header</Column>
      </Row>
    </header>
    <main>
      <Row>
        <Column shape={{ xs: 12, md: 9 }} order={{ xs: 2, md: 1 }}>
          Content
        </Column>
        <Column shape={{ xs: 12, md: 3 }} order={{ xs: 1, md: 2 }}>
          Sidebar
        </Column>
      </Row>
    </main>
    <footer>
      <Row>
        <Column>Footer</Column>
        <Column>
          <Row>
            <Column>Nested Grid</Column>
          </Row>
        </Column>
      </Row>
    </footer>
  </GridProvider>
);
```

## Context Properties

| Property    | Default                                                                                                                     |
| ----------- | --------------------------------------------------------------------------------------------------------------------------- |
| column      | 12                                                                                                                          |
| gutters     | 24                                                                                                                          |
| breakPoints | [{ name: "xs", minWidth: 0 }, { name: "sm", minWidth: 480 }, { name: "md", minWidth: 768 }, { name: "lg", minWidth: 1024 }] |

## Row Properties

| Property       | Default |
| -------------- | ------- |
| flexDirection  | row     |
| flexWrap       | wrap    |
| justifyContent | normal  |
| alignItems     | normal  |
| alignContent   | normal  |

## Column Properties

| Property | Default    |
| -------- | ---------- |
| shape    | { xs: 12 } |
| order    | { xs: 1 }  |

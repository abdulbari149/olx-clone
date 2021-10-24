import React, { Fragment } from "react";
import { render } from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
const index = (
  <Fragment>
    <ChakraProvider>
        <App />
    </ChakraProvider>
  </Fragment>
);
render(index, document.getElementById("root"));

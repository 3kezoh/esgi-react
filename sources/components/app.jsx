import React from "react";
import Container from "./Container";
import JSONPlaceholder from "./JSONPlaceholder";

/**
 * @description Displays the application.
 * @returns {React.ReactElement} The component.
 */
function App() {
  return (
    <Container>
      <JSONPlaceholder />
    </Container>
  );
}

export default App;

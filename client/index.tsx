import React from "react";
import ReactDOM from "react-dom";
import { Flex } from "ui-lib";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>UI-Library</div>
      <div>
        <Flex />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

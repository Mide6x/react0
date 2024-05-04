import "./App.css";
import React from "react";

const welcome = {
  greeting: "you",
  user: "are welcome",
};

function App() {
  return (
    <div className="App">
      <h1>
        Hello, {welcome.greeting} {welcome.user}
      </h1>
    </div>
  );
}

export default App;

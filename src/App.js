import "./App.css";
import { useState, Component } from "react";

class Welcome extends Component {
  // object is created with props, that are parsed from '... name="..." ...' tag properties into a { name: "...", ... } object
  // props are immutable
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

function App() {
  // always start component names with a capital letter, React treats lowercases as DOM tags
  return (
    <div className="App">
      <Welcome name="Josef" />
      <Welcome name="Pepa" />
    </div>
  );
}

export default App;

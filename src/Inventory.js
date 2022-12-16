import "./App.css";
import { useState, Component } from "react";
import { render } from "@testing-library/react";

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}


function InventoryList(){
    return <div>
        <ul>
            
        </ul>
    </div>
}


function EditForm() {
    // const [name, setName] = useState('');
    // const [location, setLocation] = useState('');

    return <form>
        <input id="name" ></input>
        <input id="location"></input>
    </form>
}

function Page(){
    render(){
        <div>
            <InventoryList />
            <EditForm />
        </div>
    }
}

export default function App() {
  // always start component names with a capital letter, React treats lowercases as DOM tags
  return (
    <div className="App">
      <Welcome name="Josef" />
      <Welcome name="Pepa" />
    </div>
  );
}

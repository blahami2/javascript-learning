// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function MyButton() {
  const name = "HappyButton";
  const [count, setCount] = useState(0); // useState function returns 2 things: current state (count) and update function (setCount); [x,setX] is only a naming convention; 0 is default state as passed in useState(0)

  function handleClick() {
    // alert("You clicked me " + (count + 1) + " times!");
    setCount(count + 1);
  }

  // handleClick() would call the function and the outcome would be 'onClick={<result>}'. Usage without () passes the function itself
  return (
    <button onClick={handleClick}>
      I'm a {name}, clicked {count} times
    </button>
  );
}

// data passed as props
function ClickedButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}

function MultiClickContainer() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update separately</h1>
      <ClickedButton count={count} onClick={handleClick} />
      <ClickedButton count={count} onClick={handleClick} />
    </div>
  );
}

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

// notice the "key=", list elements should always have a key unique in the given list, react identifies rows with that key; DB ID is often used
const listItems = products.map((product) => (
  <li key={product.id}>{product.title}</li>
));

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <p>Welcome to my app</p>
      </header> */}
      <MyButton />
      <Profile />
      <ul>{listItems}</ul>
      <MultiClickContainer />
    </div>
  );
}

export default App;

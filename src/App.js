// import logo from "./logo.svg";
import "./App.css";

function MyButton() {
  const name = "HappyButton";

  function handleClick() {
    alert("You clicked me!");
  }

  // handleClick() would call the function and the outcome would be 'onClick={<result>}'. Usage without () passes the function itself
  return <button onClick={handleClick}>I'm a {name}</button>;
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
    </div>
  );
}

export default App;

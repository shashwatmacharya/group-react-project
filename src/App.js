import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Button  text="Sign In" type="button"/>
        <Button text="Register" type="button" />
        <Button text="Create" type="button" />
        <Button text="Request demo" type="button"/>

      </header>
    </div>
  );
}

export default App;

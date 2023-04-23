import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Button  text="Sign In" type={SubmitEvent}/>
        <Button text="Register" type={SubmitEvent} />
        <Button text="Create" type={SubmitEvent} />
        <Button text="Request demo" type={SubmitEvent}/>

      </header>
    </div>
  );
}

export default App;

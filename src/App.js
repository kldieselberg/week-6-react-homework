import "./App.css";
import Weather from "./weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1></h1>
        <Weather />
        <footer>
          This project is open sourced on{" "}
          <a href="https://github.com/kldieselberg/week-6-react-homework">
            Github
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

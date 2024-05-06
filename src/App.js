import "./App.css";
import Weather from "./weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project is coded by Kristina Dieselberg and open sourced on{" "}
          <a
            href="https://github.com/kldieselberg/week-6-react-homework"
            target="_blank"
            rel="noopener noreference"
          >
            Github
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

import "./App.css";
import Weather from "./weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project is coded by Kristina Dieselberg and open sourced on{" "}
          <a href="https://openweathermap.org/img/wn/10d@2x.png">Github</a>{" "}
        </footer>
      </div>
    </div>
  );
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SearchingCity from "./Search.js";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <div>
        <h1>Weather Search Engine</h1>
        <p>
          <SearchingCity />
        </p>
        <h2></h2>
        <footer className="Footer">
          This project was coded by Pilar Domínguez and is{" "}
          <a href="">open-sourced</a>
        </footer>
      </div>
    </div>
  </StrictMode>
);

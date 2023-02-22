import React from "react";
import { Link } from "react-router-dom";

const App = ({ children }) => {
  return (
    <main>
      <h1>@hc/react-lazy</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      {children}
    </main>
  );
};
export default App;

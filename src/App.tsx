import React from "react";
import "./styles/main.scss";

function App() {
  return (
    <main className="main stats">
      <h2 className="stats__title">
        Get <span className="stats__title--highlight">insights</span> that help
        your business grow.
      </h2>
      <p className="stats__message">
        Discover the benefits of data analytics and make better decisions
        regarding revenue, customer experience, and overall efficiency
      </p>
      .
      <ul>
        <li className="stats__stat">
          <span className="stats_stat--highlight">10k+</span> companies
        </li>
        <li className="stats__stat">
          <span className="stats_stat--highlight">314</span> templates
        </li>
        <li className="stats__stat">
          <span className="stats_stat--highlight">12m+</span> queries
        </li>
      </ul>
    </main>
  );
}

export default App;

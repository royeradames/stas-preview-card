import React from "react";
import "./styles/main.scss";

function App() {
  return (
    <main className="main ">
      <article className="stats">
        <header className="stats__header"></header>
        <div className="stats__content">
          <h2 className="stats__title">
            Get <span className="stats__title--highlight">insights</span> that
            help your business grow.
          </h2>
          <p className="stats__message">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency
          </p>
          <ul className="stats__list-stats">
            <li className="stats__stat">
              <p className="stats__stat--highlight">10k+</p>
              <h2 className="stats__stat-heading">companies</h2>
            </li>
            <li className="stats__stat">
              <p className="stats__stat--highlight">314</p>
              <h2 className="stats__stat-heading">templates</h2>
            </li>
            <li className="stats__stat stats__queries">
              <p className="stats__stat--highlight">12m+</p>
              <h2 className="stats__stat-heading">queries</h2>
            </li>
          </ul>
        </div>
      </article>
    </main>
  );
}

export default App;

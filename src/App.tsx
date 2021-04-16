import React from "react";
import "./styles/main.scss";

// import images
import mobileHeader from "./images/image-header-desktop.jpg";
import desktopHeader from "./images/image-header-mobile.jpg";

function App() {
  return (
    <main className="main stats">
      <picture className="stats_img">
        <source media="(min-width:1440px)" srcSet={desktopHeader} />
        <img src={mobileHeader} alt="Ladies working in a open office" />
      </picture>
      <div className="stats__content">
        <h2 className="stats__title">
          Get <span className="stats__title--highlight">insights</span> that
          help your business grow.
        </h2>
        <p className="stats__message">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency
        </p>
      </div>
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

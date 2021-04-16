import React from "react";
import "./styles/main.scss";

// import images
import mobileHeader from "./images/image-header-desktop.jpg";
import desktopHeader from "./images/image-header-mobile.jpg";

function App() {
  return (
    <main className="main stats">
      <picture className="stats__img">
        <source
          media="(min-width:1440px)"
          srcSet={desktopHeader}
          className="stats__img"
        />
        <img
          src={mobileHeader}
          alt="Ladies working in a open office"
          className="stats__img"
        />
      </picture>
      <h2 className="stats__title">
        Get <span className="stats__title--highlight">insights</span> that help
        your business grow.
      </h2>
      <p className="stats__message">
        Discover the benefits of data analytics and make better decisions
        regarding revenue, customer experience, and overall efficiency
      </p>
      <ul className="stats__list-stats">
        <li className="stats__stat">
          <p>
            <span className="stats__stat--highlight">10k+</span> companies
          </p>
        </li>
        <li className="stats__stat">
          <p>
            <span className="stats__stat--highlight">314</span> templates
          </p>
        </li>
        <li className="stats__stat">
          <p>
            <span className="stats__stat--highlight">12m+</span> queries
          </p>
        </li>
      </ul>
    </main>
  );
}

export default App;

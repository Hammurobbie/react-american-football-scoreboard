//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeCount, setHomeCount] = useState(0);
  const [awayCount, setAwayCount] = useState(0);
  const [quarter, setQuarter] = useState(1);
  const [down, setDown] = useState(1);
  const [yards, setYards] = useState(10);
  const [ball, setBall] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard" style={{ backgroundColor: "tomato" }}>
        <div className="topRow">
          <div className="home" style={{ backgroundColor: "#234099" }}>
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeCount}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away" style={{ backgroundColor: "#23997b" }}>
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayCount}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            className="homeButtons__touchdown"
            onClick={() => setHomeCount(homeCount + 7)}
          >
            Home Touchdown
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={() => setHomeCount(homeCount + 3)}
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={() => setAwayCount(awayCount + 7)}
          >
            Away Touchdown
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={() => setAwayCount(awayCount + 3)}
          >
            Away Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={() => setQuarter(quarter + 1)}
          >
            Quarter
          </button>
          <button
            className="awayButtons__touchdown"
            onClick={() => setDown(down + 1)}
          >
            Down
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={() => setYards(yards - 1)}
          >
            ToGo
          </button>
          <button
            className="awayButtons__touchdown"
            onClick={() => setBall(ball + 1)}
          >
            BallOn
          </button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown">
            Timer Stop/<br></br>Start
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;

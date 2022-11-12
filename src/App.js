import "./App.css";
import Sunburst from "sunburst-chart";
import * as d3 from "d3";
import { useEffect, useRef } from "react";
import data from "./data";

function App() {
  const ref = useRef();

  const myChart = Sunburst();
  const color = d3.scaleOrdinal(d3.schemeAccent);

  useEffect(() => {
    data &&
      myChart
        .data(data)
        .color((d, parent) => color(parent ? parent.data.name : null))(
          ref.current
        )
        .width(500)
        .height(500);
  }, [data]);

  return (
    <div className="App">
      <div className="headline">
        <h1>MITRE ATT&CK</h1>
        <h4>
          Below are the tactics and techniques representing the MITRE ATT&CK by
          sunburst diagram.
        </h4>
      </div>
      <header className="App-header" ref={ref}></header>
    </div>
  );
}

export default App;

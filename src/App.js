import './App.css';
import Sunburst from 'sunburst-chart';
import * as d3 from "d3";
import { useEffect, useRef } from 'react';

function App() {
  const ref = useRef()
  // const data = {
  //   name: "root",
  //   children: [
  //     {
  //       name: "leafA",
  //       value: 3
  //     },
  //     {
  //       name: "nodeB",
  //       children: [
  //         {
  //           name: "leafBA",
  //           value: 5
  //         },
  //         {
  //           name: "leafBB",
  //           value: 1
  //         }
  //       ]
  //     }
  //   ]
  // }

  const data = {
    name: "ATT&CK TREE",
    children: [
      {
        name: "Reconnaissance",
        children: [
          {
            name: "Active Scanning",
            children: [
              {
                name: "Scanning IP Blocks",
                value: 2
              },
              {
                name: "Vulnerability Scanning",
                value: 2
              },
              {
                name: "Wordlist Scanning",
                value: 2              }
            ],
          },
          {
            name: "Gather Victim Host Information",
            children: [
              {
                name: "Hardware",
                value: 2,
              },
              {
                name: "Software",
                value: 2
              },
              {
                name: "Firmware",
                value: 2
              },
              {
                name: "Client Configurations",
                value: 2
              }
            ]
          },
          {
            name: "Search Victim-Owned Websites",
            value: 2,
          }
        ]
      }
    ]
  }

  const myChart = Sunburst();
  const color = d3.scaleOrdinal(d3.schemeAccent);

  useEffect(() => {
   data && myChart
    .data(data)
    .color((d, parent) => color(parent ? parent.data.name : null))
    (ref.current).width(500).height(500)
  }, [data])

  console.log("ref", ref);
  console.log("myChart", myChart.data(data));
  return (
    <div className="App">
      <div className='headline'>
        <h1>MITRE ATT&CK</h1>
        <h4>Below are the tactics and techniques representing the MITRE ATT&CK by sunburst diagram.</h4>
      </div>
      <header className="App-header" ref={ref}>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import Sunburst from 'sunburst-chart';
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
  myChart.color

  useEffect(() => {
   data && myChart
    .data(data)
    (ref.current).width(500).height(500)
  }, [data])

  console.log("ref", ref);
  console.log("myChart", myChart.data(data));
  return (
    <div className="App">
      <header className="App-header" ref={ref}>
      </header>
    </div>
  );
}

export default App;

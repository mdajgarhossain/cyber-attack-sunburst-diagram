import './App.css';
import Sunburst from 'sunburst-chart';
import { useEffect, useRef } from 'react';

function App() {
  const ref = useRef()
  const data = {
    name: "root",
    children: [
      {
        name: "leafA",
        value: 3
      },
      {
        name: "nodeB",
        children: [
          {
            name: "leafBA",
            value: 5
          },
          {
            name: "leafBB",
            value: 1
          }
        ]
      }
    ]
  }

  const myChart = Sunburst();

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

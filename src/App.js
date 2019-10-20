import React from "react";
import "./App.css";
import BarChart from "./components/BarChart";

function App() {
  return (
    <div className="App">
      <div className="graph-container">
        <BarChart
          width={775}
          height={244}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          data={[
            { xAxisValue: "India", yAxisValue: 50 },
            { xAxisValue: "America", yAxisValue: 30 },
            { xAxisValue: "Australia", yAxisValue: 40 },
            { xAxisValue: "Pakistan", yAxisValue: 25 },
            { xAxisValue: "China", yAxisValue: 20 },
            { xAxisValue: "Russia", yAxisValue: 10 },
            { xAxisValue: "Africa", yAxisValue: 30 }
          ]}
        />
      </div>
    </div>
  );
}

export default App;

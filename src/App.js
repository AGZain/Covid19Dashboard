import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const TABLE_LIST = [
  { x: 10, y: 30 },
  { x: 30, y: 200 },
  { x: 45, y: 100 },
  { x: 50, y: 400 },
  { x: 70, y: 150 },
  { x: 100, y: 250 }
];


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        list: [ 
          { x: 10, y: 30 },
          { x: 30, y: 200 },
          { x: 45, y: 100 },
          { x: 50, y: 400 },
          { x: 70, y: 150 },
          { x: 100, y: 250 }
        ]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            <code>src/App.js</code> 
          </p>
          <ScatterChart
          width={600}
          height={400}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey={"x"} name="stature" unit="cm" />
          <YAxis type="number" dataKey={"y"} name="weight" unit="kg" />
          <ZAxis range={[100]} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Legend />
          <Scatter name="A school" data={this.state.list} fill="#8884d8" line shape="line" />
        </ScatterChart>
        </header>
        
      </div>
    );
  }
}

export default App;

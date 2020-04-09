import React, { Component } from 'react';
import logo from './logo.svg';
import csvFile from './covidtesting.csv'
import Papa from 'papaparse';
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
    };
    this.updateData = this.updateData.bind(this);
  }

  importCSV = () => {
    //var data = Papa.parse("covidtesting.csv");
    //console.log(data)
    var data;

    Papa.parse(csvFile, {
      header: true,
      delimiter: ',',
      download: true,
      skipEmptyLines: true,
      complete: function(results) {
        console.log(results);
        data = results.data;
      }
    });
  };
  updateData(result) {
    
    var data = result.data;
    console.log(data);
  }
  
  render() {
    return (
      <div className="App">
        {this.importCSV()}
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
          {/* <CartesianGrid /> */}
          <XAxis type="number" dataKey={"x"} name="" unit="" />
          <YAxis type="number" dataKey={"y"} name="" unit="" />
          <ZAxis range={[100]} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Legend />
          <Scatter name="B school" data={this.state.list} fill="#8884d8" line shape="line" />
        </ScatterChart>
        </header>
        
      </div>
    );
  }
}

export default App;

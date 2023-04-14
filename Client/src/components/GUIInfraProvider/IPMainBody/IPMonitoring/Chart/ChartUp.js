import "./Chart.css";
import moment from "moment"
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import React from "react";

// Sample chart data
const now = new Date().getTime();
var date = new Date(now);
var hour = 3600000
const data = [
  {
    name: date,
    value: 954,
  },
  {
    name: new Date(now + hour ),
    value: 2000,
  },
  {
    name: new Date(now + hour * 2),
    value: 0,
  },
  {
    name: new Date(now + hour * 3),
    value: 0,
  },
  {
    name: new Date(now + hour * 4),
    value: 0,
  },
  {
    name: new Date(now + hour * 5),
    value: 0,
  },
  {
    name: new Date(now + hour * 6),
    value: 0,
  },
  {
    name: new Date(now + hour * 7),
    value: 0,
  },
  {
    name: new Date(now + hour * 8),
    value: 0,
  },
  {
    name: new Date(now + hour * 9),
    value: 0,
  },

];


var counter = 1



class ChartUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: data };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.updateData(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateData() {

    console.log(this.state.data.slice(-1)[0]);
    data.map((e,ind)=>{
      e.name = new Date(now + hour * (counter+ind))
      if(ind!==data.length-1){
        e.value = data[ind+1].value
      }
      else{
        e.value = Math.floor(Math.random() * 6000) + 1000;
      }
    })

    counter++;
    this.setState(function (state, props) {
      return {
        data: data,
      };
      
    });
  }

  render() {
    return (
      <div className="ChartContainer">
        <h4 className="title">Uplink</h4>
        <div className="Chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={this.state.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                label={{ value: "time", position: "insideBottomRight", dy: 10 }}
                tickFormatter={(unixTime) => moment(unixTime).format('HH:mm')}
              />
              <YAxis domain={[0, 20000]} label={{ value: "kbps", position: "insideTop", dy: 10 }}></YAxis>
              <Legend />
              <Line type="monotone" dataKey="value" stroke="black" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

export default ChartUp;

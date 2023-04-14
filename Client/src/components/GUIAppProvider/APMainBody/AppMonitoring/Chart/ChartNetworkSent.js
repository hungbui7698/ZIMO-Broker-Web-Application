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

// Sample chart data
const now = new Date().getTime();
var date = new Date(now);
var hour=3600000
const data = [
  {
    name: date,
    value: 270,
  },
  {
    name: new Date(now+hour),
    value: 270,
  },
  {
    name: new Date(now+2*hour),
    value: 270,
  },
  {
    name: new Date(now+3*hour),
    value: 270,
  },
  {
    name: new Date(now+4*hour),
    value: 270,
  },
  {
    name: new Date(now+5*hour),
    value: 270,
  },
  {
    name: new Date(now+6*hour),
    value: 270,
  },
  {
    name: new Date(now+7*hour),
    value: 270,
  },
  {
    name: new Date(now+8*hour),
    value: 270,
  },
  {
    name: new Date(now+9*hour),
    value: 270,
  },
  {
    name: new Date(now+10*hour),
    value: 270,
  },
  {
    name: new Date(now+11*hour),
    value: 270,
  },
  {
    name: new Date(now+12*hour),
    value: 270,
  },
];

function ChartNetworkSent() {
  return (
    <div className="ChartContainer">
      <h4 className="title">Network Sent</h4>
      <div className="Chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              label={{ value: "time", position: "insideBottomRight", dy: 10 }}
              tickFormatter={(unixTime) => moment(unixTime).format('HH:mm')}
            />
            <YAxis domain={[0, 600]} label={{ value: "GB", position: "insideTop",dy: 10 }}></YAxis>
            <Legend />
            
            <Line type="monotone" dataKey="value" stroke="black" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ChartNetworkSent

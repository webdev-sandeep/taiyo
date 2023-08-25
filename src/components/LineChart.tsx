import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const LineChart = (covidData: any) => {
  const labels = Object.keys(covidData?.covidData?.cases);
  const data = {
    labels,
    datasets: [
      {
        label: "Cases",
        data: Object.values(covidData.covidData.cases),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderWidth: 1,
        pointRadius: 1,
      },
      {
        label: "Deaths",
        data: Object.values(covidData.covidData.deaths),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        borderWidth: 1,
        pointRadius: 1,
      },
      {
        label: "Recovered",
        data: Object.values(covidData.covidData.recovered),
        borderColor: "rgb(255, 205, 86)",
        backgroundColor: "rgba(255, 205, 86, 0.5)",
        borderWidth: 1,
        pointRadius: 1,
      },
    ],
  };
  return (
    <Line
      options={options}
      data={data}
      className="max-h-[calc(100vh-20rem)] h-full"
    />
  );
};

export default LineChart;

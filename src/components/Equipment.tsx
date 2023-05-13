import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

import "./Equipment.scss";

export default function Equipment() {

  return <>
    <div className={`equipment equipment--conso`}>
      <Line
        datasetIdKey="label"
        data={{
          labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai'],
          datasets: [{
            label: 'Consommation d\'électricité (kWh)',
            data: [200, 300, 250, 315, 105],
            borderColor: [
              'black'
            ]
          }]
        }}
      />
    </div>
    <div className={`equipment equipment--conso`}>
      <Line
        datasetIdKey="label"
        data={{
          labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai'],
          datasets: [{
            label: 'Consommation de gaz (kWh)',
            data: [100, 120, 195, 130, 87],
            borderColor: [
              'black'
            ]
          }]
        }}
      />
    </div>
    <div className={`equipment equipment--conso`}>
      <Line
        datasetIdKey="label"
        data={{
          labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai'],
          datasets: [{
            label: 'Consommation d\'eau (L)',
            data: [5000, 5500, 5200, 4900, 2035],
            borderColor: [
              'black'
            ]
          }]
        }}
      />
    </div>
    <div className={`equipment equipment--conso`}>
      <Line
        datasetIdKey="label"
        data={{
          labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai'],
          datasets: [{
            label: 'Consommation d\'eau (L)',
            data: [5000, 5500, 5200, 4900, 2035],
            borderColor: [
              'black'
            ]
          }]
        }}
      />
    </div>
  </>
}
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
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
      <p className="equipment__title">Consommation d'électricité</p>
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
      <p className="equipment__title">Consommation de gaz</p>
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
      <p className="equipment__title">Consommation d'eau</p>
    </div>
    <div className={`equipment equipment--conso`}>
      <Doughnut
        datasetIdKey="label"
        data={{
          labels: ['Énergie', 'Alimentation', 'Loisir', 'Autre'],
          datasets: [{
            data: [100, 40, 30, 15],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'black'
            ]
          }]
        }}
      />
      <p className="equipment__title">Dépenses du foyer</p>
    </div>
  </>
}
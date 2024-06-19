<template>
    <div>
      <Bar :data="chartData" :options="chartOptions" />
    </div>
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import userRisorse from "../../Risorse.json"
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: this.getLabels(userRisorse),
          datasets: this.getDatasets(userRisorse)
        },
        chartOptions: {
          responsive: true
        }
      }
    },
    methods: {
      getLabels(data) {
        return data.risorse[0].dati.map(entry => new Date(entry.timestamp).toLocaleTimeString())
      },
      getDatasets(data) {
        return data.risorse.map(resource => {
          return {
            label: resource.tipo,
            backgroundColor: this.getColor(resource.tipo),
            data: resource.dati.map(entry => entry.valore)
          }
        })
      },
      getColor(resourceType) {
        const colors = {
          Gas: '#f87979',
          Luce: '#7CFC00',
          Acqua: '#6495ED'
        }
        return colors[resourceType] || '#000000'
      }
    }
  }
  </script>
  
  <style>
  .chart-container {
    position: relative;
    margin: auto;
    height: 80vh;
    width: 80vw;
  }
  </style>
  
import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./libsChartjs.html";
import { Chart, registerables } from 'chart.js';
const generateRandomNumber = () => {
  return Math.round(Math.random() * 100);
};
Chart.register(...registerables);
class LibsChartjs extends LightningElement {
  constructor(...args) {
    super(...args);
    this.chart = void 0;
    this.chartjsInitialized = false;
    this.config = {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [generateRandomNumber(), generateRandomNumber(), generateRandomNumber(), generateRandomNumber(), generateRandomNumber()],
          backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)'],
          label: 'Dataset 1'
        }],
        labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue']
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'right'
          }
        },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    };
  }
  renderedCallback() {
    if (this.chartjsInitialized) {
      return;
    }
    this.chartjsInitialized = true;
    this.loadChartJs();
  }
  loadChartJs() {
    const ctx = this.template.querySelector('canvas.donut').getContext('2d');
    this.chart = new Chart(ctx, this.config);
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(LibsChartjs, {
  fields: ["chart", "chartjsInitialized", "config"]
});
export default _registerComponent(LibsChartjs, {
  tmpl: _tmpl,
  sel: "recipe-libs-chartjs",
  apiVersion: 61
});
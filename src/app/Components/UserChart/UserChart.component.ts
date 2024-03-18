import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto'; 

@Component({
  selector: 'app-UserChart',
  templateUrl: './UserChart.component.html',
  styleUrls: ['./UserChart.component.css']
})
export class UserChartComponent implements OnInit {
  public chart: any;

  constructor() {}
  createChart(){

    this.chart = new Chart("userChart", {
      type: 'pie', 

      data: {
        labels: ['Red', 'Pink','Green','Yellow','Orange','Blue', ],
	       datasets: [{
    label: 'My First Dataset',
    data: [300, 240, 100, 432, 253, 34],
    backgroundColor: [
      'red',
      'pink',
      'green',
			'yellow',
      'orange',
      'blue',			
    ],
    hoverOffset: 4
  }],
      },
      options: {
        aspectRatio:1
      }

    });
  }

  ngOnInit(): void {
    this.createChart();

  }

 
}

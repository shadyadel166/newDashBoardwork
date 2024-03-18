import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto'; // Import Chart from 'chart.js/auto'

@Component({
  selector: 'app-ngx-chart',
  templateUrl: './ngx-chart.component.html',
  styleUrls: ['./ngx-chart.component.css']
})
export class NgxChartComponent implements OnInit {
    public chart: any;
    

  constructor() { }
  createChart(){
  
    this.chart = new Chart("MyChart", { 
      type: 'line', 

      data: {// values on X-Axis
        labels: ['January', 'February', 'March','April',
				'May', 'June', 'July','August','September','October',"November","December" ], 
	       datasets: [
          {
            label: "Like",
            data: ['467','576', '772', '1000', '92',
								 '574', '673', '476','350','250','150','100','850','900',],
            backgroundColor: 'blue'
          },
          {
            label: "Comments",
            data: ['542', '542', '536', '800', '17',
									 '230', '680', '580','150','350','700'],
            backgroundColor: 'limegreen'
          }  ,
          {
            label: "Blog",
            data: ['1000', '300', '250', '500', '150',
									 '450', '175', '350','200','345','750'],
            backgroundColor: 'red'
          }  
        ]
      },
      options: {
        aspectRatio:1,
        responsive: true, 
        maintainAspectRatio: false,
       
      }
      
    });
  }
  ngOnInit(): void {
    this.createChart();
  }
}

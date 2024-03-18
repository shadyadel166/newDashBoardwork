import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { UserService } from '../../Services/User.service';
import { ApiServiceService } from '../../Services/Api.service';
Chart.register(...registerables);

@Component({
  selector: 'app-TestChart',
  templateUrl: './TestChart.component.html',
  styleUrls: ['./TestChart.component.css'],
})
export class TestChartComponent implements OnInit {
  constructor(private authServ: ApiServiceService) {}

  chartData: any;
  lableData: any[] = [];
  realData: any[] = [];
  likeData: any[] = [];

  ngOnInit() {
    this.authServ.getAllBlog().subscribe((data) => {
      this.chartData = data.data;
      console.log(this.chartData);
      if (this.chartData.length != null) {
        for (let i = 0; i < this.chartData.length; i++) {
          console.log(this.chartData);
          this.lableData.push(this.chartData[i].title);
          // this.realData.push(this.chartData[i].comment)
          this.likeData.push(this.chartData[i].likes)
        }
        this.creatChart(this.lableData,this.likeData);
      }
      console.log(this.lableData);
      // console.log(this.realData);
      console.log(this.likeData,this.likeData)
    });

   
  }

  creatChart(lableData:any,likeData:any) {
    const myChart = new Chart('myChartUser', {
      type: 'line',
      data: {
        labels: lableData,
        datasets: [
          {
            label: 'Users',
            data: likeData,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}

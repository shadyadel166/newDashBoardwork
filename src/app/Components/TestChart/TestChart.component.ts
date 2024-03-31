import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { UserService } from '../../Services/User.service';
import { ApiServiceService } from '../../Services/Api.service';
import { IBlog } from '../../Model/IBlog';
Chart.register(...registerables);

@Component({
  selector: 'app-TestChart',
  templateUrl: './TestChart.component.html',
  styleUrls: ['./TestChart.component.css'],
})
export class TestChartComponent implements OnInit {
  constructor(private authServ: ApiServiceService) {}

  chartData: IBlog[] = [];
  lableData: any[] = [];
  realData: any[] = [];
  likeData: any[] = [];

  ngOnInit() {
    this.authServ.getAllBlog().subscribe((data) => {
      console.log(data.data);
      
      this.chartData = data.data;
      console.log(this.chartData);
      if (this.chartData.length != null) {
        for (let i = 0; i < this.chartData.length; i++) {
          console.log(this.chartData);
          this.lableData.push(this.chartData[i].title);
        this.realData.push(this.chartData[i].comments.length);
          this.likeData.push(this.chartData[i].likedBy.length);
        }
        this.creatChart(this.lableData,this.likeData,this.realData);
      }
      console.log(this.lableData);
      console.log(this.realData);
      // console.log(this.likeData,this.likeData)
    });   
  }

  creatChart(lableData:any,likeData:any,realData:any) {
    const myChart = new Chart('myChartUser', {
      type: 'line',
      data: {
        labels: lableData,
        datasets: [
          {
            label: 'likes',
            data: likeData,
            borderWidth: 1,
            backgroundColor: 'blue',
          },
          {
            label: 'Comments',
            data: realData,
            borderWidth: 1,
            backgroundColor: 'red',
          },

        ],
      },
      options: {
        aspectRatio:1,
        responsive: true, 
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            
          },
        },
      },
    });
  }
}

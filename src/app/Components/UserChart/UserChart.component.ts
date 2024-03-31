import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto'; 
import { ApiServiceService } from '../../Services/Api.service';
import { UserService } from '../../Services/User.service';
import { IBlog } from '../../Model/IBlog';

@Component({
  selector: 'app-UserChart',
  templateUrl: './UserChart.component.html',
  styleUrls: ['./UserChart.component.css']
})
export class UserChartComponent implements OnInit {
  public chart: any;

  constructor(private authServ:ApiServiceService,private userServ:UserService) {}
userData: IBlog[]=[];
lableUser: any[]=[];
realBlog: any[]=[];
  // createChart(){

  //   this.chart = new Chart("userChart", {
  //     type: 'pie', 

  //     data: {
  //       labels: ['Red', 'Pink','Green','Yellow','Orange','Blue', ],
	//        datasets: [{
  //   label: 'My First Dataset',
  //   data: [300, 240, 100, 432, 253, 34],
  //   backgroundColor: [
  //     'red',
  //     'pink',
  //     'green',
	// 		'yellow',
  //     'orange',
  //     'blue',			
  //   ],
  //   hoverOffset: 4
  // }],
  //     },
  //     options: {
  //       aspectRatio:2.5
  //     }

  //   });
  // }

  ngOnInit(): void {
    this.authServ.getAllBlog().subscribe(data=>{
      this.userData = data.data;
      console.log(this.userData);
    })
    this.userServ.getAllUser().subscribe(userData=>{
      this.lableUser = userData.data;
      console.log(this.lableUser);
    })

  }
}



 


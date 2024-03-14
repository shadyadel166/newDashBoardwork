// import { Component, OnInit } from '@angular/core';
// import { UserService } from '../../Services/User.service';
// import { IUser } from '../../Model/IUser';
// import { IResultApi } from './../../Model/IResultApi';

// @Component({
//   selector: 'app-ngx-chart',
//   templateUrl: './ngx-chart.component.html',
//   styleUrls: ['./ngx-chart.component.css']
// })
// export class NgxChartComponent implements OnInit {
 
//   pieChartData: { name: string; value: any }[] = [];
//   colorScheme = {
//     domain: ['#5AA454', '#E44D25', '#CFC0BB']
//   };
  
  
//   animation: boolean = true;
//   view: [number, number] = [450, 350];
//   labels: boolean = false;
//   showLegend: boolean = true;

//   constructor(private userService: UserService) { }

//   ngOnInit(): void {
//     this.userService.getAllUser().subscribe((users: any) => {
//       this.mapDataForPieChart(users);
//     });
//   }

//   private mapDataForPieChart(users: IUser[]) {
   
//     const addressMap = new Map<string, number>();
//     const fullNameMap = new Map<string, number>();
//     const nationalIdMap = new Map<string, number>();

 
//     users.forEach(user => {
//       const address = user.address;
//       if (address) {
//         if (addressMap.has(address)) {
//           addressMap.set(address, addressMap.get(address)! + 1);
//         } else {
//           addressMap.set(address, 1);
//         }
//       }

//       const fullName = user.fullName;
//       if (fullName) {
//         if (fullNameMap.has(fullName)) {
//           fullNameMap.set(fullName, fullNameMap.get(fullName)! + 1);
//         } else {
//           fullNameMap.set(fullName, 1);
//         }
//       }

//       const nationalId = user.nationalId.toString();;
//       if (nationalId) {
//         if (nationalIdMap.has(nationalId)) {
//           nationalIdMap.set(nationalId, nationalIdMap.get(nationalId)! + 1);
//         } else {
//           nationalIdMap.set(nationalId, 1);
//         }
//       }
//     });

   
//     this.pieChartData = [
//       ...this.convertMapToArray(addressMap),
//       ...this.convertMapToArray(fullNameMap),
//       ...this.convertMapToArray(nationalIdMap)
//     ];
//   }

  
//   private convertMapToArray(map: Map<string, number>): { name: string, value: number }[] {
//     return Array.from(map.entries()).map(([name, value]) => ({ name, value }));
//   }
// }

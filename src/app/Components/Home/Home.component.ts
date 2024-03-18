import { Component, OnInit } from '@angular/core';
import { IUser } from '../../Model/IUser';
import { UserService } from './../../Services/User.service';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
listUsers:IUser[]=[]
  constructor(private userServ:UserService) { 
    this.get()
  }
get(){
  this.userServ.getAllUser().subscribe({
    next:(res)=>{
      this.listUsers=res.data;
      console.log(res);
    }
  })
}
  ngOnInit() {
  }

}

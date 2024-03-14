import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../Services/Api.service';
import { IBlog } from '../../Model/IBlog';
import { UserService } from '../../Services/User.service';

@Component({
  selector: 'app-SearchBar',
  templateUrl: './SearchBar.component.html',
  styleUrls: ['./SearchBar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchTerm: string = ''; 
  searchResults: any[] = []
  constructor(private userServ:UserService ) { }

  ngOnInit() {
  }
 

}

import { Component, OnInit } from '@angular/core';
import { IUser } from '../../Model/IUser';
import { Router } from '@angular/router';
import { UserService } from '../../Services/User.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-User',
  templateUrl: './User.component.html',
  styleUrls: ['./User.component.css'],
})
export class UserComponent   {
  listUser: IUser[] = [];
  User!: IUser;
  form: FormGroup;
  query: string = '';
 

  constructor(
    private userService: UserService,
    private router: Router,
    private builder: FormBuilder
  ) {
    // read users
    this.get();

// edit Users

    this.form = this.builder.group({
      fullName: [''],
      nationalId: [''],
      email: [''],
      phoneNumber: [''],
      address: [''],
      role: 'user',
      token:['']
    });
  }

  // get all user
  get() {
    this.userService.getAllUser().subscribe({
      next: (res) => {
        this.listUser = res.data;
        console.log(this.listUser);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe({
      next: (res) => {
        console.log(res);
        this.get();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  // edit user
  updateUser(current: any) {
    this.User = current;
    console.log(this.User);
    this.form = this.builder.group({
      fullName: [this.User.fullName, [Validators.required]],
      nationalId: [this.User.nationalId, [Validators.required]],
      email: [this.User.email, [Validators.required]],
      phoneNumber: [this.User.phoneNumber, [Validators.required]],
      address: [this.User.address, [Validators.required]],
      role: [this.User.role, [Validators.required]],
      token:[this.User.token,[Validators.required]]

    });
  }
  EditApi() {
    this.userService.editUser(this.User._id, this.form.value).subscribe({
      next: (res) => {
        alert(res.message);
        this.get();
      },
      error: (err) => {
        alert(err);
      },
    });
  }
  // end edit

  //search
  filterResults() {
    if (!this.query) {
      this.get(); 
      return;
    }
console.log(this.query)
    const filteredList = this.listUser.filter(
      (user) =>
      user.fullName?.toLowerCase().includes(this.query.toLowerCase()) ||
        user.email?.toLowerCase().includes(this.query.toLowerCase())


      );
    this.listUser = filteredList;
  }
  


}






















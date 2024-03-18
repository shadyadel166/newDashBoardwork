import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAdminRegister, IAdminStore } from '../../Model/IUser';
import { AuthServiceService } from '../../Services/Auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../../Services/Api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiAdminService } from '../../Services/ApiAdmin.service';

@Component({
  selector: 'app-SideNav',
  templateUrl: './SideNav.component.html',
  styleUrls: ['./SideNav.component.css'],
})
export class SideNavComponent {
  loginAdmin: IAdminStore | null = null;
  // add blog
  form: FormGroup;
  data: FormData;
  imageLoad:boolean = false;

  // end add blog

  constructor(
    private auth: AuthServiceService,
    private apiServ: ApiServiceService,
    private router: Router,
    private builder: FormBuilder ,
  
    ) {

      // admin 
    this.auth.AdminSubject.subscribe((data) => {
      this.loginAdmin = data;
    }); 
  // end admin
  
  // add blog
  this.data = new FormData();
  this.form = this.builder.group({
    title: ['', [Validators.required]],
    body: ['', [Validators.required, Validators.minLength(30)]],
  });


  // end blog
  // start user



  
  
  }

  // add blog 
  chooseImage(imgInput: any) {
    this.data.append('image', imgInput.files[0]);
    this.imageLoad = true;
  }
  send() {
    for (let key in this.form.value) {
      this.data.append(key, this.form.controls[key].value);
    }
    console.log(this.data.get('image'));
    console.log(this.data.get('title'));
    console.log(this.data.get('body'));
    console.log('done send');

 
  this.apiServ.addBlog(this.data).subscribe({
    next: (res) => {
      console.log(res);
      if (res.status == 200) {
        alert('Blog Added');
        this.form.reset();
        this.data = new FormData();
      //   this.router.navigate(['/blog']);
      this.router.navigateByUrl("/blog")    
  } else {
        alert('something wrong');
      }
    },
    error: (err) => {
      console.log(err);
    },
  });
}
// end add blog

// start add users




// end add users


  // logout admin
  logOut() {
    this.auth.adminLogout();
    this.router.navigate(['/login']);
  }


// sidenav button
  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }
}

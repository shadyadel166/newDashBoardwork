import { Component, OnInit } from '@angular/core';
import { IAdminLogin, IAdminStore } from '../../Model/IUser';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiAdminService } from './../../Services/ApiAdmin.service';
import { AuthServiceService } from '../../Services/Auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
})
export class LoginComponent {
  adminLog: IAdminLogin;
  returnUrl = '/home';
  form:FormGroup;
  constructor(
    private router: Router,
    private ApiServeAdmin: ApiAdminService,
    private Auth: AuthServiceService,
    private builder: FormBuilder,
    private activateServ:ActivatedRoute

  ) {
    this.adminLog = { email: '', password: '' };
    this.form=this.builder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
    this.returnUrl=this.activateServ.snapshot.queryParams['returnUrl'] || '/home';
  }

  send() {
    this.adminLog=this.form.value as IAdminLogin;
    this.ApiServeAdmin.Login(this.adminLog).subscribe({
      next: (res) => {
        if (res.status == 200) {
          console.log(res);
          let data: IAdminStore = {
            token: res.data.token,
            Email: res.data.email,
            Name: res.data.name,
          };
          this.Auth.newAdmin(data);
          this.router.navigate(['/']);
        } else {
          alert(res.message);
        }
      },
    });
  }
}

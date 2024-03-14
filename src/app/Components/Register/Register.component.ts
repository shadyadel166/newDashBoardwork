import { Component, OnInit } from '@angular/core';
import { IAdminRegister } from '../../Model/IUser';
import { AuthServiceService } from '../../Services/Auth.service';
import { Router } from '@angular/router';
import { ApiAdminService } from '../../Services/ApiAdmin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css'],
})
export class RegisterComponent {
  admin: IAdminRegister;
  form: FormGroup;
  constructor(
    private auth: ApiAdminService,
    private router: Router,
    private builder: FormBuilder
  ) {
    this.admin = {
      fullName: '',
      password: '',
      email: '',
      phoneNumber: '',
      nationalId: '',
      address: '',
      role: '',
    };
    this.form = this.builder.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      phoneNumber: ['', [Validators.required]],
      nationalId: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      role: 'user',
    });
  }

  sendReg() {
    this.admin = this.form.value as IAdminRegister;
    this.auth.Register(this.admin).subscribe({
      next: (res) => {
        if (res.success == true) {
          this.router.navigate(['/AllUser']);
        } else {
          alert(res.message);
        }
      },
    });
  }
}

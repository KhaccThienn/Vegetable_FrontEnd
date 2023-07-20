import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  dataFormPost: any = FormGroup;
  responseMessage: any;
  u_data: any;

  constructor(
    private formBuilder: FormBuilder,
    private accService: LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.u_data = this.getUData();
    if (this.u_data) {
      if (this.u_data.role == 'admin') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/']);
      }
    }
    this.dataFormPost = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  getUData(): any {
    const data = localStorage.getItem("u_data") ? JSON.parse(localStorage.getItem("u_data") as string) : null;
    console.log("data", data);
    return data;
  }


  handleSubmit() {
    let formData = this.dataFormPost.value;
    let data = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: 'user',
    }
    console.log(data);

    this.accService.createAccount(data).subscribe((response: any) => {
      this.responseMessage = response?.message;
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Register Successfully !',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/login']);
    }, (error) => {
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
      }
    }
    )
  }
}

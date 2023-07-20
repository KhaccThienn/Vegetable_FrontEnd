import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
      email: formData.email,
      password: formData.password,
    }
    console.log(data);

    this.accService.loginAccount(data).subscribe((response: any) => {
      console.log(response);
      if (response.length == 0) {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Invalid Account !',
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Login Successfully !',
          showConfirmButton: false,
          timer: 1500
        });


        const u_data = {
          id: response[0].id,
          name: response[0].name,
          email: response[0].email,
          role: response[0].role,
        }

        console.log(u_data);
        localStorage.setItem('u_data', JSON.stringify(u_data));

        if (u_data.role == 'admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/']);
        }
      }
    }, (error) => {
      console.log(error);
    }
    )
  }

}

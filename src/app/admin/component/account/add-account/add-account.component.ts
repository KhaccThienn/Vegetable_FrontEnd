import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/admin/service/account.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  accountFormPost: any = FormGroup;
  responseMessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.accountFormPost = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  handleSubmit() {
    let formData = this.accountFormPost.value;
    let data = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: 'admin',
    }
    console.log(data);

    this.accountService.createAccount(data).subscribe((response: any) => {
      this.responseMessage = response?.message;
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Register New Account Successfully !',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/admin/account']);
    }, (error) => {
      if (error.error?.message) {
        this.responseMessage = error.error?.message;
      } else {
      }
    }
    )
  }
}

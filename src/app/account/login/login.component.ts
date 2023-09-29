import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup = new FormGroup({});
  submitted = false;
  errorMessages: string[] = [];

  constructor(private accountServices: AccountService,
    private formBuilder: FormBuilder,
    private router: Router){
      
    }


    ngOnInit(): void {
      this.initializeForm();
    }

  initializeForm(){
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  login(){
    this.submitted = true;
    this.errorMessages = [];

    this.accountServices.login(this.loginForm.value).subscribe({
      next: (response:any) =>{
        this.router.navigateByUrl('/');
        //console.log(response);
      },
      error: error =>{
        console.log(error);
      }
    })
  }

  
}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { User } from 'src/app/models/user/user';
import { NotExpr } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup = new FormGroup({});
  submitted = false;
  errorMessages: string[] = [];
  returnUrl: string |null = null;


   userName = 'admin@mail.com';
   password = '123456';

  constructor(private accountServices: AccountService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activateRoute: ActivatedRoute){   
      this.accountServices.user$.pipe(take(1)).subscribe({
        next:(user :User | null) =>{
          if(user){
            this.router.navigateByUrl('/');
          }else{
            this.activateRoute.queryParamMap.subscribe({
              next:(params: any) =>{
                if(params){
                  this.returnUrl = params.get('returnUrl');
                }
              }
          })
          }
        }
      })
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
        if (this.returnUrl) {
          this.router.navigateByUrl(this.returnUrl);
        }
        if (this.loginForm.value.userName === this.userName && this.loginForm.value.password === this.password) {
          
          this.router.navigateByUrl('dashboard');
        }else {
          this.router.navigateByUrl('/');
        }

        //console.log(response);
      },
      error: error =>{
        console.log(error);
      }
    })
  }
}


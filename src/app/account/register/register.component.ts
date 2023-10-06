import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { take } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm: FormGroup = new FormGroup({});
  submitted = false;
  errorMessages: string[] = [];

  constructor(private accountServices: AccountService,
    private formBuilder: FormBuilder,
    private router: Router) {
      this.accountServices.user$.pipe(take(1)).subscribe({
        next: (user: User | null) =>{
          if(user){
            this.router.navigateByUrl('/')
          }
        }
      })
    }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.registerForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  register(){
    this.submitted = true;
    this.errorMessages = [];

    this.accountServices.register(this.registerForm.value).subscribe({
      next: (response) =>{
        console.log(response);
      },
      error: error =>{
        console.log(error);
      }
    })
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

  constructor(private router:Router){}

  showOtpSection = false;

  openHealthCare(){
   this.router.navigate(['healthcare'])
  }
}

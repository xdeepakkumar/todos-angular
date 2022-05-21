import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../services/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string = "Invalid credentials";
  invalidLogin: boolean = false;

  username: string = ''
  password: string = ''


  constructor(private _router: Router, private _hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {

  }

  handleLogin(){
    if(this._hardcodedAuthenticationService.authenticate(this.username, this.password)){
      this._router.navigate(['welcome', this.username])
      this.invalidLogin = false
    }
    this.invalidLogin = true
  }

}

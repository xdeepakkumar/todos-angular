import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../services/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isUserLoggedIn: boolean = false;

  constructor(public _hardCodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
    this.isUserLoggedIn = this._hardCodedAuthenticationService.isUserLoggedIn();
  }

}

import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck {

  loggedIn: boolean = (localStorage.getItem('user') !== null) ? true : false;

  constructor(private router: Router) { }

  ngOnInit() {
    localStorage.clear();
    // this.router.navigate(['login']); // is this necessary?
  }

  ngDoCheck() {
    this.loggedIn = (localStorage.getItem('user') !== null) ? true : false;
  }

}

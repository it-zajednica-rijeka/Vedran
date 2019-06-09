import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
  }

  // This is an example of how to navigate programatically throw diferent routes
  onLoadServers() {
    // some code inside here
    this.router.navigate(['/servers', 1, 'edit'], { queryParams: {allowEdit: '1'}, fragment: 'loading'} );
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }

}

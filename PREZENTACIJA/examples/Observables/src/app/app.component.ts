import {Component, OnInit} from '@angular/core';
import {UserService} from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user1Activate = false;
  user2Activate = false;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    // here the Subject is used as an Observer or Subscriber
    this.userService.userActivated.subscribe(
      (id: number) => {
        if (id === 1) {
          this.user1Activate = true;
          this.user2Activate = false;
        } else {
          this.user2Activate = true;
          this.user1Activate = false;
        }
      }
    )
  }
}

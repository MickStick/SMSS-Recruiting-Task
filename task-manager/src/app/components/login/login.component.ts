import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from '../../services/authentication.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private FlashMsg: FlashMessagesService,
    private router: Router
  ) { }
  uname: String;
  pword: String;
  ngOnInit() {
    if (!this.authService.loggedIn()) {
      return true;
    }else {
      this.router.navigate(['/dashboard']);
    }
  }

  onLoginSubmit() {
    const user = {
      uname: this.uname,
      pword: this.pword
    };
    this.authService.loginUser(user).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data);
        this.FlashMsg.show('Logged In!', {cssClass: 'msg-accept msg', timeout: 2000});
        this.router.navigate(['/dashboard']);
      }else {
        this.FlashMsg.show(data.msg, {cssClass: 'msg-danger msg', timeout: 2000});
        this.router.navigate(['/login']);
      }
    });
  }

}

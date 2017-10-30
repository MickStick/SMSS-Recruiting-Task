import { Component, OnInit } from '@angular/core';
import { ValidateService} from '../../services/validate.service';
import { AuthenticationService} from '../../services/authentication.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fname: String;
  lname: String;
  uname: String;
  email: String;
  pword: String;
  rpword: String;

  constructor(
    private valService: ValidateService,
    private authService: AuthenticationService,
    private FlashMsg: FlashMessagesService,
    private router: Router
  ) { }


  ngOnInit() {
    if (!this.authService.loggedIn()) {
      return true;
    }else {
      this.router.navigate(['/dashboard']);
    }
  }

  onRegisterSubmit() {
   const user = {
     fname: this.fname,
     lname: this.lname,
     uname: this.uname,
     email: this.email,
     pword: this.pword,
     rpword: this.rpword
   };

   if (!this.valService.valRegister(user)) {
    this.FlashMsg.show('All Fields Are Required', {cssClass: 'msg-danger msg', timeout: 5000});
    return false;
   }

   if (!this.valService.regEmailValidate(this.email)) {
      this.FlashMsg.show('Invalid Email', {cssClass: 'msg-danger msg', timeout: 5000});
      return false;
    }

    if (!this.valService.regPasswordValidate(this.pword)) {
      this.FlashMsg.show('Password Not Strong Enough', {cssClass: 'msg-danger msg', timeout: 5000});
      return false;
    }

    if (!this.valService.regRPasswordValidate(this.pword, this.rpword)) {
      this.FlashMsg.show('Passwords Must Match', {cssClass: 'msg-danger msg', timeout: 5000});
      return false;
    }

    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.FlashMsg.show('Registration Complete. Go Login!', {cssClass: 'msg-accept msg', timeout: 5000});
        this.router.navigate(['/login']);
      }else {
        this.FlashMsg.show('Registration Failed!!', {cssClass: 'msg-danger msg', timeout: 5000});
        this.router.navigate(['/register']);
      }
    });
  }

EmailVal() {
    if (!this.valService.regEmailValidate(this.email)) {
      this.FlashMsg.show('Invalid Email', {cssClass: 'msg-danger msg', timeout: 5000});
      return false;
    }/* else {
      this.FlashMsg.show('Email Accepted!', {cssClass: 'msg-accept msg', timeout: 5000});
      return true;
    }*/
  }

  PasswordVal() {
    if (!this.valService.regPasswordValidate(this.pword)) {
      this.FlashMsg.show('Password Not Strong Enough', {cssClass: 'msg-danger msg', timeout: 5000});
      return false;
    }/* else {
      this.FlashMsg.show('Password Accepted!!', {cssClass: 'msg-accept msg', timeout: 5000});
      return true;
    }*/
  }

  RPasswordVal() {
    if (!this.valService.regRPasswordValidate(this.pword, this.rpword)) {
      this.FlashMsg.show('Passwords Must Match', {cssClass: 'msg-danger msg', timeout: 5000});
      return false;
    } /*else {
      this.FlashMsg.show('Password Are A Match!!', {cssClass: 'msg-accept msg', timeout: 5000});
      return true;
    }*/
  }

}

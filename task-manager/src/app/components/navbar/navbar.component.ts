import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from '../../services/authentication.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { Router} from '@angular/router';
//import * as $ from 'jquery';


declare var $:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private FlashMsg: FlashMessagesService,
    private router: Router
  ) {
    $(document).ready(function(){
      $(window).resize(function(){
        if ($('.My-navbar .nav-toggler').css('display') === 'none') {
          $('.My-navbar .nav-container').css({'display': 'block'});
        }else {
          $('.My-navbar .nav-container').css({'display': 'none'});
          $('.route-item').click(function(){
            $('.My-navbar .nav-container').animate({height: 'toggle'});
          });
        }
      });
    });
  }

  navDrop () {
    $('.My-navbar .nav-container').animate({height: 'toggle'});
  }

  onLogout() {
    this.authService.userLogout();
    this.FlashMsg.show('User Logged Out!', {cssClass : 'msg msg-caution', timeout: 2000});
    this.router.navigate(['/login']);
    return false;
 }


  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

valRegister(user) {
    if(user.fname == undefined || user.lname == undefined || user.uname == undefined || user.email == undefined || user.pword == undefined || user.rpword == undefined){
      return false;
    }else {
      return true;
    }
  }

  regEmailValidate(email) {
    const Email = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    if (!Email.test(email)) {
        return false;
    } else {
        return true;
    }
  }

  regPasswordValidate(pword) {
    const Pword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W|_?).{8,}$/;
    if (!Pword.test(pword)) {
        return false;
    } else if (/^(?=.*\s).{0,}$/.test(pword)) {
        return false;
    } else {
        return true;
    }
  }

  regRPasswordValidate(pword, rpword) {
    if (rpword !== pword) {
      return false;
    }else {
      return true;
    }
  }

}

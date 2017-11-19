import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from '../../services/authentication.service';
import { TaskServiceService} from '../../services/task-service.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  user:Object;
  uid:Number;
  title:String;
  desc:String;
  cat:String;
  ddate:Date;
  rdate:Date;
  notes:String;
  reminder:String;
  priority:Number;
  subs:String;
  addNew:boolean;

  constructor(
    private authService: AuthenticationService,
    private FlashMsg: FlashMessagesService,
    private router: Router,
    private taskService: TaskServiceService
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
      this.uid = profile.user.id;
    },
      err => {
        console.log(err);
        return false;
      }
    );
  }

  submitNewTask = () => {
    const newTask = {
      uid:this.uid,
      title:this.title,
      desc:this.desc + "\n",
      cat:this.cat,
      ddate:this.ddate,
      rdate:this.rdate,
      notes:this.notes + "\n",
      reminder:this.reminder + "\n",
      priority:this.priority,
      subs:this.subs + "\n"
    }
    
    this.uid = null;
    this.title = null;
    this.desc = null;
    this.cat = null;
    this.ddate = null;
    this.rdate = null;
    this.notes = null;
    this.reminder = null;
    this.priority = null;
    this.subs = null;

    this.taskService.addTask(newTask).subscribe(data => {
      if (data.success) {
        this.FlashMsg.show( newTask.title + ' has been added', {cssClass: 'green lighten-3 green-text', timeout: 1000});
        this.router.navigate(['/dashboard']);
      }else {
        this.FlashMsg.show(data.msg, {cssClass: 'red lighten-4 red-text', timeout: 1000});
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from '../../services/authentication.service';
import { TaskServiceService} from '../../services/task-service.service';
import { FlashMessagesService} from 'angular2-flash-messages';
import { Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: Object;
  tasks: Array<any>;
  _id:String;
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
  ) { 
      this.addNew = false;
      this.getTasks();

      $('#task-up').css({"background":"pink"});
  }

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

  toggleUpdate = (up) =>{
   this.tasks[up].updateMe = !this.tasks[up].updateMe;
   return false;
  }

  haveTasks(){
    if(this.tasks != null){
      return true;
    }else{
      return false;
    }
  }
  toggleAdd(){
    this.addNew = !this.addNew;
    console.log(this.addNew);
  }


  submitNewTask = () => {
    const newTask = {
      uid:this.uid,
      title:this.title,
      desc:this.desc,
      cat:this.cat,
      ddate:this.ddate,
      rdate:this.rdate,
      notes:this.notes,
      reminder:this.reminder,
      priority:this.priority,
      subs:this.subs
    }

    this.taskService.addTask(newTask).subscribe(data => {
      if (data.success) {
        this.getTasks();
        this.toggleAdd();
        this.FlashMsg.show( newTask.title + ' has been added', {cssClass: 'msg-accept msg', timeout: 1000});
      }else {
        this.FlashMsg.show(data.msg, {cssClass: 'msg-danger msg', timeout: 1000});
      }
    });
  }

  updateTask = (newTask) =>{
    const upTask = {
      _id:newTask._id,
      uid:newTask.uid,
      title:newTask.title,
      desc:newTask.desc,
      cat:newTask.cat,
      ddate:newTask.ddate,
      rdate:newTask.rdate,
      notes:newTask.notes,
      reminder:newTask.reminder,
      priority:newTask.priority,
      subs:newTask.subs
    }

    this.taskService.updateTask(upTask).subscribe(data => {
      if (data.success) {
        this.getTasks();
        this.FlashMsg.show( upTask.title + ' has been updated', {cssClass: 'msg-accept msg', timeout: 1000});
      }else {
        this.FlashMsg.show(data.msg, {cssClass: 'msg-danger msg', timeout: 1000});
      }
    });
  }

  deleteTask = (_id,Title) =>{
    const delTask = {
      id:_id,
      title: Title
    }

    this.taskService.deleteTask(delTask).subscribe(data => {
      if (data.success) {
        this.getTasks();
        this.FlashMsg.show( delTask.title + ' has been deleted', {cssClass: 'msg-accept msg', timeout: 1000});
      }else {
        this.FlashMsg.show(data.msg, {cssClass: 'msg-danger msg', timeout: 1000});
      }
    });
  }

  getTasks = () =>{
    let user = this.authService.getUserData();
    this.taskService.getTasks(user).subscribe(data => {
      if (data.success) {
        this.tasks = data.tasks;
        for(let x = 0; x < this.tasks.length; x++){
          this.tasks[x].updateMe = false;
        }
      }else {
        this.FlashMsg.show(data.msg, {cssClass: 'msg-danger msg', timeout: 1000});
      }
      console.log(data.msg);
    });
  }

}

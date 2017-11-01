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
      $(document).ready(function(){
        (function(){
          
        })();
        
      });
      
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

  showTaskInfo = (event) => {
    // console.log(event);
    // console.log($('#'+event.target.id+'').parent().parent().parent().parent().children('#task-info'));
    // let parent = $('#'+event.target.id+'').parent().parent().parent().parent();
    // parent.children('#task-info').animate({height:'toggle'}, 250);
    var target = event.currentTarget;
    
      var pElement = target.parentElement.parentElement.parentElement.parentElement;
      var pclassAttr = pElement.attributes.class;
      console.log(pclassAttr);
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
        this.getTasks();
        this.toggleAdd();
        this.FlashMsg.show( newTask.title + ' has been added', {cssClass: 'msg-accept msg', timeout: 1000});
      }else {
        this.FlashMsg.show(data.msg, {cssClass: 'msg-danger msg', timeout: 1000});
        this.toggleAdd();
      }
    });
  }

  updateTask = (newTask) =>{
    const upTask = {
      _id:newTask._id,
      uid:newTask.uid,
      title:newTask.title,
      desc:newTask.desc + "\n",
      cat:newTask.cat,
      ddate:newTask.ddate,
      rdate:newTask.rdate,
      notes:newTask.notes + "\n",
      reminder:newTask.reminder + "\n",
      priority:newTask.priority,
      subs:newTask.subs + "\n"
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
          //this.tasks[x].description = this.tasks[x].description.split('\n',this.tasks[x].description.length);
          // console.log("description: "+this.tasks[x].description);
          console.log(this.tasks);
        }
      }else {
        this.FlashMsg.show(data.msg, {cssClass: 'msg-danger msg', timeout: 1000});
        this.tasks = null;
      }
      console.log(data.msg);
    });
  }

}

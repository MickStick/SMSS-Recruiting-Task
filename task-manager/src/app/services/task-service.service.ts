import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskServiceService {

  token:any;
  task:String;
  tasks:Array<Object>
  Aurl:string;
  Uurl:string;
  Durl:string;
  Gurl:string;

  constructor(private http: Http) {
    this.Aurl = 'http://localhost:4444/tasks/add';
    this.Uurl = 'http://localhost:4444/tasks/update';
    this.Durl = 'http://localhost:4444/tasks/delete';
    this.Gurl = 'http://localhost:4444/tasks/tasks';
   }

   addTask = (task) =>{
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.token);
    headers.append('Content-type', 'application/json');

    return this.http.post(this.Aurl, task, {headers : headers}).map(res => res.json());
   }

   updateTask = (task) =>{
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.token);
    headers.append('Content-type', 'application/json');

    return this.http.put(this.Uurl, task, {headers : headers}).map(res => res.json());
   }

   deleteTask = (task) =>{
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.token);
    headers.append('Content-type', 'application/json');

    return this.http.post(this.Durl, task, {headers : headers}).map(res => res.json());
   }

   getTasks = (User) => {
     const user = {
       id:User.id
     }
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.token);
    headers.append('Content-type', 'application/json');

    return this.http.post(this.Gurl, user, {headers : headers}).map(res => res.json());
   }

   loadToken() {
    const Gtoken = localStorage.getItem('id_token');
    this.token = Gtoken;
    }

}

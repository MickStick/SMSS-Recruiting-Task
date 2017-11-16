webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_task_service_service__ = __webpack_require__("../../../../../src/app/services/task-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_auth_guard_service__["a" /* AuthGuardService */]]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_12__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_14__services_auth_guard_service__["a" /* AuthGuardService */],
            __WEBPACK_IMPORTED_MODULE_13__services_task_service_service__["a" /* TaskServiceService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"user\" class=\"dashboard\">\n    <label class=\"page-title\">Dashboard</label>\n    <p class=\"dash-message\">Welcome to your \"<i>Dashboard</i>\" {{user.fname}}.</p>\n\n    <div class=\"Tasks\">\n      <label for=\"tasks-header\" class=\"header dash-message\">Your Tasks</label>\n      <button class=\"btn add-btn\" (click)=\"toggleAdd()\"><i class=\"material-icons\">add</i></button>\n      <div *ngIf=\"addNew\"class=\"New-Task-Container\">\n          <form class=\"default-form newTask-form\" (submit)=\"submitNewTask()\">\n              <label class=\"form-header\">New Task</label>\n              <hr>\n              <table class=\"data-table\" cellspacing=\"20\">\n                <tr hidden><td><input type=\"text\" [(ngModel)] = \"uid\" name=\"uid\" value=\"{{user.id}}\"/></td></tr>\n                <!-- <tr></tr> -->\n                <tr><td><label for=\"title\">Title</label></td><td><input type=\"text\" [(ngModel)] = \"title\" name=\"title\" placeholder=\"First Task\"/></td></tr>\n                <!-- <tr></tr> -->\n                <tr><td><label for=\"dec\">Descriptionn</label></td><td><textarea [(ngModel)] = \"desc\" name=\"desc\" placeholder=\"This is my first task.\"></textarea></td></tr>\n                <!-- <tr></tr> -->\n                <tr><td><label for=\"cat\">Category</label></td><td><input type=\"text\" [(ngModel)] = \"cat\" name=\"cat\" placeholder=\"New Beginnings\"/></td></tr>\n                <!-- <tr></tr> -->\n                <tr><td><label for=\"ddate\">Due Date</label></td><td><input type=\"date\" [(ngModel)] = \"ddate\" name=\"ddate\" /></td></tr>\n                <!-- <tr></tr> -->\n                <tr><td><label for=\"rdate\">Recurring Date</label></td><td><input type=\"date\" [(ngModel)] = \"rdate\" name=\"rdate\"/></td></tr>\n                <!-- <tr></tr> -->\n                <tr><td><label for=\"notes\">Notes</label></td><td><textarea [(ngModel)] = \"notes\" name=\"notes\" placeholder=\"Well, it's just a new task.\"></textarea></td></tr>\n                <!-- <tr></tr> -->\n                <tr><td><label for=\"reminder\">Email Reminder</label></td><td><textarea [(ngModel)] = \"reminder\" name=\"reminder\" placeholder=\"Remember about your first task, Jon!\"></textarea></td></tr>\n                <!-- <tr></tr> -->\n                <tr><td><label for=\"priority\">Priority</label></td>\n                  <td>\n                  <select [(ngModel)] = \"priority\" name=\"priority\">\n                    <option value=\"5\">5</option>\n                    <option value=\"4\">4</option>\n                    <option value=\"3\">3</option>\n                    <option value=\"2\">2</option>\n                    <option value=\"1\">1</option>\n                  </select>\n                </td></tr>\n                <!-- <tr></tr> -->\n                <tr><td><label for=\"subs\">Sub-Tasks</label></td><td><textarea [(ngModel)] = \"subs\" name=\"subs\" placeholder=\"Get to know things, Jon!\"></textarea></td></tr>\n              </table>\n              <button type=\"submit\" class=\"btn form-btn btn-go\">Submit Task</button>\n          </form>\n      </div>\n      <div  class=\"Tasks-Container\">\n        <div *ngIf=\"haveTasks()\" class=\"Tasks\" >\n            <div class=\"Task\" *ngFor=\"let task of tasks, let i = index\">\n              <table *ngIf=\"!task.updateMe\" class=\"Task-data\" id=\"task-title\">\n                  <tr> <td id=\"title\"><label>Title: </label></td><td>\n                    <script>\n                      alert(\"We deh yah\");  \n                    </script>\n                    <label name=\"title\"  >{{task.title}}</label>\n                    <button (click) = \"toggleUpdate(i)\" class=\"btn task-btn task-update-btn\" id=\"task-up\"><i class=\"material-icons\">update</i></button>\n                    <button (click) = \"deleteTask(task._id, task.title)\" class=\"btn task-btn task-delete-btn\"><i class=\"material-icons\">delete</i></button>\n                  </td></tr>\n\n              </table>\n              <table class=\"Task-data\" id=\"task-info\">\n                  <tr><td><label>Description: </label></td><td><pre   name=\"description\"  >{{task.description}}</pre></td></tr>\n                  <tr><td><label>Category: </label></td><td><label name=\"cat\"  >{{task.category}}</label></td></tr>\n                  <tr><td><label>Due Date: </label></td><td><label name=\"ddate\"  >{{task.ddate}}</label></td></tr>\n                  <tr><td><label>Recurring Date: </label></td><td><label name=\"rdate\"  >{{task.rdate}}</label></td></tr>\n                  <tr><td><label>Notes: </label></td><td><pre name=\"notes\"  >{{task.notes}}</pre></td></tr>\n                  <tr><td><label>Email Reminder: </label></td><td><pre name=\"rem\"  >{{task.email_reminder}}</pre></td></tr>\n                  <tr><td><label>Priority: </label></td><td><label name=\"priority\"  >{{task.priority}}</label></td></tr>\n                  <tr><td><label>Sub Tasks: </label></td><td><pre name=\"subs\"  >{{task.sub_tasks}}</pre></td></tr>\n              </table>\n              <form *ngIf=\"task.updateMe\" class=\"upTask\" (submit) = \"updateTask(task)\">\n                <table>\n                    <tr hidden><td><input name=\"_id\"  [(ngModel)]=\"task._id\"/></td></tr>\n                    <tr hidden><td><input name=\"uid\"  [(ngModel)]=\"task.uid\" /></td></tr>\n                    <tr><td><input name=\"title\"  [(ngModel)]=\"task.title\" /></td></tr>\n                    <tr><td><textarea name=\"description\"  [(ngModel)]=\"task.description\" ></textarea></td></tr>\n                    <tr><td><input name=\"category\"  [(ngModel)]=\"task.category\" /></td></tr>\n                    <tr><td><input type=\"date\" [(ngModel)] = \"ddate\" name=\"ddate\" /></td></tr>\n                    <td><input type=\"date\" [(ngModel)] = \"rdate\" name=\"rdate\"/></td>\n                    <tr><td><textarea name=\"notes\"  [(ngModel)]=\"task.notes\" ></textarea></td></tr>\n                    <tr><td><textarea name=\"email_reminder\"  [(ngModel)]=\"task.email_reminder\" ></textarea></td></tr>\n                    <tr><td>\n                        <select [(ngModel)] = \"priority\" name=\"priority\">\n                          <option value=\"5\">5</option>\n                          <option value=\"4\">4</option>\n                          <option value=\"3\">3</option>\n                          <option value=\"2\">2</option>\n                          <option value=\"1\">1</option>\n                        </select>\n                      </td></tr>\n                    <tr><td><textarea name=\"notes\"  [(ngModel)]=\"task.notes\" ></textarea></td></tr>\n                </table>      \n                <button class=\"btn task-btn task-update-btn\" id=\"sub-task-up\" type=\"submit\" ><i class=\"material-icons\">update</i></button>\n                <button (click) = \"toggleUpdate(i)\" class=\"btn task-btn task-cancel-btn\" id=\"sub-task-up\"><i class=\"material-icons\">cancel</i></button>\n              </form>\n              <hr>\n            </div>\n        </div>\n        <div *ngIf=\"!haveTasks()\" class=\"No-Task\">\n          <h3>No Tasks Found</h3>\n        </div>\n      </div>\n        \n    </div>\n</div>\n  "

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_task_service_service__ = __webpack_require__("../../../../../src/app/services/task-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(authService, FlashMsg, router, taskService) {
        var _this = this;
        this.authService = authService;
        this.FlashMsg = FlashMsg;
        this.router = router;
        this.taskService = taskService;
        this.toggleUpdate = function (up) {
            _this.tasks[up].updateMe = !_this.tasks[up].updateMe;
            return false;
        };
        this.showTaskInfo = function (event) {
            // console.log(event);
            // console.log($('#'+event.target.id+'').parent().parent().parent().parent().children('#task-info'));
            // let parent = $('#'+event.target.id+'').parent().parent().parent().parent();
            // parent.children('#task-info').animate({height:'toggle'}, 250);
            var target = event.currentTarget;
            var pElement = target.parentElement.parentElement.parentElement.parentElement;
            var pclassAttr = pElement.attributes.class;
            console.log(pclassAttr);
        };
        this.submitNewTask = function () {
            var newTask = {
                uid: _this.uid,
                title: _this.title,
                desc: _this.desc + "\n",
                cat: _this.cat,
                ddate: _this.ddate,
                rdate: _this.rdate,
                notes: _this.notes + "\n",
                reminder: _this.reminder + "\n",
                priority: _this.priority,
                subs: _this.subs + "\n"
            };
            _this.uid = null;
            _this.title = null;
            _this.desc = null;
            _this.cat = null;
            _this.ddate = null;
            _this.rdate = null;
            _this.notes = null;
            _this.reminder = null;
            _this.priority = null;
            _this.subs = null;
            _this.taskService.addTask(newTask).subscribe(function (data) {
                if (data.success) {
                    _this.getTasks();
                    _this.toggleAdd();
                    _this.FlashMsg.show(newTask.title + ' has been added', { cssClass: 'msg-accept msg', timeout: 1000 });
                }
                else {
                    _this.FlashMsg.show(data.msg, { cssClass: 'msg-danger msg', timeout: 1000 });
                    _this.toggleAdd();
                }
            });
        };
        this.updateTask = function (newTask) {
            var upTask = {
                _id: newTask._id,
                uid: newTask.uid,
                title: newTask.title,
                desc: newTask.desc + "\n",
                cat: newTask.cat,
                ddate: newTask.ddate,
                rdate: newTask.rdate,
                notes: newTask.notes + "\n",
                reminder: newTask.reminder + "\n",
                priority: newTask.priority,
                subs: newTask.subs + "\n"
            };
            _this.taskService.updateTask(upTask).subscribe(function (data) {
                if (data.success) {
                    _this.getTasks();
                    _this.FlashMsg.show(upTask.title + ' has been updated', { cssClass: 'msg-accept msg', timeout: 1000 });
                }
                else {
                    _this.FlashMsg.show(data.msg, { cssClass: 'msg-danger msg', timeout: 1000 });
                }
            });
        };
        this.deleteTask = function (_id, Title) {
            var delTask = {
                id: _id,
                title: Title
            };
            _this.taskService.deleteTask(delTask).subscribe(function (data) {
                if (data.success) {
                    _this.getTasks();
                    _this.FlashMsg.show(delTask.title + ' has been deleted', { cssClass: 'msg-accept msg', timeout: 1000 });
                }
                else {
                    _this.FlashMsg.show(data.msg, { cssClass: 'msg-danger msg', timeout: 1000 });
                }
            });
        };
        this.getTasks = function () {
            var user = _this.authService.getUserData();
            _this.taskService.getTasks(user).subscribe(function (data) {
                if (data.success) {
                    _this.tasks = data.tasks;
                    for (var x = 0; x < _this.tasks.length; x++) {
                        _this.tasks[x].updateMe = false;
                        //this.tasks[x].description = this.tasks[x].description.split('\n',this.tasks[x].description.length);
                        // console.log("description: "+this.tasks[x].description);
                        console.log(_this.tasks);
                    }
                }
                else {
                    _this.FlashMsg.show(data.msg, { cssClass: 'msg-danger msg', timeout: 1000 });
                    _this.tasks = null;
                }
                console.log(data.msg);
            });
        };
        this.addNew = false;
        this.getTasks();
        $(document).ready(function () {
            (function () {
            })();
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.uid = profile.user.id;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DashboardComponent.prototype.haveTasks = function () {
        if (this.tasks != null) {
            return true;
        }
        else {
            return false;
        }
    };
    DashboardComponent.prototype.toggleAdd = function () {
        this.addNew = !this.addNew;
        console.log(this.addNew);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_task_service_service__["a" /* TaskServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_task_service_service__["a" /* TaskServiceService */]) === "function" && _d || Object])
], DashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"HomeContainer\">\n    <div class=\"top-sect\">\n      <h1>Get It Done</h1>\n      <label>Welcome to Get it Done, the fastest Task Manager on the net.</label>\n      <div class=\"btn-container\">\n        <button *ngIf=\"!authService.loggedIn()\" class=\"route-btn btn-def\"><a class=\"btn-route\" [routerLink] = \"['/register']\">Sign Up!</a></button>\n        <button *ngIf=\"!authService.loggedIn()\" class=\"route-btn btn-go\"><a class=\"btn-route\" [routerLink] = \"['/login']\">Login</a></button>\n      </div>\n    </div>\n  \n    <div class=\"third-container\">\n      <div class=\"third-wrap\">\n          <div class=\"one-third\">\n            <h4 class=\"sect-title one-third-title\">Express Backend<hr/></h4>\n            <p>A rock solid NodeJS/Express server using Mongoose to organize the models and query the database.</p>\n          </div>\n          <div class=\"one-third\">\n            <h4 class=\"sect-title one-third-title\"> Angular-CLI <hr/></h4>\n            <p>Angular-CLI to generate companents, services and more, Local dev server and easy compilation. </p>\n          </div>\n          <div class=\"one-third\">\n            <h4 class=\"sect-title one-third-title\"> JWT Token <hr/></h4>\n            <p>Full featured authentication using JSON Web Tokens. Login and store user data</p>\n          </div>\n        </div>\n      </div>\n  \n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"default-form\" (submit)=\"onLoginSubmit()\">\n    <label class=\"form-header\">Login</label>\n    <hr>\n    <table class=\"data-table\">\n      <tr><td><label for=\"uname\">Username</label></td></tr>\n      <tr><td><input type=\"text\" [(ngModel)] = \"uname\" name=\"uname\" placeholder=\"doeboy\"/></td></tr>\n      <tr><td><label for=\"pword\">Password</label></td></tr>\n      <tr><td><input type=\"password\" [(ngModel)] = \"pword\" name=\"pword\" placeholder=\"********\"/></td></tr>\n    </table>\n    <button type=\"submit\" class=\"btn form-btn btn-go\">login</button>\n  </form>\n  "

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, FlashMsg, router) {
        this.authService = authService;
        this.FlashMsg = FlashMsg;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (!this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/dashboard']);
        }
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            uname: this.uname,
            pword: this.pword
        };
        this.authService.loginUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data);
                _this.FlashMsg.show('Logged In!', { cssClass: 'msg-accept msg', timeout: 2000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.FlashMsg.show(data.msg, { cssClass: 'msg-danger msg', timeout: 2000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"My-navbar\">\n    <a class=\"logo-route\" [routerLink] = \"['/']\"> Get It Done</a>\n    <div class=\"nav-container\">\n      <ul class=\"nav-routes nav-routes-left\">\n        <li class=\"route-item\" [routerLinkActive]=\"['active']\"  [routerLinkActiveOptions] = \"{exact:true}\">\n          <a class=\"route\"  [routerLink]=\"['/']\"> Home </a>\n        </li>\n      </ul>\n      <ul class=\"nav-routes nav-routes-right\">\n        <article>\n          <li *ngIf=\"!authService.loggedIn()\" class=\"route-item\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"route\" [routerLink]=\"['/login']\"> Login </a>\n          </li>\n          <li *ngIf=\"!authService.loggedIn()\" class=\"route-item\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"route\" [routerLink]=\"['/register']\"> Register </a>\n          </li>\n          <li *ngIf=\"authService.loggedIn()\" class=\"route-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"route\" [routerLink]=\"['/dashboard']\"> Dashboard </a>\n          </li>\n          <li *ngIf=\"authService.loggedIn()\" class=\"route-item\">\n            <a class=\"route\" href=\"#\" (click)=\"onLogout()\"> Logout </a>\n          </li>\n        </article>\n      </ul>\n    </div>\n    <button class=\"nav-toggler\" (click)=\"navDrop()\"><i class=\"material-icons\">arrow_drop_down_circle</i></button>\n\n  </nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, FlashMsg, router) {
        this.authService = authService;
        this.FlashMsg = FlashMsg;
        this.router = router;
        $(document).ready(function () {
            $(window).resize(function () {
                if ($('.My-navbar .nav-toggler').css('display') === 'none') {
                    $('.My-navbar .nav-container').css({ 'display': 'block' });
                }
                else {
                    $('.My-navbar .nav-container').css({ 'display': 'none' });
                    $('.route-item').click(function () {
                        $('.My-navbar .nav-container').animate({ height: 'toggle' });
                    });
                }
            });
        });
    }
    NavbarComponent.prototype.navDrop = function () {
        $('.My-navbar .nav-container').animate({ height: 'toggle' });
    };
    NavbarComponent.prototype.onLogout = function () {
        this.authService.userLogout();
        this.FlashMsg.show('User Logged Out!', { cssClass: 'msg msg-caution', timeout: 2000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"default-form\" (submit)=\"onRegisterSubmit()\">\n    <label class=\"form-header\">Register</label>\n    <hr>\n    <table class=\"data-table\">\n      <tr><td><label for=\"fname\">First Name</label></td></tr>\n      <tr><td><input type=\"text\" [(ngModel)] = \"fname\" name=\"fname\" placeholder=\"John\"/></td></tr>\n      <tr><td><label for=\"lname\" >Last Name</label></td></tr>\n      <tr><td><input type=\"text\" [(ngModel)] = \"lname\" name=\"lname\" placeholder=\"Doe\"/></td></tr>\n      <tr><td><label for=\"uname\">Username</label></td></tr>\n      <tr><td><input type=\"text\" [(ngModel)] = \"uname\" name=\"uname\" placeholder=\"doeboy\"/></td></tr>\n      <tr><td><label for=\"email\">Email Address</label></td></tr>\n      <tr><td><input type=\"email\" [(ngModel)] = \"email\" name=\"email\" placeholder=\"exam@ple.com\" (blur)=\"EmailVal()\"/></td></tr>\n      <tr><td><label for=\"pword\">Password</label></td></tr>\n      <tr><td><input type=\"password\" [(ngModel)] = \"pword\" name=\"pword\" placeholder=\"********\"  (blur)=\"PasswordVal()\"/></td></tr>\n      <tr><td><label for=\"rpword\">Re-type Password</label></td></tr>\n      <tr><td><input type=\"password\" [(ngModel)] = \"rpword\" name=\"rpword\" placeholder=\"********\"  (blur)=\"RPasswordVal()\"/></td></tr>\n    </table>\n    <button type=\"submit\" class=\"btn form-btn btn-def\">Register</button>\n  </form>\n  "

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(valService, authService, FlashMsg, router) {
        this.valService = valService;
        this.authService = authService;
        this.FlashMsg = FlashMsg;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        if (!this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/dashboard']);
        }
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            fname: this.fname,
            lname: this.lname,
            uname: this.uname,
            email: this.email,
            pword: this.pword,
            rpword: this.rpword
        };
        if (!this.valService.valRegister(user)) {
            this.FlashMsg.show('All Fields Are Required', { cssClass: 'msg-danger msg', timeout: 5000 });
            return false;
        }
        if (!this.valService.regEmailValidate(this.email)) {
            this.FlashMsg.show('Invalid Email', { cssClass: 'msg-danger msg', timeout: 5000 });
            return false;
        }
        if (!this.valService.regPasswordValidate(this.pword)) {
            this.FlashMsg.show('Password Not Strong Enough', { cssClass: 'msg-danger msg', timeout: 5000 });
            return false;
        }
        if (!this.valService.regRPasswordValidate(this.pword, this.rpword)) {
            this.FlashMsg.show('Passwords Must Match', { cssClass: 'msg-danger msg', timeout: 5000 });
            return false;
        }
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.FlashMsg.show('Registration Complete. Go Login!', { cssClass: 'msg-accept msg', timeout: 5000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.FlashMsg.show('Registration Failed!!', { cssClass: 'msg-danger msg', timeout: 5000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent.prototype.EmailVal = function () {
        if (!this.valService.regEmailValidate(this.email)) {
            this.FlashMsg.show('Invalid Email', { cssClass: 'msg-danger msg', timeout: 5000 });
            return false;
        } /* else {
          this.FlashMsg.show('Email Accepted!', {cssClass: 'msg-accept msg', timeout: 5000});
          return true;
        }*/
    };
    RegisterComponent.prototype.PasswordVal = function () {
        if (!this.valService.regPasswordValidate(this.pword)) {
            this.FlashMsg.show('Password Not Strong Enough', { cssClass: 'msg-danger msg', timeout: 5000 });
            return false;
        } /* else {
          this.FlashMsg.show('Password Accepted!!', {cssClass: 'msg-accept msg', timeout: 5000});
          return true;
        }*/
    };
    RegisterComponent.prototype.RPasswordVal = function () {
        if (!this.valService.regRPasswordValidate(this.pword, this.rpword)) {
            this.FlashMsg.show('Passwords Must Match', { cssClass: 'msg-danger msg', timeout: 5000 });
            return false;
        } /*else {
          this.FlashMsg.show('Password Are A Match!!', {cssClass: 'msg-accept msg', timeout: 5000});
          return true;
        }*/
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.Rurl = 'http://mik:4444/users/register';
        this.Lurl = 'http://mik:4444/users/auth';
        this.Purl = 'http://mik:4444/users/profile';
    }
    AuthenticationService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(this.Rurl, user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.loginUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(this.Lurl, user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.token);
        headers.append('Content-type', 'application/json');
        return this.http.get(this.Purl, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.storeUserData = function (data) {
        localStorage.setItem('id_token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        this.token = data.token;
        this.user = data.user;
    };
    AuthenticationService.prototype.userLogout = function () {
        this.token = null;
        this.user = null;
        localStorage.clear();
    };
    AuthenticationService.prototype.getUserData = function () {
        var Guser = localStorage.getItem('user');
        this.user = JSON.parse(Guser);
        return this.user;
    };
    AuthenticationService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthenticationService.prototype.loadToken = function () {
        var Gtoken = localStorage.getItem('id_token');
        this.token = Gtoken;
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/task-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskServiceService = (function () {
    function TaskServiceService(http) {
        var _this = this;
        this.http = http;
        this.addTask = function (task) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            _this.loadToken();
            headers.append('Authorization', _this.token);
            headers.append('Content-type', 'application/json');
            return _this.http.post(_this.Aurl, task, { headers: headers }).map(function (res) { return res.json(); });
        };
        this.updateTask = function (task) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            _this.loadToken();
            headers.append('Authorization', _this.token);
            headers.append('Content-type', 'application/json');
            return _this.http.put(_this.Uurl, task, { headers: headers }).map(function (res) { return res.json(); });
        };
        this.deleteTask = function (task) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            _this.loadToken();
            headers.append('Authorization', _this.token);
            headers.append('Content-type', 'application/json');
            return _this.http.post(_this.Durl, task, { headers: headers }).map(function (res) { return res.json(); });
        };
        this.getTasks = function (User) {
            var user = {
                id: User.id
            };
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
            _this.loadToken();
            headers.append('Authorization', _this.token);
            headers.append('Content-type', 'application/json');
            return _this.http.post(_this.Gurl, user, { headers: headers }).map(function (res) { return res.json(); });
        };
        this.Aurl = 'http://localhost:4444/tasks/add';
        this.Uurl = 'http://localhost:4444/tasks/update';
        this.Durl = 'http://localhost:4444/tasks/delete';
        this.Gurl = 'http://localhost:4444/tasks/tasks';
    }
    TaskServiceService.prototype.loadToken = function () {
        var Gtoken = localStorage.getItem('id_token');
        this.token = Gtoken;
    };
    return TaskServiceService;
}());
TaskServiceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], TaskServiceService);

var _a;
//# sourceMappingURL=task-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.valRegister = function (user) {
        if (user.fname == undefined || user.lname == undefined || user.uname == undefined || user.email == undefined || user.pword == undefined || user.rpword == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.regEmailValidate = function (email) {
        var Email = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if (!Email.test(email)) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.regPasswordValidate = function (pword) {
        var Pword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W|_?).{8,}$/;
        if (!Pword.test(pword)) {
            return false;
        }
        else if (/^(?=.*\s).{0,}$/.test(pword)) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.regRPasswordValidate = function (pword, rpword) {
        if (rpword !== pword) {
            return false;
        }
        else {
            return true;
        }
    };
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
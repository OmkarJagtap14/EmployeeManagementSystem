import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'EmployeeManagementSystem';
  isLoginVaild : boolean = true;

  constructor(private loginService : LoginService) {
    
   }

  ngOnInit(): void {
    this.isLoginVaild =  this.loginService.getLoginStatus();
    console.log(this.isLoginVaild);
    
  }
}

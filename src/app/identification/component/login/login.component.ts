import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { UserService } from '../../../user.service';
import { User } from '../../../../entities/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: '../../identification.css'
})
export class LoginComponent implements OnInit {
  hide = true;
  username: string = '';
  password: string = '';
  loginError: string = '';
  userList?: User[]
  currentUser?: User;

  constructor(private router: Router, private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.getUserList().subscribe({
      next: (res) => {
        this.userList = res
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log('finish');
      }
    })
  }


  login() {
    this.currentUser = this.userList?.find(user => user.name === this.username);
    console.log("hi",this.currentUser)
    if (this.currentUser) {
      if (this.currentUser.password === this.password)
      {console.log("User successfully logged in");
       this.router.navigate(["/recipe"])
      } 
      else
        this.loginError = "Wrong password, try again"
    }
    else {
      const navigationExtras: NavigationExtras = {
        queryParams: { username: this.username }
    };

      this.router.navigate(["identification/register"],navigationExtras)

    }
  }
}

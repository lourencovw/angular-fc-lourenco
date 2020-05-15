import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { CreateUserModalComponent } from './create-user-modal/create-user-modal.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-frontend-feracode-lourenco';
  user:any;
  constructor(public dialog: MatDialog, private router: Router) {

  }

  ngOnInit() {
    // if (localStorage.getItem('data')) {
    //   this.user = JSON.parse(localStorage.getItem('data'));
    // }
    localStorage.clear()
  }

  logout() {
    this.user = null;
    this.router.navigate(['']);
  }

  createUserDialog() {
    const dialogRef = this.dialog.open(CreateUserModalComponent, {
      width: '50%',
      height: '50%',
      maxWidth: '500px',
      minHeight: '500px'
    });

    dialogRef.afterClosed().subscribe(user => {
      if (user) {
        localStorage.setItem('data',JSON.stringify(user));
        this.router.navigate(['user-page']);
        this.user = user;
      }
    });
  }

  login() {
    const dialogRef = this.dialog.open(LoginModalComponent, {
      width: '50%',
      height: '50%',
      maxWidth: '500px',
      minHeight: '500px'
    });

    dialogRef.afterClosed().subscribe(bool => {
      if (bool) {
        this.user = JSON.parse(localStorage.getItem('data'));
        this.router.navigate(['user-page']);
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  currentUser: any;
  public userForm = this.fb.group({
    email: ['', [Validators.required, Validators.email, Validators.pattern(/(\w*\.)+\w*/)]],
    password: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<LoginModalComponent>,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    if (localStorage.getItem('data')) {
      this.currentUser = JSON.parse(localStorage.getItem('data'));
    }
  }

  login() {
    if (this.currentUser) {
      if (this.currentUser.email === this.userForm.value.email && this.currentUser.password === this.userForm.value.password) {
        this.dialogRef.close(true);
      } else {
        this.snackBar.open('Please check your email and password and try again.', 'Close', {
          duration: 2000,
        });
      }
    } else {
      this.snackBar.open('Please check your email and password and try again.', 'Close', {
        duration: 2000,
      });
    }
  }

}

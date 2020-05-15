import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user-modal',
  templateUrl: './create-user-modal.component.html',
  styleUrls: ['./create-user-modal.component.scss'],
})
export class CreateUserModalComponent implements OnInit {
  public userForm = this.fb.group({
    name: ['', [Validators.required,Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email, Validators.pattern(/(\w*\.)+\w*/)]],
    phone: ['', [Validators.required,Validators.minLength(9)]],
    password: ['', [Validators.required]],
  });
  public currentDate: string;
  constructor(private router: Router,private fb: FormBuilder, public dialogRef: MatDialogRef<CreateUserModalComponent>) { }

  ngOnInit() {
    let d = new Date();
    let curr_date = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
    let curr_month = d.getMonth() < 9 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1 ;
    this.currentDate = curr_month + "/" + curr_date + "/" + d.getFullYear();
  }
  login() {
    this.dialogRef.close(false);
  }
  createUser() {
    let user = this.userForm.value;
    user.date = this.currentDate;
    this.dialogRef.close(user);
  }
  

}

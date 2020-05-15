import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { CreateUserModalComponent } from './create-user-modal/create-user-modal.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatFormFieldModule, MatSnackBarModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgKnifeModule } from 'ng-knife';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    UserPageComponent,
    LoginModalComponent,
    CreateUserModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    NgKnifeModule,
    MatSnackBarModule
  ],
  entryComponents: [
    CreateUserModalComponent,
    LoginModalComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


@NgModule({
 
  imports: [
    CommonModule,
    BrowserModule,

    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    UserDetailsComponent
  ]
})
export class UsersModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { UsersComponent } from './users/users/users.component';

// const routes = [
//   {path: 'users', component: UsersComponent},
//   // {path: '', component: AppComponent}

// ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

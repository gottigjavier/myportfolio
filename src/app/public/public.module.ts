import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { SharedModule } from '../core/shared/shared.module';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/containers/home/home.component';
import { LoginComponent } from './login/containers/login/login.component';



@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    SharedModule,
    PublicRoutingModule,
    CommonModule
  ]
})
export class PublicModule {
  constructor() {}
}

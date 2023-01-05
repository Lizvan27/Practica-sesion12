import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CompnentsModule } from '../compnents/compnents.module';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CompnentsModule
  ]
})
export class PagesModule { }

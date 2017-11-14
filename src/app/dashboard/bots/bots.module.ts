import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotsComponent } from './bots.component';
import { BotsRoutingModule } from './bot-routing.module';


@NgModule({
  imports: [
    CommonModule,
    BotsRoutingModule
  ],
  declarations: [
    BotsComponent
  ]
})
export class BotsModule { }

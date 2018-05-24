import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    PipesModule
  ],
  declarations: [
    CardComponent,
  ],
  exports: [
    CardComponent,
  ]
})
export class SharedModule { }

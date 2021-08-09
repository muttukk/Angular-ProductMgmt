import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../shared/StarComponent/star.component';
import { ConvertToSpacePipe } from '../shared/convert-to-space';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ConvertToSpacePipe,  
    StarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ConvertToSpacePipe,  
    StarComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }

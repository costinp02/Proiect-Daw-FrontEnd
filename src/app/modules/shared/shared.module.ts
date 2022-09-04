import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogAddEditPublisherComponent } from './dialog-add-edit-publisher/dialog-add-edit-publisher.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    DialogAddEditPublisherComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents:[
    DialogAddEditPublisherComponent
  ]
})
export class SharedModule { }

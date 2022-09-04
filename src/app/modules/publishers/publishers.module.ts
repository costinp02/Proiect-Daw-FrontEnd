import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishersComponent } from './publishers/publishers.component';
import {PublishersRoutingModule} from "./publishers-routing.module";
import {MatTableModule} from "@angular/material/table";
import { PublisherComponent } from './publisher/publisher.component';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    PublishersComponent,
    PublisherComponent
  ],
    imports: [
        CommonModule,
        PublishersRoutingModule,
        MatTableModule,
        MatIconModule,
        MatCardModule,
        MatDialogModule

    ]
})
export class PublishersModule { }

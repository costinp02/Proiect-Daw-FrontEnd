import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PublishersComponent} from "./publishers/publishers.component";
import {PublisherComponent} from "./publisher/publisher.component";

const routes: Routes = [
  {
    path: '',
    redirectTo:'publishers',
    pathMatch: 'full'
  },
  {
    path: 'publishers',
    component : PublishersComponent
  },
  {
    path: 'publisher/:id',
    component: PublisherComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublishersRoutingModule { }

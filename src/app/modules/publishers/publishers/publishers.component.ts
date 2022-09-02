import { Component, OnInit } from '@angular/core';
import {PublishersService} from "../../../services/publishers.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.scss']
})
export class PublishersComponent implements OnInit {

  public publishers: any;
  public displayedColumns: string[] = ['id', 'name', 'country', 'rating','profile','delete'];
  constructor(
    private publishersService: PublishersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPublishers();
  }

  public getPublishers(): void {
    this.publishersService.getPublishers().subscribe((result) =>{
      this.publishers = result;
    });
  }

  public addData(): void {
    const publisher = {
      id : 5,
      name : 'new publisher',
      country : 'origin',
      rating : 0
    };
    this.publishersService.createPublisher(publisher).subscribe(() =>{
      this.getPublishers();
    });
  }

  public deletePublisher(id:any):void{
  this.publishersService.deletePublisher(id).subscribe(() =>{
    this.getPublishers();
  })
  }

  public goToPublisherPorfile( id: any):void{
    this.router.navigate(['/publisher',id]);
  }

}

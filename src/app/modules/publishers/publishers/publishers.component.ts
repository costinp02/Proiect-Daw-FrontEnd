import { Component, OnInit } from '@angular/core';
import {PublishersService} from "../../../services/publishers.service";
import {Router} from "@angular/router";
import {MatDialog, MatDialogConfig, MatDialogModule} from "@angular/material/dialog";
import {
  DialogAddEditPublisherComponent
} from "../../shared/dialog-add-edit-publisher/dialog-add-edit-publisher.component";

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.scss']
})
export class PublishersComponent implements OnInit {

  public publishers: any;
  public displayedColumns: string[] = ['id', 'name', 'country', 'rating','profile', 'edit', 'delete'];
  constructor(
    private publishersService: PublishersService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getPublishers();
  }

  public getPublishers(): void {
    this.publishersService.getPublishers().subscribe((result) =>{
      this.publishers = result;
    });
  }

  // @ts-ignore
  public addData(publisher?): void {
    const data = {
      publisher
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(DialogAddEditPublisherComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) =>{
      if (result){
        this.getPublishers();
      }
    });
    // const publisher = {
    //   id : 5,
    //   name : 'new publisher',
    //   country : 'origin',
    //   rating : 0
    // };
    // this.publishersService.createPublisher(publisher).subscribe(() =>{
    //   this.getPublishers();
    // });
  }

  public deletePublisher(id:any):void{
  this.publishersService.deletePublisher(id).subscribe(() =>{
    this.getPublishers();
  })
  }

  // @ts-ignore
  public editPublisher(publisher):void{
    this.addData(publisher);
  }

  public goToPublisherPorfile( id: any):void{
    this.router.navigate(['/publisher',id]);
  }

}

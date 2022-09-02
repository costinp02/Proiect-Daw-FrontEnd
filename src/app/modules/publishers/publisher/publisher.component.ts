import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PublishersService} from "../../../services/publishers.service";

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.scss']
})
export class PublisherComponent implements OnInit, OnDestroy {

  public id: number | undefined;
  private sub: any;
  public publisher: any;
  public games: any;

  constructor(
    private route: ActivatedRoute,
    private publishersService: PublishersService
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      // console.log(this.id)
      if(this.id) {
        this.getPublisher();
      }
    });
  }
  public getPublisher(): void{
    this.publishersService.getPublisherById(this.id).subscribe((result) =>{
      console.log(result);
      this.publisher = result;
      this.games = result.games;

    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

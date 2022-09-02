import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PublishersService {

  public  url = 'https://localhost:44344/api/publisher';
  constructor(
    private  http: HttpClient
  ) { }

  public getPublishers(): Observable<any>{
    return  this.http.get<any>(this.url);
  }

  public getPublisherById(id: any): Observable<any>{
    return this.http.get(`${this.url}/byId/${id}`);
  }

  public createPublisher(publisher: any) : Observable<any>{
    return this.http.post(`${this.url}/withObj`, publisher);
  }

  public deletePublisher(id: any): Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
}

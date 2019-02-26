import { Component, OnInit } from '@angular/core';
import {RequestService} from '../services/request.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers:[RequestService]
})
export class TableComponent implements OnInit {


  public jobs;

  constructor(
    private _requestService: RequestService
  ) { }

  ngOnInit() {
    this._requestService.getJobs().subscribe(
        result => {
          console.log(result);
        },

        error =>{
          var  err = <any>error;
          console.log(err);
        }

    );

    console.log(this._requestService.getTest());
  }

}

export interface urlElements {
  id: number;
  Url: string;
  status: string;
}

export const ELEMENT_DATA: urlElements[] = [
  {id: 1, Url: 'www.google.com', status: 'PENDING'},
  {id: 2, Url: 'www.facebook.com', status: 'PROCESSING'},
  {id: 3, Url: 'www.facebook.com', status: 'PROCESSING'},
  {id: 4, Url: 'www.facebook.com', status: 'PROCESSING'},
  {id: 5, Url: 'www.facebook.com', status: 'PROCESSING'},
  {id: 6, Url: 'www.facebook.com', status: 'PROCESSING'},
  {id: 7, Url: 'www.aviation.ink', status: 'DONE'},
  {id: 8, Url: 'www.aviation.ink', status: 'DONE'},
  {id: 9, Url: 'www.aviation.ink', status: 'DONE'},
  {id: 10, Url: 'www.youtube.com', status: 'PENDING'},
  {id: 11, Url: 'www.instagram.com', status: 'PENDING'},
  {id: 12, Url: 'www.instagram.com', status: 'PENDING'},
  {id: 13, Url: 'www.aviation.ink', status: 'DONE'},
  {id: 14, Url: 'www.aviation.ink', status: 'DONE'},
  {id: 15, Url: 'www.instagram.com', status: 'PENDING'},
  {id: 16, Url: 'www.instagram.com', status: 'PENDING'},
];

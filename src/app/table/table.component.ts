import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {



  constructor() { }

  ngOnInit() {
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
  {id: 2, Url: 'www.facebook.com', status: 'PROCESSING'},
  {id: 2, Url: 'www.facebook.com', status: 'PROCESSING'},
  {id: 2, Url: 'www.facebook.com', status: 'PROCESSING'},
  {id: 2, Url: 'www.facebook.com', status: 'PROCESSING'},
  {id: 3, Url: 'www.aviation.ink', status: 'DONE'},
  {id: 3, Url: 'www.aviation.ink', status: 'DONE'},
  {id: 3, Url: 'www.aviation.ink', status: 'DONE'},
  {id: 4, Url: 'www.youtube.com', status: 'PENDING'},
  {id: 5, Url: 'www.instagram.com', status: 'PENDING'},
  {id: 5, Url: 'www.instagram.com', status: 'PENDING'},
  {id: 3, Url: 'www.aviation.ink', status: 'DONE'},
  {id: 3, Url: 'www.aviation.ink', status: 'DONE'},
  {id: 5, Url: 'www.instagram.com', status: 'PENDING'},
  {id: 5, Url: 'www.instagram.com', status: 'PENDING'},
];

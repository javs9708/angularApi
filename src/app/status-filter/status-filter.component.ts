import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-status-filter',
  templateUrl: './status-filter.component.html',
  styleUrls: ['./status-filter.component.css']
})
export class StatusFilterComponent implements OnInit {

    public url:string;
    public state:string;


    states = [
      {value: 'pending-1', viewValue: 'PENDING'},
      {value: 'processing-2', viewValue: 'PROCESSING'},
      {value: 'done-3', viewValue: 'DONE'},
      {value: 'all-4', viewValue: 'ALL'}
    ];

    displayedColumns: string[] = ['ID', 'URL','STATUS' ];
    dataSource = new MatTableDataSource<urlElements>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.state="all"

    }


}


export interface urlElements {
  id: number;
  Url: string;
  status: string;
}

const ELEMENT_DATA: urlElements[] = [
  {id: 1, Url: 'www.google.com', status: 'PENDING'},
  {id: 2, Url: 'www.facebook.com', status: 'PROCESSING'},
  {id: 3, Url: 'www.aviation.ink', status: 'DONE'},
  {id: 4, Url: 'www.youtube.com', status: 'PENDING'},
];

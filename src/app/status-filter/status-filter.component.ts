import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {ELEMENT_DATA} from '../table/table.component'
import { InfoPending } from '../class/infoPending';


@Component({
  selector: 'app-status-filter',
  templateUrl: './status-filter.component.html',
  styleUrls: ['./status-filter.component.css']
})
export class StatusFilterComponent implements OnInit {

    public url:string;
    public state:string;
    public p:number=1;
    public infoPending:Array<InfoPending>;
    public infoProcessing:Array<InfoPending>;
    public infoDone:Array<InfoPending>;



    info=ELEMENT_DATA;

    states = [
      {value: 'pending-1', viewValue: 'PENDING'},
      {value: 'processing-2', viewValue: 'PROCESSING'},
      {value: 'done-3', viewValue: 'DONE'},
      {value: 'all-4', viewValue: 'ALL'}
    ];

    //displayedColumns: string[] = ['ID', 'URL','STATUS' ];
    //dataSource = new MatTableDataSource<urlElements>(ELEMENT_DATA);

    //@ViewChild(MatPaginator) paginator: MatPaginator;
    constructor(){
      this.infoPending = [ new InfoPending()
                     ];
      this.infoProcessing = [ new InfoPending()
                    ];

      this.infoDone = [ new InfoPending()
                     ];
    }
    ngOnInit() {
    //this.dataSource.paginator = this.paginator;
    //this.state="all"
    this.state="empty";
    let i=0;
    let j=0;
    let k=0;

    for(let e of this.info){
        if(e.status=="PENDING"){
          this.infoPending[i]=e;
          i++;
        }
      }

      for(let e of this.info){
          if(e.status=="PROCESSING"){
            this.infoProcessing[j]=e;
            j++;
          }
        }

        for(let e of this.info){
            if(e.status=="DONE"){
              this.infoDone[k]=e;
              k++;
            }
          }
    }


}

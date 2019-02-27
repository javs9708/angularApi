import { Component, OnInit, ViewChild } from '@angular/core';
import { InfoPending } from '../class/infoPending';
import {RequestService} from '../services/request.service';


@Component({
  selector: 'app-status-filter',
  templateUrl: './status-filter.component.html',
  styleUrls: ['./status-filter.component.css'],
  providers:[RequestService]
})
export class StatusFilterComponent implements OnInit {

    public url:string;
    public state:string;
    public p:number=1;
    public infoPending:Array<InfoPending>;
    public infoProcessing:Array<InfoPending>;
    public infoDone:Array<InfoPending>;
    public info;

    states = [
      {value: 'pending-1', viewValue: 'PENDING'},
      {value: 'processing-2', viewValue: 'PROCESSING'},
      {value: 'done-3', viewValue: 'DONE'},
      {value: 'all-4', viewValue: 'ALL'}
    ];


    //displayedColumns: string[] = ['ID', 'URL','STATUS' ];
    //dataSource = new MatTableDataSource<urlElements>(ELEMENT_DATA);

    //@ViewChild(MatPaginator) paginator: MatPaginator;
    constructor(private _requestService: RequestService){
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
    this._requestService.getJobs().subscribe(
        result => {
          this.info=result;

          this.state="empty";
          let i=0;
          let j=0;
          let k=0;

          for(let e of this.info){
              if(e.Status=="PENDING"){
                this.infoPending[i]=e;
                i++;
              }
            }

            for(let e of this.info){
                if(e.Status=="PROCESSING"){
                  this.infoProcessing[j]=e;
                  j++;
                }
              }

              for(let e of this.info){
                  if(e.Status=="DONE"){
                    this.infoDone[k]=e;
                    k++;
                  }
                }

        },

        error =>{
          var  err = <any>error;
          console.log(err);
        }

    );



    }


}

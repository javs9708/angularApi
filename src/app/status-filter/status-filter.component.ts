import { Component, OnInit, ViewChild } from '@angular/core';
import { InfoPending } from '../class/infoPending';
import {RequestService} from '../services/request.service';
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-status-filter',
  templateUrl: './status-filter.component.html',
  styleUrls: ['./status-filter.component.css'],
  providers:[RequestService]
})




export class StatusFilterComponent implements OnInit {

    public state:string;
    public p:number=1;
    public infoPending:url[]=[];
    public infoProcessing:url[]=[];
    public infoDone:url[]=[];
    public urlsArr:url[]=[];
    public info;
    public urlBoolean:boolean;
    public text:string;


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

    }
    ngOnInit() {
    //this.dataSource.paginator = this.paginator;
    //this.state="all"
    this._requestService.getJobs().subscribe(
        result => {
          this.info=result;

          this.state="empty";
          this.text="";
          this.urlBoolean=false

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


    change_url(){
      if(this.text==""){
        this.urlBoolean=false;
        this.urlsArr=[];
      }
      else{
        this.urlBoolean=true;
      }
      console.log(this.text);
      console.log(this.urlBoolean);
    }


    searchUrl(termino:string):url[]{
          termino  = termino.toLowerCase();
          this.urlsArr=[];
          for(let i of this.info){

            let url = i.Url.toLowerCase();

            if(url.indexOf(termino)>=0){
              this.urlsArr.push(i);
              }

            }
          console.log(this.urlsArr);
          return this.urlsArr;

        }

    }

    export interface url{
      Id:number;
      Url:string;
      Status:string;
}

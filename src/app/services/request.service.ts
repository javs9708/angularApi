import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RequestService {

  public url: string;

  constructor(private _http:Http) {
    this.url = "http://192.168.233.128:8080/";
  }

  getJobs(){
    return this._http.get(this.url).map(res => res.json());
  }

  getTest(){
    return 'Hola mundo';
  }

}

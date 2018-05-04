import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the VypoctyServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VypoctyService {

	//apiUrl = 'http://127.0.0.1:8000';
	apiUrl = '../../vypocty.json';

  	constructor(public http: HttpClient) {
    	//console.log('Hello PostupyService Provider');
  	}

  	getVypocty() {
	  return new Promise(resolve => {
	    this.http.get(this.apiUrl).subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
	}

}

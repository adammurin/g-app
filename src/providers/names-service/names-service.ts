import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NamesService {

	apiUrl = './assets/json/names.json';

  	constructor(public http: HttpClient) {
  	}

  	getNames() {
	  return new Promise(resolve => {
	    this.http.get(this.apiUrl).subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
	}

}

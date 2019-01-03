import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductService {

 private baseUrl:string = environment.API_URL;
 private headers = new HttpHeaders({"Content-Type": "application/json","Access-Control-Allow-Origin":"*"});

  constructor(private http: HttpClient) {
  }

  fetchProductModelList() :Observable<any> {
    let body = "";
    return this.http.post(this.baseUrl+"products/fetchAll", body, {headers:this.headers})
          .map((res) => {
            return res;
          }).catch((error:any) => {
            console.log(error);
            return error;
    });
  }

  // Method to fetch all models list
/*  fetchProductModelList(): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Accept","application/json");
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Access-Control-Allow-Methods', 'GET, PUT, POST');
    headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    console.log(this.baseUrl + "/products/fetchAll");
    return this.httpClient.post(this.baseUrl + "/products/fetchAll",
        { headers }
      )
      .map((res) => {
        return res;
      })
      .catch((error: any) => {
        console.log(error);
        return error;
      });
  }
*/
}

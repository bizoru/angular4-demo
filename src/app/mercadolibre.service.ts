import { Injectable } from '@angular/core';
import { Producto } from './models/producto';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class MercadolibreService {

  endpoint = "https://api.mercadolibre.com/sites/MCO/search?q=";
  constructor(private http: Http) { }

  traerIpod(query:string): Promise<Producto[]> {
    let url = this.endpoint + "ipod";
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().results as Producto[])
      .catch(this.handleError);
  }

  traerProductos(query:string): Promise<Producto[]> {
    let url = this.endpoint + query;
    console.log(url);
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().results as Producto[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

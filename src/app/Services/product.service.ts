import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  add(data: any) {
    return this.httpClient.post(this.url + "/product/add", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  update(id: any) {
    return this.httpClient.put(`${this.url}/product/update/${id}`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  getProduct() {
    return this.httpClient.get(this.url + "/product/get")
  }


  updateStatus(id: any) {
    return this.httpClient.put(`${this.url}/product/updatestatus/${id}`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  delete(id: any) {
    return this.httpClient.delete(`${this.url}/product/delete/${id}`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  getProductByCategory(id:any) {
    return this.httpClient.get(this.url+"/product/getproductbycategory/"+id);
  }

  getProductById(id:any) {
    return this.httpClient.get(this.url+"/product/getproductbyid/"+id);
  }

}

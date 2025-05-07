import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIsService {

  constructor(private httpClient: HttpClient) { }

  getapis(): Observable<any> {
    // Prepare the Authorization header
    const username = 'Int.user';
    const password = 'Sap@Bco123456789';
    const authHeader = 'Basic ' + btoa(`${username}:${password}`);

    const headers = new HttpHeaders({
      'Authorization': authHeader
    });

    return this.httpClient.get(
      `/api/sap/opu/odata/sap/ZSD_MOB_APP_ODATA2_SRV/salesRepDataSet('17')?sap-client=110&$format=json`,
      { headers }
    );
    
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

   apiRoute = "http://localhost:9090/demo";

  constructor() { }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  

  constructor() { }

  clicked!:boolean

  setClicked(data:boolean)
  {
    console.log(data);
     this.clicked=data;
  }

  getClicked():boolean
  {
    return this.clicked;
  }

}

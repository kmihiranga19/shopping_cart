import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefineService {

  constructor() { }

  productSerive(){
    return [
      {
        id:1,
        name:"item1"
      },

      {
        id:2,
        name:"item2"
      },

      {
        id:3,
        name:"item3"
      },

      {
        id:4,
        name:"item4"
      },
    ]
  }


}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public userName: string = 'Victor';

  constructor() { }
}

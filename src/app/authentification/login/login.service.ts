import { EventEmitter, Injectable } from '@angular/core';
import { DatabaseService } from '../../quote-DataBase-quote/qDATABASEq.service';

@Injectable()
export class LoginService {

  loginStatus = new EventEmitter<boolean>();
  isAuthStatus = new EventEmitter<boolean>();

  constructor(private database: DatabaseService){}


}

import { EventEmitter, Injectable } from '@angular/core';
import { DatabaseService } from '../../quote-DataBase-quote/qDATABASEq.service';

@Injectable()
export class SignupService {

  sign_upStatus = new EventEmitter<boolean>();

  constructor(private database: DatabaseService){}




}

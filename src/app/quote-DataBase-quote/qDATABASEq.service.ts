import database from './db.json';

export class DatabaseService{

  private dbJSON = JSON.stringify(database);
  private database = JSON.parse(this.dbJSON);


  getUsers(){
    return this.database.users;
  }

  // getUsersId(){
  //   return this.database.users.id;
  // }

  // getUsersUsername(){
  //   return this.database.users.username;
  // }

  // getUsersEmail(){
  //   return this.database.users.email;
  // }

  // getUsersPassword(){
  //   return this.database.users.password;
  // }

  // getUsersEvents(){
  //   return this.database.users.events;
  // }

  // // getUsersEventName(){
  // //   return this.database.users.events.name;
  // // }

  // getUsersEventFrom(){
  //   return this.database.users.events.from;
  // }

  // getUsersEventTo(){
  //   return this.database.users.events.to;
  // }

  // getUsersEventReccurence(){
  //   return this.database.users.events.reccurence;
  // }

  // getUsersEventDay(){
  //   return this.database.users.events.day;
  // }

  //  getUsersEventId(){
  //   return this.database.users.events.id;
  // }

  // getUsersEventDescription(){
  //   return this.database.users.events.description;
  // }

}

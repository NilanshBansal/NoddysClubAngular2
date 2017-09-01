import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {
  items: FirebaseListObservable<any[]>;
  objects:FirebaseObjectObservable<any[]>;
  
  constructor(private db:AngularFireDatabase) { 
    this.items = db.list('/items');
    console.log(this.items);
    console.log("oehoe");
    this.objects=db.object('/items');
    console.log(this.objects.$ref);
    
  }
    
}

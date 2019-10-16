import { Injectable } from '@angular/core';
import { Message } from './message';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  allMessages : Observable<Message[]>;

  // collection of object <--> database
  messageCollection : AngularFirestoreCollection<Message>;

  constructor(private fb : AngularFirestore) {
    this.messageCollection = fb.collection<Message>('messages');
  
    this.retrieveMessageFromDB();
  }

  private retrieveMessageFromDB() {
    this.allMessages = this.messageCollection.snapshotChanges().pipe(
        map( actions => {
          return actions.map( m => {
              var data = m.payload.doc.data();
              var id = m.payload.doc.id;
              var d : any = data.createdOn;
              data.createdOn = new firestore.Timestamp(
                d.seconds,
                d.nanoseconds
              ).toDate();
              return { id, ...data};
          });
        })
    );
  }

  public postMessage(message : Message) {
   // this.allMessages.push(message);
  
    var item = Object.assign({}, message);
    this.messageCollection.add(item);
  }

  public getAllMessages() {
    return this.allMessages;
  }

}

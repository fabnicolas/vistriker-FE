import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  private channel_name_subject = new Subject<string>();
  
  setActualChannelName(new_name: string) {this.channel_name_subject.next(new_name);}
  getActualChannel_asObservable(): Observable<string> {return this.channel_name_subject.asObservable();}
}

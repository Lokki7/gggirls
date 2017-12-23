import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StreamsService {

  constructor(private http: HttpClient) {
  }


  getStreams(): Observable<any[]> {
    return this.http.get<any[]>('https://goodgame.ru/api/4/stream/?girls=1');
  }

  getStream(id: string): Observable<any> {
    return this.http.get<any>('https://goodgame.ru/api/4/stream/' + id);
  }

}

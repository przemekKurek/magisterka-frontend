import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Statistics} from "./statisctics";

@Injectable({
  providedIn: 'root'
})
export class RestWarService {

  baseUrl: string = 'http://localhost:8080/game/'

  constructor(private http: HttpClient) {
  }

  getStats(strategy: string): Observable<Statistics> {
    return this.http.get<Statistics>(this.baseUrl + 'two/' + strategy + '/statistics', { responseType: 'json' });
  }
}

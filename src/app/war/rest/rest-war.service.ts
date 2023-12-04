import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {PlayersStrategyDTO, Statistics} from "./statisctics";

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

  gameWithStrategyForStatistics(playersStrategyDTO: PlayersStrategyDTO): Observable<Statistics> {
    return this.http.post<Statistics>(this.baseUrl + 'statistics', playersStrategyDTO, { responseType: 'json' });
  }

  compareStrategyWithBasicStrategies(strategy: string): Observable<Statistics[]> {
    return this.http.get<Statistics[]>(this.baseUrl + 'compare/' + strategy, { responseType: 'json' });
  }
}

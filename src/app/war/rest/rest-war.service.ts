import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {PlayersStrategyDTO, Statistics} from "./statisctics";
import {StrengthDTO} from "./strength";

@Injectable({
  providedIn: 'root'
})
export class RestWarService {

  baseUrl: string = 'http://localhost:8080/game/'

  constructor(private http: HttpClient) {
  }


  gameWithStrategyForStatistics(playersStrategyDTO: PlayersStrategyDTO): Observable<Statistics> {
    return this.http.post<Statistics>(this.baseUrl + 'statistics', playersStrategyDTO, { responseType: 'json' });
  }

  compareStrategyWithBasicStrategies(playersStrategyDTO: PlayersStrategyDTO): Observable<Statistics[]> {
    return this.http.post<Statistics[]>(this.baseUrl + 'compare', playersStrategyDTO, { responseType: 'json' });
  }

  compareStrength(strength: StrengthDTO): Observable<Statistics[]> {
    return this.http.post<Statistics[]>(this.baseUrl + 'strength-comparison', strength, { responseType: 'json' });
  }

  getStatisticsAndDetectCycles(playersStrategyDTO: PlayersStrategyDTO): Observable<Statistics> {
    return this.http.post<Statistics>(this.baseUrl + 'statistics-with-cycles', playersStrategyDTO, { responseType: 'json' });
  }

  getStatisticsWithBreakingCycles(playersStrategyDTO: PlayersStrategyDTO): Observable<Statistics> {
    return this.http.post<Statistics>(this.baseUrl + 'statistics-with-breaking-cycles', playersStrategyDTO, { responseType: 'json' });
  }

}

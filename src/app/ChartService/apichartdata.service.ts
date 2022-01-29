import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GovData, lineChartData, lineChartDataold } from "app/model/chart";
import { Observable, of } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class apichartdataService {
  constructor(private httpclient: HttpClient) {}

  getChartData(): Observable<GovData[]> {
    return this.httpclient
      .get<GovData[]>("assets/data.json")
      .pipe(shareReplay());
  }
}

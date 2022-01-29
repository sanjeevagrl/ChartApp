import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { apichartdataService } from "app/ChartService/apichartdata.service";
import { GovData, lineChartData, lineChartDataold } from "app/model/chart";
import * as Chartist from "chartist";
import { Observable, Subscription } from "rxjs";
import { ChartConfiguration, ChartEvent, ChartType } from "chart.js";
import { BaseChartDirective } from "ng2-charts";
import { map } from "rxjs/operators";
import { helperfunction } from "app/CommonUtil/helperfunction";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit, OnDestroy {
  private SpentAmoutData$: Subscription;
  private totalSpentPerExpense$: Subscription;
  private allGovData$: Observable<GovData[]>;

  SpentAmoutData: lineChartData;
  totalSpentPerExpense: lineChartData;
  constructor(private chartdataService: apichartdataService) {}

  ngOnInit() {
    this.allGovData$ = this.chartdataService.getChartData();
    this.getSpentAmoutData();
    this.gettotalSpentPerExpense();
  }

  getSpentAmoutData() {
    this.SpentAmoutData$ = this.allGovData$
      .pipe(
        map((group) => {
          return helperfunction.groupbyData(
            group,
            "Date",
            "Amount"
          ) as GovData[];
          // return this.groupbyData(group, "Date", "Amount") as GovData[];
        }),
        map((m) => {
          return {
            labels: m.map((m1) => m1.Date.substring(0, 2)),
            datasets: [
              { data: m.map((m1) => m1.Amount), label: "Spendamount " },
              {
                data: m.map((m1) => m1.noofRecord),
                label: "noOfTrasansaction",
              },
            ],
          };
        })
      )
      .subscribe((data) => {
        this.SpentAmoutData = data;
      });
  }
  gettotalSpentPerExpense() {
    this.totalSpentPerExpense$ = this.allGovData$
      .pipe(
        map((group) => {
          return helperfunction.groupbyData(
            group,
            "ExpenseType",
            "Amount"
          ) as GovData[];
        }),
        map((m) => {
          return {
            labels: m.map((m1) => m1.ExpenseType),
            datasets: [
              {
                data: m.map((m1) => m1.Amount),
                label: "Total spend per ExpenseType",
              },
            ],
          };
        })
      )
      .subscribe((data) => {
        console.log("totalSpentPerExpense", data);

        this.totalSpentPerExpense = data;
      });
  }

  ngOnDestroy(): void {
    this.SpentAmoutData$.unsubscribe();
    this.SpentAmoutData$.unsubscribe();
  }
}

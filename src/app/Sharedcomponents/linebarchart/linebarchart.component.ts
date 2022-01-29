import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { GovData, lineChartData } from "app/model/chart";
import * as Chartist from "chartist";
import { Subscription } from "rxjs";
import { ChartConfiguration, ChartEvent, ChartType } from "chart.js";
import { BaseChartDirective } from "ng2-charts";
@Component({
  selector: "app-linebarchart",
  templateUrl: "./linebarchart.component.html",
  styleUrls: ["./linebarchart.component.scss"],
})
export class LinebarchartComponent implements OnInit {
  @Input("dataset") dataset;

  public lineChartData: ChartConfiguration["data"];

  public lineChartOptions: ChartConfiguration["options"] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      x: {},
      "y-axis-0": {
        position: "left",
      },
      "y-axis-1": {
        position: "right",
        grid: {
          color: "rgba(255,0,0,0.3)",
        },
        ticks: {
          color: "red",
        },
      },
    },
  };

  public lineChartType: ChartType = "line";

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  constructor() {}

  ngOnInit(): void {
    this.lineChartData = this.dataset;
  }
}

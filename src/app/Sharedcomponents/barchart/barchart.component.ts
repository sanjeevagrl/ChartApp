import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from "chart.js";
import { BaseChartDirective } from "ng2-charts";
import DataLabelsPlugin from "chartjs-plugin-datalabels";
import { lineChartData } from "app/model/chart";

@Component({
  selector: "app-barchart",
  templateUrl: "./barchart.component.html",
  styleUrls: ["./barchart.component.scss"],
})
export class BarchartComponent implements OnInit {
  @Input("dataset") dataset: lineChartData;

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration["options"] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: "end",
        align: "end",
      },
    },
  };
  public barChartType: ChartType = "bar";
  public barChartPlugins = [DataLabelsPlugin];

  public barChartData: ChartData<"bar">;
  constructor() {}

  ngOnInit(): void {
    this.barChartData = this.dataset;
  }
}

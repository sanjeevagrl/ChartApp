export interface lineChartDataold {
  labels: string[];
  series: [number[]];
}

export interface GovData {
  Date: string;
  ExpenseType: string;
  ExpenseArea: string;
  Supplier: string;
  TransactionNumber: number;
  Amount: number;
  InvoiceCurrencyUnit: string;
  noofRecord?: number;
}

export interface lineChartData {
  datasets: {
    data: number[];
    label?: string;
    backgroundColor?: string;
    borderColor?: string;
    pointBackgroundColor?: string;
    pointBorderColor?: string;
    pointHoverBackgroundColor?: string;
    pointHoverBorderColor?: string;
    fill?: string;
  }[];
  labels: string[];
}

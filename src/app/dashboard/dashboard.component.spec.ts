import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { DashboardComponent } from "./dashboard.component";
import { apichartdataService } from "app/ChartService/apichartdata.service";
import { from, observable } from "rxjs";

describe("DashboardComponent", () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let service: apichartdataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DashboardComponent],
    }).compileComponents();
    service = new apichartdataService(null);
    component = new DashboardComponent(service);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it("should set dashboard propert of SpentAmoutData with the item which return by gov servie", () => {
    spyOn(service, "getChartData").and.callFake(() => {
      return from([
        [
          {
            Date: "01/01/2011",
            ExpenseType: "Secondments",
            ExpenseArea: "Chief Executive",
            Supplier: "University of Nottingham",
            TransactionNumber: 97733007,
            Amount: 50,
            InvoiceCurrencyUnit: "GBP",
          },
        ],
      ]);
      component.ngOnInit();
      expect(component.SpentAmoutData.datasets.length).toBe(1);
    });
  });
  it("should set dashboard propert of totalSpentPerExpense with the item which return by gov servie", () => {
    spyOn(service, "getChartData").and.callFake(() => {
      return from([
        [
          {
            Date: "01/01/2011",
            ExpenseType: "Secondments",
            ExpenseArea: "Chief Executive",
            Supplier: "University of Nottingham",
            TransactionNumber: 97733007,
            Amount: 50,
            InvoiceCurrencyUnit: "GBP",
          },
        ],
      ]);
      component.ngOnInit();
      expect(component.totalSpentPerExpense.datasets.length).toBe(1);
    });
  });
});

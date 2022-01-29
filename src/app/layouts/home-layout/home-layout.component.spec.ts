import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";

import { HomeLayoutComponent } from "./home-layout.component";

xdescribe("HomeLayoutComponent", () => {
  let component: HomeLayoutComponent;
  let fixture: ComponentFixture<HomeLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeLayoutComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

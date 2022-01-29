import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { HomeLayoutComponent } from "./layouts/home-layout/home-layout.component";
import { ComponentsModule } from "./Sharedcomponents/components.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NgChartsModule } from "ng2-charts";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgChartsModule,
  ],
  declarations: [AppComponent, HomeLayoutComponent, DashboardComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

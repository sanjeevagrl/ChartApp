import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  private listTitles: any[];
  mobile_menu_visible: any = 0;
  private toggleButton: any;
  private sidebarVisible: boolean;

  constructor() {
    this.sidebarVisible = false;
  }

  ngOnInit() {}
}

import { TestBed } from "@angular/core/testing";

import { apichartdataService } from "./apichartdata.service";

xdescribe("apichartdataService", () => {
  let service: apichartdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(apichartdataService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});

import { DocumentService } from "./document.service";
import { TestBed } from "@angular/core/testing";

describe("DocumentService", () => {

  let service: DocumentService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DocumentService
      ]
    });
    service = TestBed.get(DocumentService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});

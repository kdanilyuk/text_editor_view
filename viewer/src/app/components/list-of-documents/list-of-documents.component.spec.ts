import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ListOfDocumentsComponent } from "./list-of-documents.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ListOfDocumentsComponent", () => {

  let fixture: ComponentFixture<ListOfDocumentsComponent>;
  let component: ListOfDocumentsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ListOfDocumentsComponent]
    });

    fixture = TestBed.createComponent(ListOfDocumentsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

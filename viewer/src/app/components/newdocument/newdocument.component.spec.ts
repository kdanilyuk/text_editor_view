import { NO_ERRORS_SCHEMA } from "@angular/core";
import { NewdocumentComponent } from "./newdocument.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("NewdocumentComponent", () => {

  let fixture: ComponentFixture<NewdocumentComponent>;
  let component: NewdocumentComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [NewdocumentComponent]
    });

    fixture = TestBed.createComponent(NewdocumentComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

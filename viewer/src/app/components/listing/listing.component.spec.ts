import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ListingComponent } from "./listing.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ListingComponent", () => {

  let fixture: ComponentFixture<ListingComponent>;
  let component: ListingComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ListingComponent]
    });

    fixture = TestBed.createComponent(ListingComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

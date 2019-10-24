import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ListOfUsersComponent } from "./list-of-users.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ListOfUsersComponent", () => {

  let fixture: ComponentFixture<ListOfUsersComponent>;
  let component: ListOfUsersComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ListOfUsersComponent]
    });

    fixture = TestBed.createComponent(ListOfUsersComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

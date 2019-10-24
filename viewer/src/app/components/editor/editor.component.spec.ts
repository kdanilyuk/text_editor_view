import { NO_ERRORS_SCHEMA } from "@angular/core";
import { EditorComponent } from "./editor.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("EditorComponent", () => {

  let fixture: ComponentFixture<EditorComponent>;
  let component: EditorComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [EditorComponent]
    });

    fixture = TestBed.createComponent(EditorComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

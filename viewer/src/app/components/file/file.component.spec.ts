import { NO_ERRORS_SCHEMA } from "@angular/core";
import { FileComponent } from "./file.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("FileComponent", () => {

  let fixture: ComponentFixture<FileComponent>;
  let component: FileComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [FileComponent]
    });

    fixture = TestBed.createComponent(FileComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});

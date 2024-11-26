import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TestComponent } from './test.component';

describe('Test', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [TestComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TestComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TestComponent);
    const app = fixture.debugElement.componentInstance;

    const spy = spyOn(TestComponent , app.debounceTimeExample);

    expect(app).toBeTruthy();
  });
});
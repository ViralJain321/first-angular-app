import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrDirectivesComponent } from './attr-directives.component';

describe('AttrDirectivesComponent', () => {
  let component: AttrDirectivesComponent;
  let fixture: ComponentFixture<AttrDirectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttrDirectivesComponent]
    });
    fixture = TestBed.createComponent(AttrDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

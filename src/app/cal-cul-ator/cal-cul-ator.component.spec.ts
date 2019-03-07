import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalCulAtorComponent } from './cal-cul-ator.component';

describe('CalCulAtorComponent', () => {
  let component: CalCulAtorComponent;
  let fixture: ComponentFixture<CalCulAtorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalCulAtorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalCulAtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

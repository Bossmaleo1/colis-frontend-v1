import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedierComponent } from './Expedier.component';

describe('ExpedierComponent', () => {
  let component: ExpedierComponent;
  let fixture: ComponentFixture<ExpedierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpedierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpedierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

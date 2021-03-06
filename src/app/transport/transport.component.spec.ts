import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportComponent } from './Transport.component';

describe('TransportComponent', () => {
  let component: TransportComponent;
  let fixture: ComponentFixture<TransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

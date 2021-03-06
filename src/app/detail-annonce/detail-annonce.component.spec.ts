import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAnnonceComponent } from './detail-annonce.component';

describe('DetailAnnonceComponent', () => {
  let component: DetailAnnonceComponent;
  let fixture: ComponentFixture<DetailAnnonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAnnonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

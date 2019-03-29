import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfilPictureComponent } from './add-profil-picture.component';

describe('AddProfilPictureComponent', () => {
  let component: AddProfilPictureComponent;
  let fixture: ComponentFixture<AddProfilPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProfilPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProfilPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

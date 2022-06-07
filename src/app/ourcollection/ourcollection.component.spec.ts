import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurcollectionComponent } from './ourcollection.component';

describe('OurcollectionComponent', () => {
  let component: OurcollectionComponent;
  let fixture: ComponentFixture<OurcollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurcollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurcollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

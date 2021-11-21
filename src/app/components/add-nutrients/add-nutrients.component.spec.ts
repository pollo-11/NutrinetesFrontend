import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNutrientsComponent } from './add-nutrients.component';

describe('AddNutrientsComponent', () => {
  let component: AddNutrientsComponent;
  let fixture: ComponentFixture<AddNutrientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNutrientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNutrientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

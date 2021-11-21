import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNutrientsComponent } from './list-nutrients.component';

describe('ListNutrientsComponent', () => {
  let component: ListNutrientsComponent;
  let fixture: ComponentFixture<ListNutrientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNutrientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNutrientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

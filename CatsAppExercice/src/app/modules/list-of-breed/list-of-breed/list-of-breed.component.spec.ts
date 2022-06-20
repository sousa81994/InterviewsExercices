import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfBreedComponent } from './list-of-breed.component';

describe('ListOfBreedComponent', () => {
  let component: ListOfBreedComponent;
  let fixture: ComponentFixture<ListOfBreedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfBreedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfBreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

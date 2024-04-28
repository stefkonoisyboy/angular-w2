import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksRatingComponent } from './books-rating.component';

describe('BooksRatingComponent', () => {
  let component: BooksRatingComponent;
  let fixture: ComponentFixture<BooksRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksRatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooksRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

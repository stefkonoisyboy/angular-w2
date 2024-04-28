import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BooksRatingComponent } from './books-rating/books-rating.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BooksRatingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'books-rating-2201321052';
}

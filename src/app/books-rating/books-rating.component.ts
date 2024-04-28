import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Book {
  title: string;
  description: string;
  authors: string;
  rating: number;
}

@Component({
  selector: 'app-books-rating',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './books-rating.component.html',
  styleUrl: './books-rating.component.scss',
})
export class BooksRatingComponent {
  books: Book[] = [
    {
      title: 'Book 1',
      description: 'Description 1',
      authors: 'Author 1',
      rating: 0,
    },
    {
      title: 'Book 2',
      description: 'Description 2',
      authors: 'Author 2',
      rating: 0,
    },
    {
      title: 'Book 3',
      description: 'Description 3',
      authors: 'Author 3',
      rating: 0,
    },
    {
      title: 'Book 4',
      description: 'Description 4',
      authors: 'Author 4',
      rating: 0,
    },
    {
      title: 'Book 5',
      description: 'Description 5',
      authors: 'Author 5',
      rating: 0,
    },
  ];

  currentBookIndex: number = 0;
  currentBook: Book = this.books[this.currentBookIndex];

  title: string = this.books[this.currentBookIndex].title;
  description: string = this.books[this.currentBookIndex].description;
  authors: string = this.books[this.currentBookIndex].authors;

  rateBook(rating: number): void {
    this.currentBook.rating = (this.currentBook.rating + rating) / 2;
    this.edit();
    this.nextBook();
  }

  nextBook(): void {
    this.currentBookIndex = (this.currentBookIndex + 1) % this.books.length;
    this.currentBook = this.books[this.currentBookIndex];

    this.title = this.currentBook.title;
    this.description = this.currentBook.description;
    this.authors = this.currentBook.authors;
  }

  edit(): void {
    this.currentBook.title = this.title;
    this.currentBook.description = this.description;
    this.currentBook.authors = this.authors;
  }

  reset(): void {
    this.currentBookIndex = 0;
    this.currentBook = this.books[this.currentBookIndex];
  }

  stopRating(): void {
    this.reset();
    console.log('Rating process stopped successfully.');
  }
}

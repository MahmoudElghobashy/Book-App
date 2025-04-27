import { Injectable } from '@angular/core';
 
export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
}
 
@Injectable({
  providedIn: 'root' 
})
export class BookService {
  private books: Book[] = [
    { id: 1, title: '1984', author: 'George Orwell', description: 'A dystopian novel about totalitarianism.' },
    { id: 2, title: 'Pride and Prejudice', author: 'Jane Austen', description: 'A romantic novel about social class.' },
    { id: 3, title: 'The Hobbit', author: 'J.R.R. Tolkien', description: 'A fantasy adventure about a hobbit\'s journey.' }
  ];
 
  getBooks(): Book[] {
    return this.books;
  }
 
  getBookById(id: number): Book | undefined {
return this.books.find(book => book.id === id);
  }
}
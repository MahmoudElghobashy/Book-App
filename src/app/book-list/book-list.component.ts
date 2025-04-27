
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService, Book } from '../book.service';
 
@Component({
  selector: 'app-book-list',
  standalone:false,
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
 
  constructor(
    private bookService: BookService,
    private router: Router
  ) {}
 
  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }
 
  selectBook(book: Book): void {
this.router.navigate(['/books', book.id]);
  }
}
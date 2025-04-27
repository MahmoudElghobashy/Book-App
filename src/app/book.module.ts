import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookService } from './book.service';

@NgModule({
  declarations: [
    BookListComponent,
    BookDetailComponent

  ],
  imports: [
    CommonModule
  ],
  providers: [
    BookService
  ],
  exports: [
    BookListComponent,
    BookDetailComponent
  ]
})
export class BookModule { }
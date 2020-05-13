import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  constructor(public service:BookService) { }

  ngOnInit(): void {
    this.service.getAllBooks();
  }

  fillData(item:Book)
  {
    this.service.book.id = item.id;
    this.service.book.title = item.title;
    this.service.book.numberOfPages = item.numberOfPages;
    this.service.book.author = item.author;
    this.service.book.publishedOn = item.publishedOn;
  }

  delete(id:number)
  {
    this.service.deleteBook().subscribe(res =>
      {
        this.service.getAllBooks();
      },
      err =>
      {
        console.log(err);
      });
  }

}

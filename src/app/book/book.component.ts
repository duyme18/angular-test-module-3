import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  public bookList: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBookList().subscribe(
      result => {
        this.bookList = result;
        console.log(this.bookList);
      },error =>{
        alert('Loi lay du lieu tu service');
      }
    )
  }

  seen(i){
    const book = this.bookList[i];
    book.read = !book.read;
    console.log(book.read);
   
    return this.bookService.editBook(book).subscribe(
      next => {
        alert('chinh sua thanh cong');
        document.location.reload();
      }, error => {
        alert('chinh sua that bai');
      }
    );
  }
}

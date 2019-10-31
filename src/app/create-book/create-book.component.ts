import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  inputBook = new FormControl();
  constructor(private bookService: BookService) { }

  ngOnInit() {

  }
  createBook() {
    if (this.inputBook.value == null) {
      return alert('Nhap ten sach');
    }
    const book: Partial<Book> = {

      name: this.inputBook.value

    };
    console.log(book);
    return this.bookService.createBook(book).subscribe(
      next => {
        alert('Them thanh cong');
        this.inputBook.setValue('');
        document.location.reload();

      }, error => {
        alert('Them that bai');
      }
    )
  }

}

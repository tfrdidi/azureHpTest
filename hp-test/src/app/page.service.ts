import { Injectable } from '@angular/core';
import { Page } from './model/model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PageService {

  private page: Page;
  public pageObservable: Observable<Page>;

  constructor() {
    this.pageObservable = new Observable<Page>(observer => {
      this.page = new Page();
      this.page.title = "testpage";
      setTimeout(() => observer.next(this.page));
    });
  }

  public test() {
    this.page.title = this.page.title + this.page.title;
  }
}

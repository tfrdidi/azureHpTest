import { Component, OnInit } from '@angular/core';
import { Page } from './model/model';
import { PageService } from './page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public mainPage: Page;

  constructor(public pageService: PageService) {

  }

  public ngOnInit() {
    this.pageService.pageObservable.subscribe(page => {
      this.mainPage = page;
    });
  }

  public test() {
    this.pageService.test();
  }
}

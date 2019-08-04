import { Component } from "@angular/core";
import { Article } from "./article";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [];
  }
  createNewArticle(title: HTMLInputElement, link: HTMLInputElement) {
    let article = new Article(title.value, link.value);
    this.articles.push(article);
  }
}

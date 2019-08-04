import { Component, OnInit, HostBinding, Input } from "@angular/core";
import { Article } from "../article";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.sass"]
})
export class ArticleComponent implements OnInit {
  @HostBinding("attr.class") cssClass = "row";

  @Input() article: Article;

  constructor() {
    // console.log(this.article);
  }

  ngOnInit() {}
  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }
}

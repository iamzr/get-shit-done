import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'GSD';

  filter: "all" | "active" | "done" = "all";

  allItems = [
    {task: "learn c#", done: true},
    {task: "learn java", done: false},
    {task: "learn python", done: true},
    {task: "learn scala", done: false},
    {task: "learn c++", done: false},
    {task: "learn c", done: false}
  ]

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === "done" ? item.done : !item.done )
  }

  addItem(task: string) {
    this.allItems.push({
      task,
      done: false
    })
  }
}

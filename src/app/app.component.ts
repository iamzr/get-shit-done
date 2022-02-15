import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'GSD';

  filter: "all" | "active" | "done" = "all";

  allItems = [
    {task: "learn c#", done: true, date: new Date("2020-01-01")},
    {task: "learn java", done: false, date: new Date("2020-01-01")},
    {task: "learn python", done: true, date: new Date("2020-01-01")},
    {task: "learn scala", done: false, date: new Date("2020-01-01")},
    {task: "learn c++", done: false, date: new Date("2020-01-01")},
    {task: "learn c", done: false, date: new Date("2020-01-01")}
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
      date: new Date(),
      done: false
    })
  }

  remove(item: any) {
    this.allItems.splice(this.allItems.indexOf(item), 1)
  }
}

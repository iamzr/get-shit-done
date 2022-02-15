import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Item} from "../item"

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  editable = false;

  @Input() item: Item;
  @Input() newItem: string;
  @Output() remove = new EventEmitter<Item>();

  saveItem(task:any) {
    if (!task) return;
    this.editable = false;
    this.item.task
  }

  constructor() { }

  ngOnInit(): void {
  }

}

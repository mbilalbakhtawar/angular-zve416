import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tree-view',
  template: `
  <ul>
    <li [id]="node.name" *ngFor="let node of treeData" (click)="fetchChildNodes(node.name); $event.stopPropagation()">
      {{node.name}}
      <tree-view [treeData]="node.subnodes" (itemClicked)="fetchChildNodes($event)"></tree-view>
    </li>
  </ul>
  `,
})
export class TreeView {
  @Input() treeData: [];
  @Output() itemClicked = new EventEmitter<string>();

  fetchChildNodes(nodeName: string) {
    this.itemClicked.emit(nodeName);
  }
}

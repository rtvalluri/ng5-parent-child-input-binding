import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() componentName: string;
  @Input() list: string[];

  public deleteItem(item: string) {
    const proceedToDelete = confirm('Are you sure you want to delete : ' + item);
    if (proceedToDelete) {
      this.list.splice(this.list.indexOf(item), 1);
    }
  }

}

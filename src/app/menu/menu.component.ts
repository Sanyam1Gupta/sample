import { Component, OnInit } from '@angular/core';
import { List } from '../shared/list';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    lists: List[] = [
      {
        id: '0',
        name: 'Uthappizza', 
      },
      {
        id: '1',
        name: 'Zucchipakoda',
      },
      {
        id: '2',
        name: 'Vadonut',
      },
      {
        id: '3',
        name: 'ElaiCheese Cake',
      }
     ];

  constructor() { }

  ngOnInit() {
  }

}

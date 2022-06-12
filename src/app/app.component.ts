import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  myTree = [
    {
      name: 'parent1',
      id: 0,
      subnodes: [
        {
          name: 'parent1_child1',
          subnodes: [{ name: 'parent1_child1-child1', subnodes: [] }],
        },
      ],
    },
    { name: 'parent2', subnodes: [{ name: 'parent2_child1', subnodes: [] }] },
    {
      name: 'parent3',
      subnodes: [
        {
          name: 'parent3_child1',
          subnodes: [{ name: 'parent3_child1_child1', subnodes: [] }],
        },
      ],
    },
  ];

  fetchChildNodes(event) {
    console.log(event);
    this.myTree[0].subnodes.push({ name: 'bsdk', subnodes: [] });
  }
}

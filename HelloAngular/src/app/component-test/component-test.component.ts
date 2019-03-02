import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-test',
  template:`<p>יניב למשל</p>`,
  // './component-test.component.html',
  styleUrls: ['./component-test.component.css']
})
export class ComponentTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

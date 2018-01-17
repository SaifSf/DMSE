import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sfscomp2',
  template: `
    <p>
      sfscomp2 works!
    </p>
  `,
  styles: [`
  p{color:  red;
  background-color: yellow}
  `]
})
export class Sfscomp2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  nom: String;
  color:String;
  colors: String;

  constructor() {
  }

  ngOnInit() {
    this.nom = "saif";
    this.color="red";
    this.colors = this.color;

  }

  changename(newname) {
    this.nom = newname;
  }


  changecolor(newcolor) {
    this.color = newcolor;
  }

  resetcolor() {
    this.color=this.colors
  }
}

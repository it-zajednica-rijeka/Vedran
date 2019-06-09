import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  courses: string[] = ['HTML', 'ANGULAR', 'PHP', 'JAVASCRIPT', 'CSS'];
  animals: Array<any> = [
    {type: 'PERRO', name: 'LISA', age: 10},
    {type: 'GATO', name: 'TRUFA', age: 4},
    {type: 'GATO', name: 'TARTALETA', age: 3}
  ]

  constructor() { }

  ngOnInit() {
  }

}

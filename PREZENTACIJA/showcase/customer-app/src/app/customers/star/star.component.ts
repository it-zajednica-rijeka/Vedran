import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  constructor() { }
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> =
                         new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 78 / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }

  ngOnInit() {
  }

}

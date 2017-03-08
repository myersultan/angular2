import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'auction-stars',
  templateUrl: './stars.component.html',
  styles: [` .starrating {color: #d17581;}`]
})
export class StarsComponent implements OnInit {

  @Input() count: number = 5;
  @Input() rating: number = 0;
  stars: boolean[] = [];

  ngOnInit() {
    for(let i = 1; i <= this.count; i++){
      this.stars.push(i>this.rating);
    }
  }

}

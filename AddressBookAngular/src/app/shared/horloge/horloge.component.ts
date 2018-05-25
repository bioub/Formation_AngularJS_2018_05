import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horloge',
  templateUrl: './horloge.component.html',
  styleUrls: ['./horloge.component.scss']
})
export class HorlogeComponent implements OnInit {

  public now: Date;

  constructor() {

  }

  ngOnInit() {
    this.now = new Date();
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

}

import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-shaper',
  templateUrl: './shaper.component.html',
  styleUrls: ['./shaper.component.scss']
})
export class ShaperComponent implements OnInit {

  @Input() modifier: string;
  @Input() isVisible: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }


}

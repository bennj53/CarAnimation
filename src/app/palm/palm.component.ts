import { Component, OnInit } from '@angular/core';
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-palm',
  templateUrl: './palm.component.html',
  styleUrls: ['./palm.component.scss']
})
export class PalmComponent implements OnInit {

  public prod: boolean = environment.production

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Table périodique';
  version: any;

  constructor() { }

  ngOnInit(): void {
    this.version = environment.version;
  }

}

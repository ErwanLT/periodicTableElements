import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})
export class ListElementComponent implements OnInit {

  elements: any;
  groups: any;

  constructor(private httpClient: HttpClient,
              private router: Router) { }

  ngOnInit(): void {
    this.httpClient.get('/assets/data/elements.json').subscribe(elements => {
      this.elements = elements;
    });
    this.httpClient.get('/assets/data/groups.json').subscribe(groups => {
      this.groups = groups;
    });
  }
}

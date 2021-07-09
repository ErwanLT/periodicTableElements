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

  constructor(private httpClient: HttpClient,
              private router: Router) { }

  ngOnInit(): void {
    this.httpClient.get('/assets/data/elements.json').subscribe(elements => {
      this.elements = elements;
    })
  }

  elementDetail(element: any) {
    this.router.navigate(['/element'], {state: {data: element}});
  }
}

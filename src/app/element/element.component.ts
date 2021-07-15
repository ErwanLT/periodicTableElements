import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  elements: any;
  element: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private httpClient: HttpClient) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const elementNumberFromRoute = Number(routeParams.get('elementNumber'));

    if(elementNumberFromRoute > 119){
      this.router.navigate(['elementNotFound']);
    }

    this.httpClient.get('/assets/data/elements.json').subscribe(elements => {
      this.elements = elements;
      this.element = this.elements.find(e => e.number === elementNumberFromRoute);
    });
  }

}

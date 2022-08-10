import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import * as cytoscape from 'cytoscape';
// @ts-ignore (型定義ファイルがない)
import fcose from 'cytoscape-fcose';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('cyElement') cyElement!: ElementRef<HTMLDivElement>;
  cy!: cytoscape.Core;

  constructor() {}

  ngOnInit(): void {
    cytoscape.use(fcose);
  }

  ngAfterViewInit(): void {
    this.cy = cytoscape({
      container: this.cyElement.nativeElement,
      minZoom: 1e-10,
      maxZoom: 1e10,
      layout: {
        name: 'fcose',
        animate: false,
        fit: true,
      } as {name: 'fcose' }
    });

    this.cy.on('resize', (event) => {
      event.cy.center(this.cy.$(''));
    });
  }

  ngOnDestroy(): void {
    this.cy.destroy();
  }

}

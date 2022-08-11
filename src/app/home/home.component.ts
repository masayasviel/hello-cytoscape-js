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
import { HomeService } from '../services/home.service';
import { HomeServiceResponse } from '../interfaces/home';

const getCharacterWidthInCanvas = (target: cytoscape.NodeCollection | cytoscape.EdgeCollection): number => {
  const labelWidthMargin = 10;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext( '2d' )!;
  const fontStyle = target.style('font-style');
  const fontSize = target.style('font-size');
  const fontFamily = target.style('font-family');
  const fontWeight = target.style('font-weight');

  console.log([fontStyle, fontSize, fontFamily, fontWeight]);

  ctx.font = fontStyle + ' ' + fontWeight + ' ' + fontSize + ' ' + fontFamily;

  return ctx.measureText(target.data('name')).width + labelWidthMargin;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('cyElement') cyElement!: ElementRef<HTMLDivElement>;
  cy!: cytoscape.Core;
  contents!: HomeServiceResponse;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    cytoscape.use(fcose);
    this.contents = this.homeService.getGraphData();
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
      } as {name: 'fcose' },
      elements: {
        nodes: this.contents.nodes,
        edges: this.contents.edges,
      },
      style: [
        {
          selector: 'node',
          css: {
            content: 'data(name)',
            width: getCharacterWidthInCanvas,
            shape: 'round-rectangle',
            'text-valign': 'center',
            'text-halign': 'center'
          }
        },
        {
          selector: ':parent',
          css: {
            'text-valign': 'top',
            'text-halign': 'center',
          }
        }
      ],
    });

    this.cy.center(this.cy.$id(this.contents.main));
  }

  ngOnDestroy(): void {
    this.cy.destroy();
  }

}

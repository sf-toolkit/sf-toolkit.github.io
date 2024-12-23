import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./libsD3.html";
import DATA from './data';
import * as d3 from 'd3';
class LibsD3 extends LightningElement {
  constructor(...args) {
    super(...args);
    this.svgWidth = 0;
    this.svgHeight = 400;
    this.d3Initialized = false;
  }
  renderedCallback() {
    if (this.d3Initialized) {
      return;
    }
    this.d3Initialized = true;
    this.initializeD3();
  }
  async initializeD3() {
    const div = this.template.querySelector('div');
    this.svgHeight = this.svgWidth = div.clientWidth;

    // Example adopted from https://observablehq.com/@d3/force-directed-graph
    const svg = d3.select(this.template.querySelector('svg.d3'));
    const width = this.svgWidth;
    const height = this.svgHeight;
    const color = d3.scaleOrdinal(d3.schemeDark2);
    const simulation = d3.forceSimulation(DATA.nodes).force('link', d3.forceLink(DATA.links).id(d => {
      return d.id;
    })).force('charge', d3.forceManyBody()).force('center', d3.forceCenter(width / 2, height / 2));
    const link = svg.append('g').attr('class', 'links').selectAll('line').data(DATA.links).join('line').attr('stroke-width', d => {
      return Math.sqrt(d.value);
    });
    const node = svg.append('g').attr('class', 'nodes').selectAll('circle').data(DATA.nodes).join('circle').attr('r', 5).attr('fill', d => {
      return color(d.group);
    }).call(d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended));
    node.append('title').text(d => {
      return d.id;
    });
    simulation.on('tick', () => {
      link.attr('x1', d => d.source.x).attr('y1', d => d.source.y).attr('x2', d => d.target.x).attr('y2', d => d.target.y);
      node.attr('cx', d => d.x).attr('cy', d => d.y);
    });
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }
    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }
    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }
  }
  /*LWC compiler v6.5.0*/
}
_registerDecorators(LibsD3, {
  fields: ["svgWidth", "svgHeight", "d3Initialized"]
});
export default _registerComponent(LibsD3, {
  tmpl: _tmpl,
  sel: "recipe-libs-d3",
  apiVersion: 61
});
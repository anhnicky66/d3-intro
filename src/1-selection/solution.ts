import * as d3 from 'd3';

d3.select('#graph').selectAll('.bar')
    .attr('width', 10)
    .attr('height', 50)
    .attr('x', (_d, i) => {
         return i * 15;
        })
    .attr('y', 0);

import * as d3 from 'd3';
import { BAR_CHART_DATA } from '../mocks/demo-data.mock';

const svgEl = document.querySelector('#graph');

d3.select(svgEl)
.selectAll('.bar')
.data(BAR_CHART_DATA)
.attr('x', (d, i) => {
    return i * 15;
})
.attr('y', (d) => svgEl.clientHeight - d.value)
.attr('width', 10)
.attr('height', (d) => {
    return d.value;
})
.attr('fill', (d) => {
    return d.value > 50 ? 'red' : 'green';
});

const data = [];

document.querySelector('#add-btn').addEventListener('click', () => {
    for (let i = 0; i < 5; i++) {
        data.push({
            value: Math.random() * 100,
        });
    }

    d3.select(svgEl)
    .selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', (d, i) => {
        return i * 15;
    })
    .attr('y', (d) => svgEl.clientHeight - d.value)
    .attr('width', 10)
    .attr('height', (d) => {
        return d.value;
    })
    .attr('fill', (d) => {
        return d.value > 50 ? 'red' : 'green';
    });
});


document.querySelector('#remove-btn').addEventListener('click', () => {
    data.splice(data.length - 1, 1);

    d3.select(svgEl)
    .selectAll('.bar')
    .data(data)
    .exit()
    .remove();

});


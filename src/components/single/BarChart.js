import PropTypes from 'prop-types';
import React from 'react';
import { Chart } from 'react-google-charts';

export default function BarChart({ title, data, single, color }) {
  // find the index of the single vpn in the whole vpns data array
  const ind = data.findIndex((obj) => obj.id === single);
  // mutate the data array
  data[ind].color = color;

  // prepare data
  const dataArray = [['vpn', title, { role: 'style' }]];
  data.forEach((obj) => dataArray.push([obj.name, obj.value, obj.color]));

  const options = {
    animation: { startup: true, duration: 250 },
    backgroundColor: {
      fill: 'transparent',
    },
    bar: {
      groupWidth: '90%',
    },
    chartArea: {
      width: '100%',
      height: '100%',
      backgroundColor: 'transparent',
    },
    colors: ['#e3e8e6'],
    hAxis: {
      direction: -1, // reverse the order
      textPosition: 'none',
    },
    height: 110,
    legend: {
      position: 'none',
    },
    vAxis: {
      baseline: 'none',
      textPosition: 'none',
      gridlines: {
        count: 0,
      },
    },
    width: 220,
  };

  return <Chart chartType="ColumnChart" data={dataArray} options={options} />;
}

BarChart.propTypes = {
  color: PropTypes.string,
  data: PropTypes.array,
  single: PropTypes.string,
  title: PropTypes.string,
};

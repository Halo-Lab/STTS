
import React from "react";

import { Line } from "react-chartjs-2";

const Chart = ({arr}) => {

const dataDownloads=arr?.downloads?.map(el=>el?.downloads);

  const labels = [
    'Mon',
    'Tues',
    'Wedn',
    'Thurs',
    'Fri',
    'Sat',
    'Sun'
  ];
  const data = {
    labels: labels,
    datasets: [{
      label: 'Weekly Downloads',
      backgroundColor: '#3861e1',
      borderColor: '#3861e1',
      data: dataDownloads,
    }]
  };

  return (
      <Line
        data={data}
        // height={300}
        // width={50}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Weekly downLoad",
            fontSize: 25
          },
          legend: {
            display: true,
            position: "top"
          }
        }}
      />
  );
};

export default Chart;
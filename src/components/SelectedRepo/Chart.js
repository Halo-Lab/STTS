import React from 'react';
import date from 'date-and-time';

import { Line } from 'react-chartjs-2';

const Chart = ({ arr }) => {
  const checkData = (arr) => {
    if (arr) {
      const dataDownloads = arr?.downloads?.map((el) => el?.downloads);
      const dataSum = dataDownloads.reduce((a, b) => a + b);
      if (dataSum) {
        return dataDownloads;
      } else return undefined;
    }
  };

  const labels = arr?.downloads?.map((el) =>
    date.transform(el.day, 'YYYY-MM-DD', 'ddd'),
  );

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Weekly Downloads',
        backgroundColor: '#3861e1',
        borderColor: '#3861e1',
        data: checkData(arr),
      },
    ],
  };

  return (
    <Line
      data={data}
      options={{
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

export default Chart;

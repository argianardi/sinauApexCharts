import React from 'react';
import ApexCharts from 'react-apexcharts';

const OpenChart1 = () => {
  const chartOptions = {
    chart: {
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      colors: ['#B7DD6E'],
      width: 1,
    },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTicks: {
        show: false, // Menyembunyikan tanda tick di atas label sumbu x
      },
      grid: {
        show: false,
      },
      tooltip: {
        enabled: false, // Menyembunyikan tooltip di label sumbu x saat hover
      },
      lines: {
        show: false, // Menghilangkan garis vertikal pada grid x-axis
      },
      axisBorder: {
        show: false, // Menghilangkan garis border pada grid x-axis
      },
      labels: {
        style: {
          colors: '#D1D0D3', // Mengubah warna huruf pada label sumbu x
          fontSize: '12px', // Mengubah ukuran huruf pada label sumbu x
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (value) => {
          if (value < 10) {
            return '0' + value.toFixed(0) + ':00'; // Format angka tanpa desimal
          } else {
            return value.toFixed(0) + ':00'; // Format angka tanpa desimal
          }
        },

        style: {
          colors: '#D1D0D3', // Mengubah warna huruf pada label sumbu x
          fontSize: '12px', // Mengubah ukuran huruf pada label sumbu x
        },
      },
      tickAmount: 4, // Jumlah label yang ditampilkan
      min: 8, // Nilai minimum pada sumbu y
      max: 24, // Nilai maksimum pada sumbu y
    },
    tooltip: {
      custom: ({ series, seriesIndex, dataPointIndex }) => {
        const value = series[seriesIndex][dataPointIndex];
        const formatedValue = value < 10 ? '0' + value + ':00' : value + ':00';
        return (
          '<div class="tooltip">' +
          '<span class="text-xs font-semibold text-[#333]">' +
          formatedValue +
          '</span>' +
          '</div>'
        );
      },
    },
    markers: {
      colors: '#fff',
      strokeColors: '#ccdeab',
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'vertical',
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
      colors: ['#B7DD6E', '#B7DD6E'],
    },
    grid: {
      borderColor: '#D1D0D333',
      strokeOpacity: 0.1,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  };

  const chartSeries = [
    {
      name: '',
      data: [15, 13, 9, 15, 16, 13, 14],
    },
  ];

  return (
    <div className="">
      <div className="w-[95%] mx-auto sm:w-1/2">
        <ApexCharts options={chartOptions} series={chartSeries} type="area" />
      </div>
    </div>
  );
};

export default OpenChart1;

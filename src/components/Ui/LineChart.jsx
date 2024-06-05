import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    const dates = [
      1609459200000, 1609545600000, 1609632000000, 1609718400000, 1609804800000,
      1609891200000, 1609977600000, 1610064000000, 1610150400000, 1610236800000,
      1610582400000, 1610668800000, 1610755200000, 1610841600000, 1610928000000,
    ];
    const data = [
      30, 40, 35, 50, 49, 60, 70, 91, 125, 130, 150, 160, 180, 200, 220,
    ];

    this.state = {
      series: [
        {
          name: "Income",
          data: data,
        },
      ],
      options: {
        chart: {
          type: "area",
          height: 450,
          zoom: {
            type: "x",
            enabled: true,
            autoScaleYaxis: true,
          },
          toolbar: {
            show: true,
            tools: {
              download: true,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true,
            },
            autoSelected: "zoom",
          },
        },
        colors: ["#00BFFF"],
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 4,
          colors: ["#FFFFFF"],
          strokeColors: "#00BFFF",
          strokeWidth: 2,
        },
        title: {
          text: "Total Income",
          align: "center",
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: "24px",
            fontWeight: "bold",
            color: "#263238",
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 90, 100],
          },
        },
        yaxis: {
          labels: {
            formatter: function (val) {
              return "LKR " + val.toFixed(0);
            },
            style: {
              colors: "#263238",
              fontSize: "12px",
            },
          },
          title: {
            text: "Price",
            style: {
              fontSize: "14px",
              fontWeight: "bold",
              color: "#263238",
            },
          },
        },
        xaxis: {
          type: "datetime",
          categories: dates,
          labels: {
            style: {
              colors: "#263238",
              fontSize: "12px",
            },
          },
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (val) {
              return "LKR " + val.toFixed(0);
            },
          },
          x: {
            format: "dd MMM yyyy",
          },
        },
      },
    };
  }

  render() {
    return (
      <div className="p-5 bg-white rounded-lg">
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={450}
          />
        </div>
      </div>
    );
  }
}

export default ApexChart;

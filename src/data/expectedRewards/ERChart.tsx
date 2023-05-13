import ReactECharts from "echarts-for-react";
import numeral from "numeral";

interface ConvertedDataObject {
  [key: string]: number | undefined;
  timestamp?: number;
}

type HeaderProps = {
  data: ConvertedDataObject[] | null;
};

function ERChart({ data }: HeaderProps) {
  if (data === null) {
    return <div>Data is unavailable</div>;
  }

  // Transform the data source into a format that can be used by ECharts
  const seriesData = Object.keys(data[0])
    .filter((key) => key !== "timestamp")
    .map((key) => ({
      name: key,
      type: "line",
      stack: "Total",
      showSymbol: false,
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      tooltip: {
        valueFormatter: (value: number) =>
          numeral(value).format("0.00a").toUpperCase(),
      },
      data: data.map((item) => item[key]),
    }));

  // Define the timestamps array
  const timestamps = data.map((item) => new Date(item.timestamp as number));

  // Define the ECharts option object
  const option = {
    tooltip: {
      trigger: "axis",
      backgroundColor: "#2A2A2F",
      borderWidth: 0,
      textStyle: {
        color: "#A2A2A6",
      },
    },
    legend: {
      type: "scroll",
      pageIconColor: "#A2A2A6",
      pageIconInactiveColor: "#323237",
      pageTextStyle: {
        color: "#A2A2A6",
      },
      data: Object.keys(data[0]).filter((key) => key !== "timestamp"),
      icon: "circle",
      bottom: "2%",
      textStyle: {
        color: "#A2A2A6",
      },
    },
    grid: {
      left: "2%",
      right: "4%",
      bottom: "12%",
      top: "4%",
      containLabel: true,
    },
    xAxis: {
      type: "time",
      data: null,
    },
    yAxis: {
      type: "value",
      splitLine: {
        lineStyle: {
          color: "#323237",
        },
      },
      axisLabel: {
        formatter: (value: number) => {
          return numeral(value).format("0.0a").toUpperCase();
        },
      },
    },
    series: seriesData.map((series) => ({
      ...series,
      data: series.data.map((value, index) => ({
        value: [timestamps[index], value],
      })),
    })),
  };

  return (
    <div className="h-96">
      <ReactECharts
        option={option}
        style={{ height: "100%" }}
        className="px-2"
      />
    </div>
  );
}

export default ERChart;

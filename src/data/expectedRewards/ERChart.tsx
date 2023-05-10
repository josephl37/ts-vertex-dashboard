import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { timeFormat, getFormattedTime } from "../../utils";
import numeral from "numeral";

interface ConvertedDataObject {
  [key: string]: number | undefined;
  timestamp?: number;
}

type HeaderProps = {
  interval: number;
  colors: string[];
  data: ConvertedDataObject[] | null;
};

function ERChart({ interval, colors, data }: HeaderProps) {
  const keys = data
    ? Object.keys(data[0]).filter((k) => k !== "timestamp")
    : null;

  if (data === null) {
    return <div>Data is unavailable</div>;
  } else {
    return (
      <div className="h-96 w-full">
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 20,
              right: 20,
              left: 0,
              bottom: 20,
            }}
          >
            <XAxis
              dataKey="timestamp"
              scale="auto"
              type="number"
              domain={["dataMin", "dataMax"]}
              tickFormatter={timeFormat(interval)}
            />
            <YAxis tickFormatter={(c) => numeral(c).format("0.a")} />
            <Tooltip
              content={<CustomTooltip interval={interval} colors={colors} />}
            />
            {keys?.map((key, index) => (
              <Area
                key={key}
                dataKey={key}
                stackId="1"
                stroke={colors[index % colors.length]}
                fill={colors[index % colors.length]}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: number;
  interval: number;
  colors: string[];
}

function CustomTooltip({
  active,
  payload,
  label,
  interval,
  colors,
}: CustomTooltipProps) {
  if (active) {
    const timeFormat = getFormattedTime(interval);

    return (
      <div
        className="bg-tooltip-gray p-2 text-gray-1"
        style={{
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="font-bold text-white mb-1">
          {timeFormat.format(label)}
        </div>
        {payload && payload.length > 0 ? (
          payload
            .map((entry, index) => ({
              entry,
              color: colors[index % colors.length],
            }))
            .reverse()
            .map(({ entry, color }, index) => (
              <div key={`item-${index}`} className="flex">
                <span
                  className="w-4 h-4 mr-4 mt-1"
                  style={{ backgroundColor: color }}
                ></span>
                {entry.name}: {numeral(entry.value).format("0.00a")}
              </div>
            ))
        ) : (
          <div>No data available.</div>
        )}
      </div>
    );
  }

  return null;
}

export default ERChart;

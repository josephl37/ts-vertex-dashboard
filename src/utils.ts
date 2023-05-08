import truncateEthAddress from "truncate-eth-address";

export function convertData(response, key) {
  // Create a Set of unique addresses
  let uniqueAddresses = new Set();
  response.forEach((obj) => {
    let address = truncateEthAddress(obj.address);
    uniqueAddresses.add(address);
  });

  // Create a map to store the grouped data
  let groupedData = new Map();

  response.forEach((obj) => {
    let address = truncateEthAddress(obj.address);
    let lastValue = null;

    obj.data.forEach((dataObj) => {
      let timestamp = dataObj.timestamp;
      let value = parseFloat(dataObj[key]);

      let date = timestamp * 1000;

      if (!groupedData.has(date)) {
        groupedData.set(date, new Map());
      }

      let dataMap = groupedData.get(date);

      if (value !== null && value !== undefined) {
        dataMap.set(address, value);
        lastValue = value;
      } else if (lastValue !== null) {
        dataMap.set(address, lastValue);
      }
    });
  });

  let convertedData = [];

  // Create an array of all unique timestamps in ascending order
  let allTimestamps = Array.from(groupedData.keys()).sort((a, b) => a - b);

  // Populate convertedData with all timestamps and addresses
  allTimestamps.forEach((timestamp, index) => {
    let dataObj = { timestamp };
    uniqueAddresses.forEach((address) => {
      let dataMap = groupedData.get(timestamp);
      let value = dataMap.get(address);

      if (value !== undefined) {
        dataObj[address] = value;
      } else {
        let previousValue = null;
        for (let i = index - 1; i >= 0; i--) {
          let previousTimestamp = allTimestamps[i];
          let previousDataMap = groupedData.get(previousTimestamp);
          let previousDataValue = previousDataMap.get(address);
          if (previousDataValue !== undefined) {
            previousValue = previousDataValue;
            break;
          }
        }
        dataObj[address] = previousValue;
      }
    });
    convertedData.push(dataObj);
  });

  return convertedData;
}

export function timeFormat(interval) {
  switch (interval) {
    case 900:
    case 3600:
    case 14400:
    case 86400:
    case 172800:
      return (t) =>
        new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: false,
        }).format(t);
    case 604800:
      return (t) =>
        new Intl.DateTimeFormat("en-US", {
          weekday: "short",
          day: "numeric",
        }).format(t);
    case 2630000:
      return (t) =>
        new Intl.DateTimeFormat("en-US", {
          month: "short",
          day: "numeric",
        }).format(t);
    case 7890000:
      return (t) =>
        new Intl.DateTimeFormat("en-US", {
          month: "short",
        }).format(t);
    default:
      return (t) =>
        new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: false,
        }).format(t);
  }
}

export function getFormattedTime(interval) {
  switch (interval) {
    case 900:
    case 3600:
    case 14400:
    case 86400:
    case 172800:
      return new Intl.DateTimeFormat("en-US", {
        timeStyle: "short",
        dateStyle: "short",
      });
    case 604800:
    case 2630000:
    case 7890000:
      return new Intl.DateTimeFormat("en-US", {
        dateStyle: "long",
      });
    default:
      return new Intl.DateTimeFormat("en-US", {
        timeStyle: "short",
        dateStyle: "short",
      });
  }
}

export function getCurrentEpoch() {
  const startTime = 1682514000 * 1000; // in miliseconds
  const epochDuration = 2419200 * 1000; // in miliseconds
  const currentTime = new Date(Date.now());

  const epoch = Math.ceil((currentTime.getTime() - startTime) / epochDuration);
  return epoch;
}

export function formatTable(data) {
  const lastData = data ? data[data.length - 1] : null;

  if (lastData) {
    delete lastData.timestamp;
  }

  return lastData;
}

import truncateEthAddress from 'truncate-eth-address';
// create this hook and pass data in from chart and return x and y axis data
interface FinalDataItem {
  timestamp: number;
  [address: string]: number;
}

export function queryAvgQMin(response: any) {
  const finalData: FinalDataItem[] = [];

  response.forEach((obj: any) => {
    let last_timestamp = 0;
    let last_sum_q_min = 0;
    let last_q_min = 0;

    const address = truncateEthAddress(obj.address);

    obj.data.forEach((obj: any) => {
      const timestamp = parseInt(obj['timestamp']);
      const sum_q_min = parseFloat(obj['sum_q_min']);

      if (last_timestamp !== 0) {
        const time_diff = timestamp - last_timestamp;
        const sum_q_min_diff = sum_q_min - last_sum_q_min;
        let q_min = sum_q_min_diff / (time_diff / 60.0);

        if (q_min === 0) {
          q_min = last_q_min;
        } else {
          // Update the last known q_min value
          last_q_min = q_min;
        }

        // Find the existing item in finalData with the same timestamp
        let existingItem = finalData.find(
          (item) => item.timestamp === timestamp * 1000,
        );

        // If there is no existing item with the same timestamp, create a new one
        if (!existingItem) {
          existingItem = { timestamp: timestamp * 1000 };
          finalData.push(existingItem);
        }

        // Store the q_min value for the address in the existing item
        existingItem[address] = q_min;
      }

      last_timestamp = timestamp;
      last_sum_q_min = sum_q_min;
    });
  });
  return finalData;
}

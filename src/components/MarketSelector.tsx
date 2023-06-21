interface MarketSelectorProps {
  data: any;
  title: string;
  state: string | number;
  setState: (market: number) => void;
}

export function MarketSelector({
  data,
  title,
  state,
  setState,
}: MarketSelectorProps) {
  const options = data.slice(1).map((option: any) => (
    <option key={option.product_id} value={option.product_id}>
      {option.symbol}
    </option>
  ));

  return (
    <div>
      <label htmlFor="market" className="block mb-1 font-medium text-gray-1">
        {title}{' '}
      </label>
      <select
        id="market"
        className="bg-gray-3 border border-gray-2 text-gray-1 text-sm rounded block w-full p-2"
        value={state}
        onChange={(e) => setState(Number(e.target.value))}
      >
        {options}
      </select>
    </div>
  );
}

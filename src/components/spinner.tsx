import loader from "../public/spinner.svg";

function Spinner() {
  return (
    <div className="text-gray-1 flex items-center justify-center h-full">
      <div className="animate-spin">
        <img src={loader} alt="loader" />
      </div>
    </div>
  );
}

export default Spinner;

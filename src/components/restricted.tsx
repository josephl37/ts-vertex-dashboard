const Restricted = () => {
  return (
    <div className="flex mt-40 justify-center">
      <div className="bg-gray-3 border border-gray-2 w-96 h-auto">
        <div className="text-white font-semibold text-xl border-b border-gray-2 px-4 py-2">
          <p>Restricted Territory</p>
        </div>
        <div className="px-4 mt-4">
          <p className="text-gray-1 text-xs">
            Unfortunately, we are not able to support users from the following
            restricted territories at this time:
          </p>
        </div>
        <div className="text-gray-1 text-xs mx-4 my-4 border border-gray-2">
          <div className="p-2">
            <p>Balkans</p>
            <p>Belarus</p>
            <p>Burma (Myanmar)</p>
            <p>Côte D’Ivoire (Ivory Coast)</p>
            <p>Cuba</p>
            <p>Democratic Republic of Congo</p>
            <p>Iran</p>
            <p>Iraq</p>
            <p>Liberia</p>
            <p>North Korea</p>
            <p>Russia</p>
            <p>Sudan</p>
            <p>Syria</p>
            <p>Ukraine (Crimea, Donetsk and Luhansk regions)</p>
            <p>United States of America</p>
            <p>Zimbabwe</p>
          </div>
        </div>
        <div className="px-4 my-4">
          <p className="text-gray-1 text-xs">
            Please refer to the{" "}
            <a
              href="https://vertexprotocol.com/docs/TermsOfService.pdf"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Vertex Terms of Service
            </a>{" "}
            for more information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Restricted;

const PS5vsPS5ProPage = (): JSX.Element => {
  return (
    <div className="container mx-auto flex-grow">
      <h1 className="text-slate-800 text-center text-4xl font-extrabold my-8 bg-slate-100 p-8 rounded shadow-lg">
        PS5 Vs PS5 Pro
      </h1>
      <div className="bg-slate-100 p-8 rounded shadow-lg">
        <h2 className="text-slate-800 text-2xl font-bold mb-8">
          Specifications
        </h2>
        <div className="flex justify-around">
          <div>
            <h3 className="text-slate-800 text-xl font-bold mb-8">PS5</h3>
            <p>GPU: Custom AMD RDNA 2 | 36 CUs up to 2.23 GHz | 10.28 TFLOPs</p>
          </div>
          <div>
            <h3 className="text-slate-800 text-xl font-bold mb-8">PS5 Pro</h3>
            <p>GPU: Custom AMD RDNA 3 | 60 CUs up to 2.23 GHz | 17.13 TFLOPs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PS5vsPS5ProPage;

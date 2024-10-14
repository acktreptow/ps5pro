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
            <p>
              CPU: Custom 8 core/16 thread AMD Ryzen Zen 2 | Variable frequency
              up to 3.5 GHz
            </p>
            <p>RAM: 16GB GDDR6 memory @ 14 Gbps</p>
            <p>Memory available for games: 12.5 GB</p>
            <p>Memory Interface/Bandwidth: 256-bit / 448GB/s</p>
            <p>AI/Machine Learning: N/A</p>
            <p>Storage: 825GB (1TB for Slim model) NVME SSD @ 5.5GB/s read</p>
            <p>Output: Up to 4K 120Hz | HDMI 2.1</p>
            <p>WiFi: WiFi 6</p>
            <p>Dimensions: H: 9.6cm | W: 35.8cm (Slim)</p>
            <p>
              Launch Date: November 12, 2020 (NA/JP/AU) | November 19, 2020 (WW)
            </p>
            <p>
              Introductory Price: Disc Model - $499 / €499 / £449 / ¥49,980 |
              Digital Model - $399 / €399 / £359 / ¥39,980
            </p>
          </div>
          <div>
            <h3 className="text-slate-800 text-xl font-bold mb-8">PS5 Pro</h3>
            <p>GPU: Custom AMD RDNA 3 | 60 CUs up to 2.23 GHz | 17.13 TFLOPs</p>
            <p>
              CPU: Custom 8 core/16 thread AMD Ryzen Zen 2 | Variable frequency
              up to 3.85 GHz
            </p>
            <p>RAM: 16GB GDDR6 memory @ 18 Gbps</p>
            <p>Memory available for games: 13.7 GB</p>
            <p>Memory Interface/Bandwidth: 256-bit / 576GB/s</p>
            <p>
              AI/Machine Learning: 300 TOPS of 8-bit computation / 67 TFLOPS of
              16-bit floating point.
            </p>
            <p>
              AI/Machine Learning Features: PSSR (PlayStation Spectral Super
              Resolution Upscaling) & 2-4x Ray-tracing.
            </p>
            <p>Storage: 2TB NVME SSD @ 5.5GB/s read</p>
            <p>Output: Up to 4K 120Hz or 8K 60hz | HDMI 2.1</p>
            <p>WiFi: WiFi 7</p>
            <p>Dimensions: H: 10.4cm | W: 35.8cm</p>
            <p>Launch Date: November 7, 2024 (WW)</p>
            <p>Introductory Price: $699 / €799 / £699 / ¥119,980</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PS5vsPS5ProPage;

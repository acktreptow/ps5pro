const PS5vsPS5ProPage = (): JSX.Element => {
  return (
    <div className="container mx-auto flex-grow text-slate-800">
      <h1 className="text-slate-800 text-center text-4xl font-extrabold my-8 bg-slate-100 p-8 rounded shadow-lg">
        PS5 Vs PS5 Pro
      </h1>
      <div className="bg-slate-100 p-8 rounded shadow-lg mb-8">
        <h2 className="text-slate-800 text-2xl font-bold mb-8 underline">
          Specifications
        </h2>
        <div className="flex">
          <div>
            <h3 className="text-slate-800 text-xl font-bold mb-8">PS5</h3>
            <p>
              <span className="font-semibold">GPU:</span> Custom AMD RDNA 2 | 36
              CUs up to 2.23 GHz | 10.28 TFLOPs
            </p>
            <p>
              <span className="font-semibold">CPU:</span> Custom 8 core/16
              thread AMD Ryzen Zen 2 | Variable frequency up to 3.5 GHz
            </p>
            <p>
              <span className="font-semibold">RAM:</span>16GB GDDR6 memory @ 14
              Gbps
            </p>
            <p>
              <span className="font-semibold">Memory available for games:</span>{" "}
              12.5 GB
            </p>
            <p>
              <span className="font-semibold">Memory Interface/Bandwidth:</span>{" "}
              256-bit / 448GB/s
            </p>
            <p>
              <span className="font-semibold">AI/Machine Learning:</span> N/A
            </p>
            <p>
              <span className="font-semibold">Sound:</span> Custom Tempest
              Engine 3D Audio | Dolby Atmos, 7.1 Surround Sound & DTS:X (Blu-ray
              and UHD Blu-ray video) compatible
            </p>
            <p>
              <span className="font-semibold">Storage:</span> 825GB (1TB for
              Slim model) NVME SSD @ 5.5GB/s read
            </p>
            <p>
              <span className="font-semibold">Output:</span> Up to 4K 120Hz |
              HDMI 2.1
            </p>
            <p>
              <span className="font-semibold">WiFi:</span> WiFi 6
            </p>
            <p>
              <span className="font-semibold">Dimensions:</span> H: 10.4cm / W:
              39cm (Launch model) | H: 9.6cm / W: 35.8cm (Slim)
            </p>
            <p>
              <span className="font-semibold">Launch Date:</span> November 12,
              2020 (NA/JP/AU) | November 19, 2020 (WW)
            </p>
            <p>
              <span className="font-semibold">Introductory Price:</span> Disc
              Model - $499 / €499 / £449 / ¥49,980 | Digital Model - $399 / €399
              / £359 / ¥39,980
            </p>
          </div>
          <div>
            <h3 className="text-slate-800 text-xl font-bold mb-8">PS5 Pro</h3>
            <p>
              <span className="font-semibold">GPU:</span> Custom AMD RDNA 3 | 60
              CUs up to 2.23 GHz | 17.13 TFLOPs
            </p>
            <p>
              <span className="font-semibold">CPU:</span> Custom 8 core/16
              thread AMD Ryzen Zen 2 | Variable frequency up to 3.85 GHz
            </p>
            <p>
              <span className="font-semibold">RAM:</span> 16GB GDDR6 memory @ 18
              Gbps
            </p>
            <p>
              <span className="font-semibold">Memory available for games:</span>{" "}
              13.7 GB
            </p>
            <p>
              <span className="font-semibold">Memory Interface/Bandwidth:</span>{" "}
              256-bit / 576GB/s
            </p>
            <p>
              <span className="font-semibold">AI/Machine Learning:</span> 300
              TOPS of 8-bit computation / 67 TFLOPS of 16-bit floating point.
            </p>
            <p>
              <span className="font-semibold">
                AI/Machine Learning Features:
              </span>{" "}
              PSSR (PlayStation Spectral Super Resolution Upscaling) & 2-4x
              Ray-tracing.
            </p>
            <p>
              <span className="font-semibold">Sound:</span> Same as PS5, but 35%
              faster for improved soundscapes.
            </p>
            <p>
              <span className="font-semibold">Storage:</span> 2TB NVME SSD @
              5.5GB/s read
            </p>
            <p>
              <span className="font-semibold">Output:</span> Up to 4K 120Hz or
              8K 60hz | HDMI 2.1
            </p>
            <p>
              <span className="font-semibold">WiFi:</span> WiFi 7
            </p>
            <p>
              <span className="font-semibold">Dimensions:</span> H: 10.4cm / W:
              35.8cm
            </p>
            <p>
              <span className="font-semibold">Launch Date:</span> November 7,
              2024 (WW)
            </p>
            <p>
              <span className="font-semibold">Introductory Price:</span> $699 /
              €799 / £699 / ¥119,980
            </p>
          </div>
        </div>
        <h2 className="text-slate-800 text-2xl font-bold mb-8 underline">
          Improvements
        </h2>
        <div>
          <p>
            GPU: 66.67% extra CUs with a real-world improvement of around 45%
          </p>
          <p>CPU: 10% increase to max frequency</p>
          <p>RAM: No increase to amount. 4Gbps / 28.57% increase</p>
          <p>Memory available for games: 1.2GB / 9.6% increase </p>
          <p>Memory Interface/Bandwidth: 128GB/s / 28.57% increase</p>
          <p>
            AI/Machine Learning: 0 - 300 TOPS is a infinite percentage increase.
            PSSR and 2-4x RT now possible.
          </p>
          <p>Sound: 35% faster</p>
          <p>
            Storage: 1.175 TB / 142.42 % increase compared to launch model. 1 TB
            / 100% increase to slim model.
          </p>
          <p>Output: 8K 60hz now possible</p>
          <p>WiFi: WiFi 6 to 7</p>
          <p>
            (Digital model used for like-for like comparison of price increase)
            - $300 (75.19%) / €400 (100.75%) / £340 (94.63%) / ¥80,000 (200.05%)
          </p>
        </div>
      </div>
    </div>
  );
};

export default PS5vsPS5ProPage;

import Image from "next/image";
import PS5 from "../../../public/images/ps5v1.png";
import PS5PRO from "../../../public/images/ps5prov1.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PS5 vs. PS5 Pro",
  description:
    "Comparing the specs of the PS5 and PS5 Pro to show the improvements made in the Pro model.",
};

const PS5vsPS5ProPage = (): JSX.Element => {
  return (
    <div className="container mx-auto flex-grow text-slate-800">
      <h1 className="text-center text-4xl font-extrabold my-8 mx-4 p-8 bg-slate-100 border-2 rounded shadow-lg md:mx-8">
        PS5 vs. PS5 Pro
      </h1>
      <div className="mx-4 mb-10 p-4 pb-8 bg-slate-100 border-2 rounded shadow-lg md:mx-8 md:p-8 lg:p-12">
        <div className="flex flex-col mb-12 gap-8 lg:flex-row lg:mb-8">
          <div className="lg:w-1/2">
            <Image
              src={PS5}
              alt="PS5 Console"
              className="w-72 mx-auto my-8 rounded-lg md:mt-4"
            />
            <h2 className="text-3xl text-center font-bold underline mb-4">
              Specifications
            </h2>
            <p>
              <span className="font-semibold">GPU:</span> Custom AMD RDNA 2 | 36
              CUs up to 2.23 GHz | 10.28 TFLOPs
            </p>
            <p>
              <span className="font-semibold">CPU:</span> Custom 8 core/16
              thread AMD Ryzen Zen 2 | Variable frequency up to 3.5 GHz
            </p>
            <p>
              <span className="font-semibold">RAM:</span> 16GB GDDR6 memory @ 14
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
              <span className="font-semibold">
                AI/Machine Learning Features:
              </span>{" "}
              N/A
            </p>
            <p>
              <span className="font-semibold">Sound:</span> Custom Tempest 3D
              Audio | Dolby Atmos, 7.1 Surround Sound & DTS compatible
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
              <span className="font-semibold">Introductory Price:</span> Disc -
              $499 / €499 / £449 / ¥49,980 | Digital - $399 / €399 / £359 /
              ¥39,980
            </p>
          </div>
          <div className="mt-8 mb-4 md:mb-8 lg:mt-0 lg:w-1/2">
            <Image
              src={PS5PRO}
              alt="PS5 Pro console"
              className="w-72 mx-auto mb-8 rounded-lg md:mt-4"
            />
            <h2 className="text-3xl text-center font-bold underline mb-4">
              Specifications
            </h2>
            <p>
              <span className="font-semibold">GPU:</span> Custom AMD RDNA 3 | 60
              CUs up to 2.23 GHz | 16.7 TFLOPs
            </p>
            <p>
              <span className="font-semibold">CPU:</span> Custom 8 core/16
              thread AMD Ryzen Zen 2 | Variable frequency up to 3.85 GHz
            </p>
            <p>
              <span className="font-semibold">RAM:</span> 16GB GDDR6 memory @ 18
              Gbps for games. 2GB DDR5 memory for OS.
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
              PSSR (Upscaling) & 2-4x Ray-Tracing.
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
        <div>
          <h2 className="text-3xl text-center font-bold underline mb-4 lg:text-start">
            Improvements
          </h2>
          <p>
            <span className="font-semibold">GPU:</span> 66.67% extra CUs and
            62.46% increase in TFLOPs with a real-world improvement of around
            45%
          </p>
          <p>
            <span className="font-semibold">CPU:</span> 10% increase to max
            frequency
          </p>
          <p>
            <span className="font-semibold">RAM:</span> All 16GB are now for
            games, with 2 additional GB for the OS. 4Gbps / 28.57% increase in
            speed.
          </p>
          <p>
            <span className="font-semibold">Memory available for games:</span>{" "}
            1.2GB / 9.6% increase{" "}
          </p>
          <p>
            <span className="font-semibold">Memory Interface/Bandwidth:</span>{" "}
            128GB/s / 28.57% increase
          </p>
          <p>
            <span className="font-semibold">AI/Machine Learning:</span> 0 - 300
            TOPS is a infinite percentage increase. PSSR and 2-4x RT now
            possible.
          </p>
          <p>
            <span className="font-semibold">Sound:</span> 35% faster
          </p>
          <p>
            <span className="font-semibold">Storage:</span> 1.175 TB / 142.42 %
            increase compared to launch model. 1 TB / 100% increase to slim
            model.
          </p>
          <p>
            <span className="font-semibold">Output:</span> 8K 60hz now possible
          </p>
          <p>
            <span className="font-semibold">WiFi:</span> WiFi 6 to 7
          </p>
          <p>
            <span className="font-semibold">Price increase: </span>(Digital
            model used for like-for like comparison) - $300 (75.19%) / €400
            (100.75%) / £340 (94.63%) / ¥80,000 (200.05%)
          </p>
        </div>
      </div>
    </div>
  );
};

export default PS5vsPS5ProPage;

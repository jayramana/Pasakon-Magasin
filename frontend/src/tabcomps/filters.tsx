import { useState, useEffect } from "react";
import axios from "axios";
import { Laptop } from "types/types";
import { useFilterContext } from "../../hooks/FilterProvider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Filters = () => {
  const [products, setProducts] = useState([]);
  const { filters, updateFilter, resetFilters } = useFilterContext();

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_PORT}api/products/`
        );
        setProducts(res.data.data);
      } catch {
        console.log("Error fetching data");
      }
    };

    fetchAll();
  }, []);

  const handleChange = (category: keyof typeof filters, value: string) => {
    updateFilter(category, value);
  };

  const resetFilter = () => {
    resetFilters();
    setGraphicIndex(null);
    setProcessorIndex(null);
    setRamIndex(null);
    setStorageIndex(null);
    setOSIndex(null);
    setRamTypeIndex(null);
    setCategoryIndex(null);
  };

  const [GraphicIndex, setGraphicIndex] = useState<number | null>(null);
  const [ProcessorIndex, setProcessorIndex] = useState<number | null>(null);
  const [RamIndex, setRamIndex] = useState<number | null>(null);
  const [StorageIndex, setStorageIndex] = useState<number | null>(null);
  const [OSIndex, setOSIndex] = useState<number | null>(null);
  const [RamTypeIndex, setRamTypeIndex] = useState<number | null>(null);
  const [CategoryIndex, setCategoryIndex] = useState<number | null>(null);

  const handleGraphicsChange = (index: number) => {
    setGraphicIndex((prev) => (prev === index ? null : index));
  };
  const handleProcessorChange = (index: number) => {
    setProcessorIndex((prev) => (prev === index ? null : index));
  };
  const handleRamChange = (index: number) => {
    setRamIndex((prev) => (prev === index ? null : index));
  };
  const handleStorageChange = (index: number) => {
    setStorageIndex((prev) => (prev === index ? null : index));
  };
  const handleOSChange = (index: number) => {
    setOSIndex((prev) => (prev === index ? null : index));
  };
  const handleRamTypeChange = (index: number) => {
    setRamTypeIndex((prev) => (prev === index ? null : index));
  };
  const handleCategoryChange = (index: number) => {
    setCategoryIndex((prev) => (prev === index ? null : index));
  };

  const Graphics = products.map(
    (product: Laptop) => product.processor.graphicProcessor
  );
  const Processor = products.map(
    (product: Laptop) => product.processor?.processorname
  );
  const Ram = products.map((product: Laptop) => product.processor?.ram);
  // const Storage = products.map(
  //   (product: Laptop) => product.spec[0].storagespace
  // );
  const OS = products.map((product: Laptop) => product.os.os);
  const RamType = products.map((product: Laptop) => product.processor.ramtype);

  const Category = products.map((product: Laptop) => product.category);
  const uniqueGraphics = Array.from(new Set(Graphics));
  const uniqueProcessor = Array.from(new Set(Processor));
  const uniqueRam = Array.from(new Set(Ram));
  // const uniqueStorage = Array.from(new Set(Storage));
  const uniqueOS = Array.from(new Set(OS));
  const uniqueRAMType = Array.from(new Set(RamType));
  const uniqueCategory = Array.from(new Set(Category));

  console.log(filters);

  return (
    <div className="flex flex-col bg-slate-900 gap-2 pr-2 h-[100%]">
      <button
        onClick={resetFilter}
        className={
          filters.graphicsCard ||
          filters.operatingSystem ||
          filters.processor ||
          filters.category ||
          filters.ram ||
          filters.ramType
            ? // filters.storage
              "inline-block w-fit"
            : "hidden w-fit"
        }
      >
        Clear All
      </button>
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1" className="border-b-0">
          <div className="">
            <AccordionTrigger className="hover:no-underline">
              <p className="font-bold text-lg text-teal-500 ">Graphics Card</p>
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-white font-semibold text-lg">
                {uniqueGraphics.map((graph, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      checked={GraphicIndex === index}
                      value={graph.toString()}
                      onChange={() => {
                        handleGraphicsChange(index);
                        handleChange("graphicsCard", graph);
                      }}
                    />
                    <label htmlFor="">{graph.toString()}</label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </div>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b-0">
          <div className="">
            <AccordionTrigger className="hover:no-underline">
              <p className="font-bold text-lg text-teal-500">Processors</p>
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-white font-semibold text-lg">
                {uniqueProcessor.map((graph, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      checked={ProcessorIndex === index}
                      value={graph}
                      onChange={(e) => {
                        handleProcessorChange(index);
                        handleChange("processor", e.target.value);
                      }}
                      name=""
                      id=""
                    />
                    <label htmlFor="">{graph}</label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </div>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b-0">
          <div className="">
            <AccordionTrigger className="hover:no-underline">
              <p className="font-bold text-lg text-teal-500">RAM</p>
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-white font-semibold text-lg">
                {uniqueRam.map((graph, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      value={graph}
                      checked={RamIndex === index}
                      onChange={() => {
                        handleRamChange(index);
                        handleChange("ram", graph);
                      }}
                      name=""
                      id=""
                    />
                    <label htmlFor="">{graph}</label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </div>
        </AccordionItem>

        <AccordionItem value="item-5" className="border-b-0">
          <div className="">
            <AccordionTrigger className="hover:no-underline">
              <p className="font-bold text-lg text-teal-500">
                Operating System
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-white font-semibold text-lg">
                {uniqueOS.map((graph, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      checked={OSIndex === index}
                      value={graph.toString()}
                      onChange={() => {
                        handleOSChange(index);
                        handleChange("operatingSystem", graph.toString());
                      }}
                      name=""
                      id=""
                    />
                    <label htmlFor="">{graph.toString()}</label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </div>
        </AccordionItem>
        <AccordionItem value="item-6" className="border-b-0">
          <div className="">
            <AccordionTrigger className="hover:no-underline">
              <p className="font-bold text-lg text-teal-500">RAM Type</p>
            </AccordionTrigger>
            <AccordionContent>
              <div className="text-white font-semibold text-lg">
                {uniqueRAMType.map((graph, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      checked={RamTypeIndex === index}
                      value={graph}
                      onChange={() => {
                        handleRamTypeChange(index);
                        handleChange("ramType", graph);
                      }}
                      name=""
                      id=""
                    />
                    <label htmlFor="">{graph}</label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </div>
        </AccordionItem>
        <AccordionItem value="item-7" className="border-b-0">
          <div className="">
            <AccordionTrigger className="hover:no-underline">
              <p className="font-bold text-lg text-teal-500">Category</p>
            </AccordionTrigger>
            <AccordionContent>
              <div className="tewhite font-semibold text-lg">
                {uniqueCategory.map((graph, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      checked={CategoryIndex === index}
                      value={graph}
                      onChange={() => {
                        handleCategoryChange(index);
                        handleChange("category", graph);
                      }}
                      name=""
                      id=""
                    />
                    <label htmlFor="">{graph}</label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Filters;

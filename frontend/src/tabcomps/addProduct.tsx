import React from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
const AddProduct = () => {
  return (
    <main className="bg-gray-900 text-teal-500 pt-20 min-h-screen max-h-[100%] overflow-x-hidden">
      <fieldset>
        <form action="#" className="w-1/4 ">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="flex w-screen flex-wrap justify-between bg-transparent px-8 text-white ">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="common">Common</TabsTrigger>
              <TabsTrigger value="additional">Additional</TabsTrigger>
              <TabsTrigger value="battery">Battery</TabsTrigger>
              <TabsTrigger value="connectivity">Connectivity</TabsTrigger>
              <TabsTrigger value="os">Operating System</TabsTrigger>
              <TabsTrigger value="war">Warranty</TabsTrigger>
              <TabsTrigger value="process">Processor</TabsTrigger>
            </TabsList>

            <TabsContent
              value="general"
              className="focus:bg-transparent  pl-8 pt-4"
            >
              <p className="text-4xl font-semibold pb-4">General</p>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="lapName" className="font-semibold">
                    Laptop Name:
                  </label>
                  <Input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter the Laptop Name"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="modelName" className="font-semibold">
                    Laptop Model
                  </label>
                  <Input type="text" placeholder="Enter the Laptop's Model" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="brand" className="font-semibold">
                    Brand
                  </label>
                  <Input type="text" placeholder="Enter the Brand" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="desc" className="font-semibold">
                    Description
                  </label>
                  <Input type="text" placeholder="Enter the Description" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="release" className="font-semibold">
                    Release Date
                  </label>
                  <Input type="date" placeholder="Enter the Release Date" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="cate " className="font-semibold">
                    Category
                  </label>
                  <Input type="text" placeholder="Enter the Category" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="img" className="font-semibold">
                    Image
                  </label>
                  <Input type="file" placeholder="Enter the Image" />
                </div>
              </div>
              <div className="flex gap-2 pt-8 justify-between">
                <Button className="bg-gray-800 text-teal-400 hover:bg-teal-600 hover:text-white">
                  Save Changes
                </Button>
                <Button className="bg-gray-800 text-teal-400 hover:bg-teal-600 hover:text-white">
                  Reset
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="common" className="pl-8 pt-4">
              <p className="text-4xl font-semibold pb-4">Common Details</p>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weight" className="font-semibold">
                    Weight
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter the weight of the Laptop"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="price" className="font-semibold">
                    Price
                  </label>
                  <Input
                    type="number"
                    placeholder="Enter the Price of the Laptop"
                  />
                </div>
              </div>
              <div className="flex gap-2 pt-8 justify-between">
                <Button className="bg-gray-800 text-teal-400 hover:bg-teal-600 hover:text-white">
                  Save Changes
                </Button>
                <Button className="bg-gray-800 text-teal-400 hover:bg-teal-600 hover:text-white">
                  Reset
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="additional" className="pl-8 pt-4">
              <p className="text-4xl font-semibold pb-4">Additional Details</p>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="">Is there a Disk Drive in this laptop</label>
                  <Input type="text" placeholder="Type Yes or No" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="">Web Camera</label>
                  <Input type="text" placeholder="Enter the WebCAM details" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="">Keyboard</label>
                  <Input type="text" placeholder="Enter the Keyboard Details" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="">Pointer Device</label>
                  <Input
                    type="text"
                    placeholder="Enter the Pointer Device Details"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="">Color</label>
                  <Input type="text" placeholder="Enter the Color" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="">Dimensions</label>
                  <Input type="text" placeholder="Enter the Processor" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="processor">Processor</label>
                  <Input type="text" placeholder="Enter the Processor" />
                </div>
              </div>
              <div className="flex gap-2 pt-8 justify-between">
                <Button className="bg-gray-800 text-teal-400 hover:bg-teal-600 hover:text-white">
                  Save Changes
                </Button>
                <Button className="bg-gray-800 text-teal-400 hover:bg-teal-600 hover:text-white">
                  Reset
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="battery" className="pl-8 pt-4">
              <p className="text-4xl font-semibold pb-4">Battery Details</p>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weight">Battery Cell Type</label>
                  <Input
                    type="text"
                    placeholder="Enter the Battery Cell Type"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="price">Battery Energy Content</label>
                  <Input
                    type="number"
                    placeholder="Enter the Battery Energy Content"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="price">Number of Cells</label>
                  <Input
                    type="number"
                    placeholder="Enter the Number of Cells"
                  />
                </div>
              </div>
              <div className="flex gap-2 pt-8 justify-between">
                <Button className="bg-gray-800 text-teal-400 hover:bg-teal-600 hover:text-white">
                  Save Changes
                </Button>
                <Button className="bg-gray-800 text-teal-400 hover:bg-teal-600 hover:text-white">
                  Reset
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="connectivity" className="pl-8 pt-4">
              <p className="text-4xl font-semibold pb-4">
                Connectivity Details
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weight">Wireless LAN</label>
                  <Input type="text" placeholder="Enter the WLAN Version" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="price">Bluetooth</label>
                  <Input
                    type="number"
                    placeholder="Enter the Bluetooth Version"
                  />
                </div>
              </div>
              <div className="flex gap-2 pt-8 justify-between">
                <Button className="bg-gray-800 text-teal-400 hover:bg-teal-600 hover:text-white">
                  Save Changes
                </Button>
                <Button className="bg-gray-800 text-teal-400 hover:bg-teal-600 hover:text-white">
                  Reset
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="os" className="pl-8 pt-4">
              <p className="text-4xl font-semibold pb-4">Operaing System</p>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weight">Architecture</label>
                  <Input
                    type="text"
                    placeholder="Enter the Architecture Details"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="price">Os</label>
                  <Input type="number" placeholder="Enter the OS Details" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="price">Supporting Os</label>
                  <Input
                    type="number"
                    placeholder="Enter the Supporting OS Details"
                  />
                </div>
              </div>
              <div className="flex gap-2 pt-8 justify-between">
                <Button className="bg-gray-800 text-teal-400 hover:bg-teal-600 hover:text-white">
                  Save Changes
                </Button>
                <Button className="bg-gray-800 text-teal-400 hover:bg-teal-600 hover:text-white">
                  Reset
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="war" className="pl-8 pt-4">
              <p className="text-4xl font-semibold pb-4">Warranty</p>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weight">Warranty Period</label>
                  <Input
                    type="text"
                    placeholder="Enter the Warranty Period Details"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="price">Warranty Type</label>
                  <Input type="number" placeholder="Enter the Warranty Type" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="price">Warranty Summary </label>
                  <Input
                    type="number"
                    placeholder="Enter the Warranty Summary"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="price">Warranty Details</label>
                  <Input
                    type="number"
                    placeholder="Enter the Supporting Warranty Details"
                  />
                </div>
              </div>
              <div className="flex gap-2 pt-8 justify-between">
                <Button className="bg-gray-800 text-teal-400 hover:bg-teal-600 hover:text-white">
                  Save Changes
                </Button>
                <Button className="bg-gray-800 text-teal-400 hover:bg-teal-600 hover:text-white">
                  Reset
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="process" className="pl-8 pt-4">
              <p className="text-4xl font-semibold pb-4">Processor Details</p>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="price">Processor Name</label>
                  <Input type="number" placeholder="Enter the Name" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="weight">Processor Brand</label>
                  <Input type="text" placeholder="Enter the Brand Name" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="price">Does it have an SSD</label>
                  <Input
                    type="number"
                    placeholder="Enter the Warranty Summary"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="price">RAM</label>
                  <Input
                    type="number"
                    placeholder="Enter the RAM Details"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="price">RAM Type</label>
                  <Input
                    type="number"
                    placeholder="Enter the Type of RAM"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="price">Emmcstoragecapacity</label>
                  <Input
                    type="number"
                    placeholder="Does it have Emmc Storage"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="price">Processor Variant</label>
                  <Input
                    type="number"
                    placeholder="Enter the Variant"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="price">Clock Speed</label>
                  <Input
                    type="number"
                    placeholder="Enter the Clock Speed"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="price">Ram Frequency</label>
                  <Input
                    type="number"
                    placeholder="Enter the Frequency of RAM"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="price">Cache</label>
                  <Input
                    type="number"
                    placeholder="Enter the Cache Details"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="price">Graphics Card</label>
                  <Input
                    type="number"
                    placeholder="Enter the Name of the Graphics Card"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="price">Number of Cores</label>
                  <Input
                    type="number"
                    placeholder="Enter the Number of Cores in the Processor"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="price">Storage Type</label>
                  <Input
                    type="number"
                    placeholder="Enter the Type of Storage"
                  />
                </div>
              </div>
              <div className="flex gap-2 pt-8 justify-between">
                <Button className="bg-gray-800 text-teal-400 hover:bg-teal-600 hover:text-white">
                  Save Changes
                </Button>
                <Button className="bg-gray-800 text-teal-400 hover:bg-teal-600 hover:text-white">
                  Reset
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </form>
      </fieldset>
    </main>
  );
};

export default AddProduct;

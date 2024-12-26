import React from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

            <TabsContent value="general" className="focus:bg-transparent">
              <p>General</p>
              <div>
                <label htmlFor="lapName">Laptop Name:</label>
                <Input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter the Laptop Name"
                />
              </div>
              <div>
                <label htmlFor="modelName">Laptop Model</label>
                <Input type="text" placeholder="Enter the Laptop's Model" />
              </div>
              <div>
                <label htmlFor="brand">Brand</label>
                <Input type="text" placeholder="Enter the Brand" />
              </div>
              <div>
                <label htmlFor="desc">Description</label>
                <Input type="text" placeholder="Enter the Description" />
              </div>
              <div>
                <label htmlFor="release">Release Date</label>
                <Input type="date" placeholder="Enter the Release Date" />
              </div>
              <div>
                <label htmlFor="cate">Category</label>
                <Input type="text" placeholder="Enter the Category" />
              </div>
              <div>
                <label htmlFor="img">Image</label>
                <Input type="file" placeholder="Enter the Image" />
              </div>
            </TabsContent>

            <TabsContent value="common">
              <p>Common Details</p>
              <div>
                <label htmlFor="weight">Weight</label>
                <Input
                  type="text"
                  placeholder="Enter the weight of the Laptop"
                />
              </div>
              <div>
                <label htmlFor="price">Price</label>
                <Input
                  type="number"
                  placeholder="Enter the Price of the Laptop"
                />
              </div>
            </TabsContent>

            <TabsContent value="additional">
              <p>Additional Details</p>
              <div>
                <label htmlFor="">Is there a Disk Drive in this laptop</label>
                <Input type="text" placeholder="Type Yes or No" />
              </div>
              <div>
                <label htmlFor="">Web Camera</label>
                <Input type="text" placeholder="Enter the WebCAM details" />
              </div>
              <div>
                <label htmlFor="">Keyboard</label>
                <Input type="text" placeholder="Enter the Keyboard Details" />
              </div>
              <div>
                <label htmlFor="">Pointer Device</label>
                <Input
                  type="text"
                  placeholder="Enter the Pointer Device Details"
                />
              </div>
              <div>
                <label htmlFor="">Color</label>
                <Input type="text" placeholder="Enter the Color" />
              </div>
              <div>
                <label htmlFor="">Dimensions</label>
                <Input type="text" placeholder="Enter the Processor" />
              </div>
              <div>
                <label htmlFor="processor">Processor</label>
                <Input type="text" placeholder="Enter the Processor" />
              </div>
            </TabsContent>

            <TabsContent value="battery">
              <p>Battery Details</p>
              <div>
                <label htmlFor="weight">Battery Cell Type</label>
                <Input type="text" placeholder="Enter the Battery Cell Type" />
              </div>
              <div>
                <label htmlFor="price">Battery Energy Content</label>
                <Input
                  type="number"
                  placeholder="Enter the Battery Energy Content"
                />
              </div>
              <div>
                <label htmlFor="price">Number of Cells</label>
                <Input type="number" placeholder="Enter the Number of Cells" />
              </div>
            </TabsContent>

            <TabsContent value="connectivity">
              <p>Connectivity Details</p>
              <div>
                <label htmlFor="weight">Wireless LAN</label>
                <Input type="text" placeholder="Enter the Battery Cell Type" />
              </div>
              <div>
                <label htmlFor="price">Bluetooth</label>
                <Input
                  type="number"
                  placeholder="Enter the Battery Energy Content"
                />
              </div>
            </TabsContent>

            <TabsContent value="os">
              <p>Operaing System</p>
              <div>
                <label htmlFor="weight">Architecture</label>
                <Input
                  type="text"
                  placeholder="Enter the Architecture Details"
                />
              </div>
              <div>
                <label htmlFor="price">Os</label>
                <Input type="number" placeholder="Enter the OS Details" />
              </div>
              <div>
                <label htmlFor="price">Supporting Os</label>
                <Input
                  type="number"
                  placeholder="Enter the Supporting OS Details"
                />
              </div>
            </TabsContent>

            <TabsContent value="war">
              <p>Warranty</p>
              <div>
                <label htmlFor="weight">Warranty Period</label>
                <Input
                  type="text"
                  placeholder="Enter the Warranty Period Details"
                />
              </div>
              <div>
                <label htmlFor="price">Warranty Type</label>
                <Input type="number" placeholder="Enter the Warranty Type" />
              </div>
              <div>
                <label htmlFor="price">Warranty Summary </label>
                <Input type="number" placeholder="Enter the Warranty Summary" />
              </div>
              <div>
                <label htmlFor="price">Warranty Details</label>
                <Input
                  type="number"
                  placeholder="Enter the Supporting Warranty Details"
                />
              </div>
            </TabsContent>

            <TabsContent value="process">
              <p>Processor Details</p>
              <div>
                <label htmlFor="weight">Processor Brand</label>
                <Input
                  type="text"
                  placeholder="Enter the Warranty Period Details"
                />
              </div>
              <div>
                <label htmlFor="price">Processor Name</label>
                <Input type="number" placeholder="Enter the Warranty Type" />
              </div>
              <div>
                <label htmlFor="price">Does it have an SSD</label>
                <Input type="number" placeholder="Enter the Warranty Summary" />
              </div>
              <div>
                <label htmlFor="price">RAM</label>
                <Input
                  type="number"
                  placeholder="Enter the Supporting Warranty Details"
                />
              </div>
              <div>
                <label htmlFor="price">RAM Type</label>
                <Input
                  type="number"
                  placeholder="Enter the Supporting Warranty Details"
                />
              </div>
              <div>
                <label htmlFor="price">Emmcstoragecapacity</label>
                <Input
                  type="number"
                  placeholder="Enter the Supporting Warranty Details"
                />
              </div>
              <div>
                <label htmlFor="price">Processor Variant</label>
                <Input
                  type="number"
                  placeholder="Enter the Supporting Warranty Details"
                />
              </div>
              <div>
                <label htmlFor="price">Clock Speed</label>
                <Input
                  type="number"
                  placeholder="Enter the Supporting Warranty Details"
                />
              </div>
              <div>
                <label htmlFor="price">Ram Frequency</label>
                <Input
                  type="number"
                  placeholder="Enter the Supporting Warranty Details"
                />
              </div>
              <div>
                <label htmlFor="price">Cache</label>
                <Input
                  type="number"
                  placeholder="Enter the Supporting Warranty Details"
                />
              </div>
              <div>
                <label htmlFor="price">Graphics Card</label>
                <Input
                  type="number"
                  placeholder="Enter the Supporting Warranty Details"
                />
              </div>
              <div>
                <label htmlFor="price">Number of Cores</label>
                <Input
                  type="number"
                  placeholder="Enter the Supporting Warranty Details"
                />
              </div>
              <div>
                <label htmlFor="price">Storage Type</label>
                <Input
                  type="number"
                  placeholder="Enter the Supporting Warranty Details"
                />
              </div>
            </TabsContent>
          </Tabs>
        </form>
      </fieldset>
    </main>
  );
};

export default AddProduct;

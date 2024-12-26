// Main Schema
export interface Laptop {
    _id : string,
    name: string;
    brand: string;
    model: string;
    addToCart: boolean;
    description: string;
    release: string;
    ratings: string; 
    numberOfRatings: number;
    numberofReviews: number;
    category: string;
    numberofbuys?: number;
    spec: Spec;
    additionalDetails: AdditionalDetail;
    battery: Battery;
    connectivity: Connectivity;
    os: OperatingSystem;
    warranty: Warranty;
    displayAudio: DisplayAudio;
    processor: Processor;
    imageURL: string;
    quantity: number;
  }
  
  export interface Spec {
    graphics: string;
    weight: string;
    storagespace: string;
    price: string;
  }
  
  export interface AdditionalDetail {
    diskDrive: string;
    webCamera: string;
    keyboard: string;
    pointerDevice: string;
    color: string;
    itemDimensions: string;
  }
  
  export interface Battery {
    batterycelltype: string;
    batteryenergycontent: string;
    numberofcells: number;
  }
  
  export interface Connectivity {
    wirelessLAN: string;
    bluetooth: string;
  }
  
  export interface DisplayAudio {
    touchScreen: boolean;
    screenSize: string;
    screenResolution: string;
    screenType: string;
    speakers: string;
    internalMic: string;
  }
  

  
  export interface OperatingSystem {
    osarchitecture: string;
    os: string;
    supportingos: string;
  }
  
  export interface Processor {
    processorbrand: string;
    processorname: string;
    ssd: boolean;
    ram: string;
    ramtype: string;
    emmcstoragecapacity: string;
    processorVariant: string;
    clockSpeed: string;
    ramFrequency: string;
    cache: string;
    graphicProcessor: string;
    numberOfCores: number;
    storageType: string;
  }
  
  export interface Warranty {
    warrantyPeriod: string;
    warrantyType: string;
    warrantySummary: string;
    warrantyDetails: string;
  }
  
// src/Project/Input/Upload_text/DeviceDataContext.js

import React, { createContext, useContext, useState } from 'react';

const DeviceDataContext = createContext();

export const DeviceDataContextProvider = ({ children }) => {
  const [deviceData, setDeviceData] = useState(""); // Store only one device

  const addDevice = (device, description) => {
    setDeviceData({ device, description }); // Replace the device entry
  };

  const editDevice = (device, description) => {
    setDeviceData({ device, description });
  };

  const deleteDevice = () => {
    setDeviceData("");
  };

  return (
    <DeviceDataContext.Provider value={{ deviceData, addDevice, editDevice, deleteDevice }}>
      {children}
    </DeviceDataContext.Provider>
  );
};

export const useDeviceData = () => useContext(DeviceDataContext);

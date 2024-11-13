// CSVReader.jsx
import { useEffect } from 'react';
import Papa from 'papaparse';
// import { useDeviceData } from '../../../Project/JS/DeviceDataContext';

const CSVReader = ({ file, onParseComplete }) => {
  // const { addDevice } = useDeviceData();
  useEffect(() => {
    const reader = new FileReader();
    reader.onload = () => {
      const csvData = reader.result;
      Papa.parse(csvData, {
        complete: (results) => {
          const firstRow = results.data[0];
          const firstTwoColumns = firstRow.slice(0, 2); // Get the first two columns
          if (firstTwoColumns.length === 2) {
            const deviceName = firstTwoColumns[0].trim();
            const deviceDescription = firstTwoColumns[1].trim();
            // console.log("Device Name:", deviceName);
            // console.log("Device Description:", deviceDescription);
            onParseComplete(deviceName, deviceDescription);
          } else {
            // console.log("Extracted Text from CSV:", firstRow[0]);
            onParseComplete("", firstRow[0].trim());
          }
 
        },
        header: false // Adjust this based on your CSV structure
      });
    };
    reader.readAsText(file);
  }, [file, onParseComplete]);

  return null; // This component doesn't need to render anything
};

export default CSVReader;

// TXTReader.jsx
import { useEffect } from 'react';
// import { useDeviceData } from '../../../Project/JS/DeviceDataContext';

const TXTReader = ({ file, onParseComplete }) => {
  // const { addDevice } = useDeviceData();
  useEffect(() => {
    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result;
      const splitText = text.split(':');
      
      if (splitText.length > 1) {
        const deviceName = splitText[0].trim();
        const deviceDescription = splitText[1].trim();
        // console.log("Text Before Colon:", deviceName);
        // console.log("Text After Colon:", deviceDescription);
        onParseComplete(deviceName, deviceDescription); // Pass the data back
      } else {
        // console.log("Extracted Text from TXT:", text);
        onParseComplete("", text.trim());
      }
    };
    reader.readAsText(file);
  }, [file, onParseComplete]);

  return null; // This component doesn't need to render anything
};

export default TXTReader;

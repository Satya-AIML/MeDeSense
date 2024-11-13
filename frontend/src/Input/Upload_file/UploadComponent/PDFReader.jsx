// PDFReader.jsx
import { useEffect } from 'react';
import pdfToText from 'react-pdftotext';
// import { useDeviceData } from '../../../Project/JS/DeviceDataContext';

const PDFReader = ({ file, onParseComplete }) => {
  // const { addDevice } = useDeviceData();
  useEffect(() => {
    const extractText = async () => {
      try {
        const text = await pdfToText(file);
        const splitText = text.split(':');
      
        if (splitText.length > 1) {
          // console.log("Text Before Colon:", splitText[0].trim());
          // console.log("Text After Colon:", splitText[1].trim());
          onParseComplete(splitText[0].trim(), splitText[1].trim());
        } else {
          // console.log("Extracted Text from PDF:", text);
          onParseComplete("", text.trim());
        }
      } catch (error) {
        console.error("Failed to extract text from PDF:", error);
      }
    };

    extractText();
  }, [file, onParseComplete]);

  return null; // This component doesn't need to render anything
};

export default PDFReader;

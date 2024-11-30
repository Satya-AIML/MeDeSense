import React from 'react';
import FlipCard from './FlipCard';
import '../css/FlipCard.css';
import images from './images'; 

const ClassCard = () => {
  return (
    <div className="cards-container">
      <FlipCard
        imageSrc={images.ClassA}
        bgcolor = "#28a745"
        title="Class A"
        subtitle="Low Risk"
        classDetails={`Devices with minimal or no invasiveness, typically used on external body surfaces with low potential for harm.
        Examples: Bandages, crutches, tongue depressors.`}
      />
      <FlipCard
        imageSrc={images.ClassB}
        bgcolor = "#ffc107"
        title="Class B"
        subtitle="Low to Moderate Risk"
        classDetails="Devices with limited invasiveness and typically short or intermittent contact, often for monitoring or diagnostic use. 
        Examples: Blood pressure monitors, diagnostic devices, thermometers."
      />
      <FlipCard
        imageSrc={images.ClassC}
        bgcolor = "#fd7e14"
        title="Class C"
        subtitle="Moderate to High Risk"
        classDetails="Invasive devices that may contact sensitive tissues or remain for a prolonged duration, requiring regulatory oversight.
        Examples: Imaging devices, catheters, diagnostic ultrasound."
      />
      <FlipCard
        imageSrc={images.ClassD}
        bgcolor = "#dc3545"
        title="Class D"
        subtitle="High Risk"
        classDetails="Implantable or life-sustaining devices that support or replace essential body functions or deliver substances to critical areas.
        Examples: Cardiac implants, dialysis equipment, surgical devices"
      />
    </div>
  );
};

export default ClassCard;

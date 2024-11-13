import React from 'react';
import FlipCard from './FlipCard';
import '../css/FlipCard.css';

const ClassCard = () => {
  return (
    <div className="cards-container">
      <FlipCard
        imageSrc="https://path-to-image-class-a.jpg"
        title="Class A"
        subtitle="Low Risk"
        classDetails="Devices with minimal or no invasiveness, typically used on external body surfaces with low potential for harm.
        Examples: Bandages, crutches, tongue depressors."
      />
      <FlipCard
        imageSrc="https://path-to-image-class-b.jpg"
        title="Class B"
        subtitle="Low to Moderate Risk"
        classDetails="Devices with limited invasiveness and typically short or intermittent contact, often for monitoring or diagnostic use. 
        Examples: Blood pressure monitors, diagnostic devices, thermometers."
      />
      <FlipCard
        imageSrc="https://path-to-image-class-c.jpg"
        title="Class C"
        subtitle="Moderate to High Risk"
        classDetails="Invasive devices that may contact sensitive tissues or remain for a prolonged duration, requiring regulatory oversight.
        Examples: Imaging devices, catheters, diagnostic ultrasound."
      />
      <FlipCard
        imageSrc="https://path-to-image-class-d.jpg"
        title="Class D"
        subtitle="High Risk"
        classDetails="Implantable or life-sustaining devices that support or replace essential body functions or deliver substances to critical areas.
        Examples: Cardiac implants, dialysis equipment, surgical devices"
      />
    </div>
  );
};

export default ClassCard;

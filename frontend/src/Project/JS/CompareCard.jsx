// src/Project/JS/CompareCard.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';

const CompareCard = () => {
    const location = useLocation();
    const { device1, description1, device2, description2 } = location.state || {};
    const compare = device1 === device2 && description1 === description2;

    return (
        <div>
            hi there { compare }
        </div>
    );
};
export default CompareCard;
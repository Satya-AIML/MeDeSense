// src/Project/JS/DeviceTable.jsx

import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useDeviceData } from '../../Project/JS/DeviceDataContext';
import TextInputPopup from '../../Input/Upload_text/TextInputIndex';
import PredictionButton from '../../Component/PredictionButton';
import '../css/DeviceTable.css';

const DeviceTable = () => {
  const { deviceData, editDevice, deleteDevice } = useDeviceData();
  const [showEditPopup, setShowEditPopup] = useState(false);

  const handleEditClick = () => setShowEditPopup(true);
  const handleDeleteClick = () => deleteDevice();

  const handleEditSubmit = (device, description) => {
    editDevice(device, description);
    setShowEditPopup(false);
  };

  return (
    <div>
      <table className="device-table">
        <thead>
          <tr>
            <th>Device Name</th>
            <th>Device Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {deviceData ? (
            <tr>
              <td>{deviceData.device}</td>
              <td>{deviceData.description}</td>
              <td className="actions">
                <FaEdit className="icon edit-icon" title="Edit" onClick={handleEditClick} />
                <FaTrash className="icon delete-icon" title="Delete" onClick={handleDeleteClick} />
              </td>
            </tr>
          ) : (
            <tr>
              <td colSpan="3">No device added</td>
            </tr>
          )}
        </tbody>
      </table>

      {showEditPopup && (
        <TextInputPopup
          onClose={() => setShowEditPopup(false)}
          onSubmit={handleEditSubmit}
          initialDevice={deviceData.device || ""}
          initialDescription={deviceData.description || ""}
        />
      )}

      {/* Render the PredictionButton component */}
      <PredictionButton deviceData={deviceData} />
    </div>
  );
};

export default DeviceTable;

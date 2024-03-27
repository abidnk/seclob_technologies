import React, { useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { CircularProgress } from '@mui/material';

function FileUploader({ setShowTable }) { // Destructuring setShowTable from props
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowTable(true); // Use setShowTable to update showTable state in parent component
    }, 2000);
  };

  return (
    <div
      style={{
        border: '2px dashed #ccc',
        borderRadius: '5px',
        padding: '20px',
        textAlign: 'center',
        width: '500px',
      }}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <input
        type="file"
        accept=".csv, .xlsx, .xls"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="fileInput"
      />
      <label htmlFor="fileInput">
        <img
          src="https://w7.pngwing.com/pngs/162/301/png-transparent-microsoft-excel-logo-thumbnail.png"
          alt="Excel Logo"
          style={{ marginRight: '5px', width: '44px' }}
        />
        <p>Drag & drop file here or click to choose</p>
      </label>
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
      <br />
      <button
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px 185px',
          cursor: 'pointer',
          backgroundColor: '#605BFF',
          border: 'none',
          color: '#FFFFFF',
          borderRadius: '10px',
          position: 'relative',
        }}
        onClick={handleClick}
        disabled={loading}
      >
        <CloudUploadIcon style={{ marginRight: '8px' }} />
        <span style={{ flexGrow: 1 }}>Upload</span>
        {loading && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              right: '150px',
              transform: 'translateY(-50%)',
            }}
          >
            <CircularProgress size={24} color="inherit" />
          </div>
        )}
      </button>
    </div>
  );
}

export default FileUploader;

import React, { useState } from 'react';
import * as XLSX from 'xlsx';

function ExcelUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [excelData, setExcelData] = useState(null);

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  // Function to handle file upload
  const handleUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        // Extract required columns (id, link, prefix) based on their indexes
        const mappedData = jsonData.map((row) => ({
          id: row[0], // assuming id is in the first column (index 0)
          link: row[1], // assuming link is in the second column (index 1)
          prefix: row[2], // assuming prefix is in the third column (index 2)
        }));

        setExcelData(mappedData);
      };
      reader.readAsArrayBuffer(selectedFile);
      setUploadedFile(selectedFile);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="fileInput"
      />
      <label htmlFor="fileInput">
        <div
          style={{
            width: '200px',
            height: '150px',
            border: '2px dashed #ccc',
            borderRadius: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          {selectedFile ? (
            <div>
              <p>Selected file: {selectedFile.name}</p>
              <button onClick={handleUpload}>Upload</button>
            </div>
          ) : (
            <p>Drag & drop or select Excel file</p>
          )}
        </div>
      </label>
      {/* Display the uploaded file */}
      {uploadedFile && (
        <p>Uploaded file: {uploadedFile.name}</p>
      )}
      {/* Display the mapped Excel data */}
      {excelData && (
        <div>
          <h3>Mapped Excel Data:</h3>
          <ul>
            {excelData.map((row, index) => (
              <li key={index}>
                ID: {row.id}, Link: {row.link}, Prefix: {row.prefix}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ExcelUploader;

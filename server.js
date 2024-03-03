const express = require('express');
const bodyParser = require('body-parser');
const xlsx = require('xlsx');
const fs = require('fs');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
  const { formData } = req.body;

  // Load existing Excel file or create a new one
  let workbook;
  const excelFilePath = 'registration_data.xlsx';
  if (fs.existsSync(excelFilePath)) {
    workbook = xlsx.readFile(excelFilePath);
  } else {
    workbook = xlsx.utils.book_new();
  }

  // Add data to the Excel sheet
  const worksheet = xlsx.utils.json_to_sheet([formData]);
  xlsx.utils.book_append_sheet(workbook, worksheet, 'Registration Data');

  // Write to the Excel file
  xlsx.writeFile(workbook, excelFilePath);

  res.status(200).json({ message: 'Form submitted successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

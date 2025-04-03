const uploadInvoiceData = (req, res) => {
  // Validate request body
  if (!req.body || !req.body.invoices) {
    return res.status(400).json({
      instance: '/api/invoices/upload-invoice-data',
      detail: 'Missing invoice data in request body',
      title: 'Bad request',
      message: 'Bad request',
      status: '400'
    });
  }

  const mockResponse = {
    uploadStatus: "SUCCESSFUL",
    successCount: 1,
    failureCount: 0,
    validationResults: [
      {
        invoiceReference: req.body.invoices[0]?.invoiceReference || "INV123",
        validationState: "SUCCESS",
        validationMessage: "Invoice data uploaded successfully"
      }
    ]
  };

  res.status(201).json(mockResponse);
};

module.exports = {
  uploadInvoiceData
}; 
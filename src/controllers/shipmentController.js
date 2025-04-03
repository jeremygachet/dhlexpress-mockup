const createShipment = (req, res) => {
  const mockResponse = {
    shipmentTrackingNumber: "123456789",
    documentImages: [
      {
        imageFormat: "PDF",
        content: "base64EncodedContent..."
      }
    ],
    documents: [
      {
        typeCode: "waybill",
        imageFormat: "PDF",
        content: "base64EncodedContent..."
      }
    ],
    packages: [
      {
        referenceNumber: "1234",
        trackingNumber: "123456789-1",
        volumetricWeight: 1.5
      }
    ],
    shipmentDetails: {
      serviceHandlingFeatureCodes: ["HD"],
      totalWeight: 1.5,
      weightUnit: "KG",
      accounts: [
        {
          typeCode: "shipper",
          number: "123456789"
        }
      ]
    },
    estimatedDeliveryDate: {
      estimatedDeliveryDate: "2024-03-26",
      estimatedDeliveryType: "QDDF"
    }
  };

  res.status(201).json(mockResponse);
};

const validateShipment = (req, res) => {
  const mockResponse = {
    warnings: [],
    isValid: true,
    validationResults: [
      {
        validationState: "SUCCESS",
        validationMessage: "Shipment is valid"
      }
    ]
  };

  res.json(mockResponse);
};

module.exports = {
  createShipment,
  validateShipment
}; 
const getShipmentTracking = (req, res) => {
  // Required parameters
  const requiredParams = ['trackingNumber'];
  const missingParams = requiredParams.filter(param => !req.query[param]);
  
  if (missingParams.length > 0) {
    return res.status(400).json({
      instance: '/api/tracking',
      detail: `Missing required parameters: ${missingParams.join(', ')}`,
      title: 'Bad request',
      message: 'Bad request',
      status: '400'
    });
  }

  const mockResponse = {
    shipments: [
      {
        shipmentTrackingNumber: req.query.trackingNumber,
        status: "DELIVERED",
        shipmentTimestamp: "2024-03-25T10:00:00",
        estimatedDeliveryDate: "2024-03-26",
        estimatedDeliveryTime: "12:00",
        serviceArea: [
          {
            code: "123",
            description: "Sample Service Area"
          }
        ],
        details: {
          weight: 1.5,
          weightUnit: "KG",
          shipperDetails: {
            name: "John Doe",
            postalAddress: {
              cityName: "New York",
              countryCode: "US",
              postalCode: "10001"
            }
          },
          receiverDetails: {
            name: "Jane Smith",
            postalAddress: {
              cityName: "London",
              countryCode: "GB",
              postalCode: "SW1A1AA"
            }
          }
        },
        events: [
          {
            timestamp: "2024-03-26T12:00:00",
            location: {
              address: {
                cityName: "London",
                countryCode: "GB"
              }
            },
            statusCode: "DELIVERED",
            status: "Delivered",
            description: "Shipment has been delivered"
          },
          {
            timestamp: "2024-03-26T08:00:00",
            location: {
              address: {
                cityName: "London",
                countryCode: "GB"
              }
            },
            statusCode: "TRANSIT",
            status: "In Transit",
            description: "Shipment is out for delivery"
          },
          {
            timestamp: "2024-03-25T10:00:00",
            location: {
              address: {
                cityName: "New York",
                countryCode: "US"
              }
            },
            statusCode: "PICKUP",
            status: "Picked up",
            description: "Shipment picked up by courier"
          }
        ]
      }
    ]
  };

  res.json(mockResponse);
};

module.exports = {
  getShipmentTracking
}; 
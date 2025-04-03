const createPickup = (req, res) => {
  const mockResponse = {
    dispatchConfirmationNumber: "PRG123456789",
    plannedPickupDate: "2024-03-25",
    pickupWindow: {
      startTime: "10:00",
      endTime: "18:00"
    },
    totalPrice: [
      {
        currencyType: "BILLC",
        priceCurrency: "EUR",
        price: 0
      }
    ]
  };

  res.status(201).json(mockResponse);
};

const cancelPickup = (req, res) => {
  const { dispatchConfirmationNumber } = req.params;
  
  // Validate required query parameters
  if (!req.query.requestorName) {
    return res.status(400).json({
      instance: `/api/pickups/${dispatchConfirmationNumber}`,
      detail: "Missing mandatory parameters: requestorName",
      title: "Missing parameters",
      message: "Bad request",
      status: "400"
    });
  }

  // Success response is empty
  res.status(200).send();
};

const updatePickup = (req, res) => {
  const { dispatchConfirmationNumber } = req.params;
  
  const mockResponse = {
    dispatchConfirmationNumber: dispatchConfirmationNumber,
    plannedPickupDate: "2024-03-26", // Updated date
    pickupWindow: {
      startTime: "14:00", // Updated time window
      endTime: "16:00"
    }
  };

  res.json(mockResponse);
};

module.exports = {
  createPickup,
  cancelPickup,
  updatePickup
}; 
const validateAddress = (req, res) => {
  // Required parameters
  const requiredParams = ['type', 'countryCode'];
  const missingParams = requiredParams.filter(param => !req.query[param]);
  
  if (missingParams.length > 0) {
    return res.status(400).json({
      instance: '/api/address-validate',
      detail: `Missing required parameters: ${missingParams.join(', ')}`,
      title: 'Bad request',
      message: 'Bad request',
      status: '400'
    });
  }

  // Mock response
  const mockResponse = {
    warnings: [],
    streetNumber: "123",
    streetName: "Main Street",
    cityName: req.query.cityName || "Sample City",
    countryCode: req.query.countryCode,
    postalCode: req.query.postalCode || "12345",
    serviceArea: [
      {
        code: "123",
        description: "Sample Service Area"
      }
    ],
    facilityCode: "ABC",
    serviceAreaCode: "XYZ",
    inboundSortCode: "IN123",
    outboundSortCode: "OUT456",
    suburb: "Sample Suburb",
    serviceAreaDescription: "Main Service Area",
    originServiceAreaCode: "OSA123",
    destinationServiceAreaCode: "DSA456",
    pickupServiceAreaCode: "PSA789",
    deliveryServiceAreaCode: "DSA012"
  };

  res.json(mockResponse);
};

module.exports = {
  validateAddress
}; 
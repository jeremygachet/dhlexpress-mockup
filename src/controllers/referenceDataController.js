const getReferenceData = (req, res) => {
  // Required parameters
  const requiredParams = ['type'];
  const missingParams = requiredParams.filter(param => !req.query[param]);
  
  if (missingParams.length > 0) {
    return res.status(400).json({
      instance: '/api/reference-data',
      detail: `Missing required parameters: ${missingParams.join(', ')}`,
      title: 'Bad request',
      message: 'Bad request',
      status: '400'
    });
  }

  // Different responses based on type
  const mockResponses = {
    'product-code': {
      productCodes: [
        {
          code: "P",
          name: "EXPRESS WORLDWIDE",
          description: "Door to door delivery by end of next possible business day"
        },
        {
          code: "Y",
          name: "EXPRESS 12:00",
          description: "Door to door delivery by noon next possible business day"
        }
      ]
    },
    'service-code': {
      serviceCodes: [
        {
          code: "HD",
          name: "HOME DELIVERY",
          description: "Delivery to residential address"
        },
        {
          code: "FF",
          name: "FUEL SURCHARGE",
          description: "Additional charge for fuel costs"
        }
      ]
    },
    'country-code': {
      countryCodes: [
        {
          countryCode: "US",
          countryName: "United States",
          postalCodeFormat: "^\\d{5}(-\\d{4})?$",
          postalCodeMandatory: true
        },
        {
          countryCode: "GB",
          countryName: "United Kingdom",
          postalCodeFormat: "^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$",
          postalCodeMandatory: true
        }
      ]
    }
  };

  const response = mockResponses[req.query.type] || {
    error: "Unknown reference data type"
  };

  res.json(response);
};

module.exports = {
  getReferenceData
}; 
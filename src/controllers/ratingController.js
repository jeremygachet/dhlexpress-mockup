const getRates = (req, res) => {
  // Log the request
  console.log('GET /rates');
  console.log('Query params:', req.query);

  // Validate required parameters
  const requiredParams = [
    'accountNumber',
    'originCountryCode',
    'originPostalCode',
    'originCityName',
    'destinationCountryCode',
    'destinationPostalCode',
    'destinationCityName',
    'weight'
  ];

  const missingParams = requiredParams.filter(param => !req.query[param]);
  if (missingParams.length > 0) {
    return res.status(400).json({
      instance: '/api/rates',
      detail: `Missing required parameters: ${missingParams.join(', ')}`,
      title: 'Bad request',
      message: 'Bad request',
      status: '400'
    });
  }

  // Mock response
  const mockResponse = {
    products: [
      {
        productName: "EXPRESS WORLDWIDE",
        productCode: "P",
        localProductCode: "P",
        localProductCountryCode: req.query.originCountryCode,
        networkTypeCode: "TD",
        isCustomerAgreement: false,
        weight: {
          volumetric: 0,
          provided: parseFloat(req.query.weight),
          unitOfMeasurement: "metric"
        },
        totalPrice: [
          {
            currencyType: "BILLC",
            priceCurrency: "EUR",
            price: 123.45
          }
        ],
        totalPriceBreakdown: [
          {
            currencyType: "BILLC",
            priceCurrency: "EUR",
            priceBreakdown: [
              {
                typeCode: "SPRQT",
                price: 100.00
              },
              {
                typeCode: "STTXA",
                price: 23.45
              }
            ]
          }
        ],
        detailedPriceBreakdown: [
          {
            currencyType: "BILLC",
            priceCurrency: "EUR",
            breakdown: [
              {
                name: "EXPRESS WORLDWIDE",
                serviceCode: "P",
                localServiceCode: "P",
                typeCode: "PRDT",
                price: 100.00
              },
              {
                name: "FUEL SURCHARGE",
                serviceCode: "FF",
                localServiceCode: "FF",
                typeCode: "FDFF",
                price: 23.45
              }
            ]
          }
        ]
      },
      {
        productName: "EXPRESS 12:00",
        productCode: "Y",
        localProductCode: "Y",
        localProductCountryCode: req.query.originCountryCode,
        networkTypeCode: "TD",
        isCustomerAgreement: false,
        weight: {
          volumetric: 0,
          provided: parseFloat(req.query.weight),
          unitOfMeasurement: "metric"
        },
        totalPrice: [
          {
            currencyType: "BILLC",
            priceCurrency: "EUR",
            price: 143.45
          }
        ],
        totalPriceBreakdown: [
          {
            currencyType: "BILLC",
            priceCurrency: "EUR",
            priceBreakdown: [
              {
                typeCode: "SPRQT",
                price: 120.00
              },
              {
                typeCode: "STTXA",
                price: 23.45
              }
            ]
          }
        ]
      }
    ]
  };

  res.json(mockResponse);
};

const getLandedCost = (req, res) => {
  // Mock landed cost response
  const mockResponse = {
    products: [
      {
        productName: "EXPRESS WORLDWIDE",
        productCode: "P",
        localProductCode: "P",
        totalPrice: [
          {
            currencyType: "BILLC",
            priceCurrency: "EUR",
            price: 150.00
          }
        ],
        totalPriceBreakdown: [
          {
            currencyType: "BILLC",
            priceCurrency: "EUR",
            priceBreakdown: [
              {
                typeCode: "SPRQT",
                price: 100.00
              },
              {
                typeCode: "STTXA",
                price: 20.00
              },
              {
                typeCode: "DUTAX",
                price: 30.00
              }
            ]
          }
        ]
      }
    ]
  };

  res.json(mockResponse);
};

module.exports = {
  getRates,
  getLandedCost
}; 
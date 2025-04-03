const findServicePoints = (req, res) => {
  // Required parameters
  const requiredParams = ['countryCode'];
  const missingParams = requiredParams.filter(param => !req.query[param]);
  
  if (missingParams.length > 0) {
    return res.status(400).json({
      instance: '/api/servicepoints',
      detail: `Missing required parameters: ${missingParams.join(', ')}`,
      title: 'Bad request',
      message: 'Bad request',
      status: '400'
    });
  }

  const mockResponse = {
    servicePoints: [
      {
        id: "SP123456",
        name: "DHL ServicePoint City Center",
        type: "SERVICEPOINT",
        location: {
          address: {
            streetName: "Main Street",
            streetNumber: "123",
            cityName: req.query.cityName || "Sample City",
            countryCode: req.query.countryCode,
            postalCode: req.query.postalCode || "12345"
          },
          geoCoordinates: {
            latitude: 51.5074,
            longitude: -0.1278
          }
        },
        openingHours: [
          {
            dayOfWeek: "MONDAY",
            openTime: "09:00",
            closeTime: "18:00"
          },
          {
            dayOfWeek: "TUESDAY",
            openTime: "09:00",
            closeTime: "18:00"
          },
          {
            dayOfWeek: "WEDNESDAY",
            openTime: "09:00",
            closeTime: "18:00"
          },
          {
            dayOfWeek: "THURSDAY",
            openTime: "09:00",
            closeTime: "18:00"
          },
          {
            dayOfWeek: "FRIDAY",
            openTime: "09:00",
            closeTime: "18:00"
          }
        ],
        distance: 1.5,
        distanceUnit: "KM",
        capabilities: ["PICKUP", "DROPOFF"]
      },
      {
        id: "SP789012",
        name: "DHL ServicePoint Mall",
        type: "SERVICEPOINT",
        location: {
          address: {
            streetName: "Shopping Street",
            streetNumber: "456",
            cityName: req.query.cityName || "Sample City",
            countryCode: req.query.countryCode,
            postalCode: req.query.postalCode || "12345"
          },
          geoCoordinates: {
            latitude: 51.5080,
            longitude: -0.1290
          }
        },
        openingHours: [
          {
            dayOfWeek: "MONDAY",
            openTime: "10:00",
            closeTime: "20:00"
          },
          {
            dayOfWeek: "TUESDAY",
            openTime: "10:00",
            closeTime: "20:00"
          },
          {
            dayOfWeek: "WEDNESDAY",
            openTime: "10:00",
            closeTime: "20:00"
          },
          {
            dayOfWeek: "THURSDAY",
            openTime: "10:00",
            closeTime: "20:00"
          },
          {
            dayOfWeek: "FRIDAY",
            openTime: "10:00",
            closeTime: "20:00"
          },
          {
            dayOfWeek: "SATURDAY",
            openTime: "10:00",
            closeTime: "18:00"
          }
        ],
        distance: 2.3,
        distanceUnit: "KM",
        capabilities: ["PICKUP", "DROPOFF", "LOCKER"]
      }
    ]
  };

  res.json(mockResponse);
};

module.exports = {
  findServicePoints
}; 
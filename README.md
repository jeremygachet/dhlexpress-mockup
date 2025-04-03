# DHL Express API Mock Server

This project provides a mock server that simulates the DHL Express API (MyDHL API) endpoints. It's built using Node.js and Express, and provides mock responses for various DHL Express API services.

## Features

- Mock implementation of DHL Express API endpoints
- Swagger UI documentation
- Request validation
- Realistic mock responses
- CORS enabled
- Easy to extend and customize

## Available Endpoints

### Rating
- `GET /api/rates` - Get shipping rates
- `POST /api/landed-cost` - Calculate landed costs

### Pickup
- `POST /api/pickups` - Create pickup request
- `DELETE /api/pickups/:dispatchConfirmationNumber` - Cancel pickup
- `PATCH /api/pickups/:dispatchConfirmationNumber` - Update pickup

### Shipment
- `POST /api/shipments` - Create shipment
- `POST /api/shipments/validate` - Validate shipment

### Tracking
- `GET /api/tracking` - Track shipments

### Address
- `GET /api/address-validate` - Validate addresses

### Identifiers
- `GET /api/identifiers` - Get identifiers

### Invoice
- `POST /api/invoices/upload-invoice-data` - Upload invoice data

### Service Points
- `GET /api/servicepoints` - Find service points

### Reference Data
- `GET /api/reference-data` - Get reference data (product codes, service codes, country codes)

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd mock-dhl
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The server will start on port 3001 by default.

## Usage Examples

### Get Shipping Rates
```bash
curl "http://localhost:3001/api/rates?accountNumber=123456789&originCountryCode=US&originPostalCode=10001&originCityName=New%20York&destinationCountryCode=GB&destinationPostalCode=SW1A1AA&destinationCityName=London&weight=1.5"
```

### Create Pickup
```bash
curl -X POST "http://localhost:3001/api/pickups" \
  -H "Content-Type: application/json" \
  -d '{
    "plannedPickupDate": "2024-03-25",
    "pickupWindow": {
      "startTime": "10:00",
      "endTime": "18:00"
    }
  }'
```

### Track Shipment
```bash
curl "http://localhost:3001/api/tracking?trackingNumber=123456789"
```

### Find Service Points
```bash
curl "http://localhost:3001/api/servicepoints?countryCode=GB&cityName=London&postalCode=SW1A1AA"
```

## Testing Against DHL Test Environment

To test against the actual DHL test environment, use these curl commands:

### Basic Rate Query
```bash
curl "https://express.api.dhl.com/mydhlapi/test/rates?accountNumber=123456789&originCountryCode=US&originPostalCode=10001&originCityName=New%20York&destinationCountryCode=GB&destinationPostalCode=SW1A1AA&destinationCityName=London&weight=1.5" \
  -H "Accept: application/json" \
  -H "Authorization: Basic MTIzNDU2Nzg5MHNwb29u" \
  -H "Message-Reference: 12345-abcde-67890" \
  -H "Message-Reference-Date: 2024-03-25T12:00:00GMT+01:00" \
  -H "Plugin-Name: PostmanRuntime" \
  -H "Plugin-Version: 7.32.3" \
  -H "Shipping-System-Platform-Name: PostmanRuntime" \
  -H "Shipping-System-Platform-Version: 7.32.3" \
  -H "WebStore-Platform-Name: PostmanRuntime" \
  -H "WebStore-Platform-Version: 7.32.3"
```

## API Documentation

The Swagger UI documentation is available at:
```
http://localhost:3001/api-docs
```

## Project Structure

```
mock-dhl/
├── src/
│   ├── controllers/
│   │   ├── addressController.js
│   │   ├── identifierController.js
│   │   ├── invoiceController.js
│   │   ├── pickupController.js
│   │   ├── ratingController.js
│   │   ├── referenceDataController.js
│   │   ├── servicePointController.js
│   │   ├── shipmentController.js
│   │   └── trackingController.js
│   ├── index.js
│   └── swagger.json
├── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Based on DHL Express API documentation
- Uses Express.js framework
- Swagger UI for API documentation 
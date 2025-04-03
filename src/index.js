const express = require('express');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import controllers
const ratingController = require('./controllers/ratingController');
const pickupController = require('./controllers/pickupController');
const addressController = require('./controllers/addressController');
const identifierController = require('./controllers/identifierController');
const shipmentController = require('./controllers/shipmentController');
const trackingController = require('./controllers/trackingController');
const invoiceController = require('./controllers/invoiceController');
const servicePointController = require('./controllers/servicePointController');
const referenceDataController = require('./controllers/referenceDataController');

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Load and parse Swagger definition
const swaggerDocument = require('./swagger.json');

// Serve Swagger UI at /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Create API router
const apiRouter = express.Router();

// Rating routes
apiRouter.get('/rates', ratingController.getRates);
apiRouter.post('/landed-cost', ratingController.getLandedCost);

// Pickup routes
apiRouter.post('/pickups', pickupController.createPickup);
apiRouter.delete('/pickups/:dispatchConfirmationNumber', pickupController.cancelPickup);
apiRouter.patch('/pickups/:dispatchConfirmationNumber', pickupController.updatePickup);

// Address routes
apiRouter.get('/address-validate', addressController.validateAddress);

// Identifier routes
apiRouter.get('/identifiers', identifierController.getIdentifiers);

// Shipment routes
apiRouter.post('/shipments', shipmentController.createShipment);
apiRouter.post('/shipments/validate', shipmentController.validateShipment);

// Tracking routes
apiRouter.get('/tracking', trackingController.getShipmentTracking);

// Invoice routes
apiRouter.post('/invoices/upload-invoice-data', invoiceController.uploadInvoiceData);

// Service Point routes
apiRouter.get('/servicepoints', servicePointController.findServicePoints);

// Reference Data routes
apiRouter.get('/reference-data', referenceDataController.getReferenceData);

// Mount the API router with /api prefix
app.use('/api', apiRouter);

// Start server
app.listen(port, () => {
  console.log(`Mock API server is running at http://localhost:${port}`);
  console.log(`API endpoints are available at http://localhost:${port}/api/*`);
  console.log(`Swagger UI is available at http://localhost:${port}/api-docs`);
}); 
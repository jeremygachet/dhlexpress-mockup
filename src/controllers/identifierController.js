const getIdentifiers = (req, res) => {
  // Required parameters
  const requiredParams = ['accountNumber', 'type', 'size'];
  const missingParams = requiredParams.filter(param => !req.query[param]);
  
  if (missingParams.length > 0) {
    return res.status(400).json({
      instance: '/api/identifiers',
      detail: `Missing required parameters: ${missingParams.join(', ')}`,
      title: 'Bad request',
      message: 'Bad request',
      status: '400'
    });
  }

  // Mock response
  const size = parseInt(req.query.size) || 1;
  const identifiers = Array.from({ length: size }, (_, i) => ({
    value: `DHL${Date.now()}${i}`,
    status: "AVAILABLE"
  }));

  const mockResponse = {
    identifiers: identifiers,
    warnings: []
  };

  res.json(mockResponse);
};

module.exports = {
  getIdentifiers
}; 
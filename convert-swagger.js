const yaml = require('js-yaml');
const fs = require('fs');

try {
  const swaggerYaml = fs.readFileSync('dpdhl-express-api-2.13.0_swagger.yaml', 'utf8');
  const swaggerJson = yaml.load(swaggerYaml);
  
  if (!fs.existsSync('src')) {
    fs.mkdirSync('src');
  }
  
  fs.writeFileSync('src/swagger.json', JSON.stringify(swaggerJson, null, 2));
  console.log('Successfully converted Swagger YAML to JSON');
} catch (error) {
  console.error('Error converting Swagger file:', error);
} 
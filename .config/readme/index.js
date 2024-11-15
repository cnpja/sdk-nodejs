const fs = require('fs');

/**
 * Generates a standardized README based on OpenAPI specification
 */
function generateReadme() {
  const openApi = JSON.parse(fs.readFileSync('./.config/readme/openapi.json').toString());
  const introduction = fs.readFileSync('./.config/readme/introduction.md').toString();
  const appendix = fs.readFileSync('./.config/readme/appendix.md').toString();
  const endpoints = new Map();

  // Configures README endpoint structure order
  const structure = [
    { id: 'Consulta CNPJ', name: 'office', method: 'office.read' },
    { id: 'Pesquisa CNPJ', name: 'offices', method: 'office.search', iterable: true },
    { id: 'Consulta Empresa', name: 'company', method: 'company.read' },
    { id: 'Consulta Pessoa', name: 'person', method: 'person.read' },
    { id: 'Pesquisa Pessoas', name: 'people', method: 'person.search', iterable: true },
    { id: 'Consulta CEP', name: 'zip', method: 'zip.read' },
    { id: 'Consulta Receita Federal', name: 'rfb', method: 'rfb.read' },
    { id: 'Comprovante RFB', name: 'rfb', method: 'rfb.certificate', extension: 'pdf' },
    { id: 'Consulta Simples e MEI', name: 'simples', method: 'simples.read' },
    { id: 'Comprovante Simples e MEI', name: 'simples', method: 'simples.certificate', extension: 'pdf' },
    { id: 'Consulta CCC', name: 'ccc', method: 'ccc.read' },
    { id: 'Comprovante CCC', name: 'ccc', method: 'ccc.certificate', extension: 'pdf' },
    { id: 'Consulta Suframa', name: 'suframa', method: 'suframa.read' },
    { id: 'Comprovante Suframa', name: 'suframa', method: 'suframa.certificate', extension: 'pdf' },
    { id: 'Mapa Aéreo', name: 'map', method: 'office.map', extension: 'png' },
    { id: 'Visão da Rua', name: 'street', method: 'office.street', extension: 'png' },
    { id: 'Consulta Saldo', name: 'credit', method: 'credit.read' },
  ];

  // Create a map of path definitions
  for (const path in openApi.paths) {
    for (const method in openApi.paths[path]) {
      const { operationId } = openApi.paths[path][method];
      endpoints.set(operationId, openApi.paths[path][method]);
    }
  }

  let readme = introduction

  // Iterate each item of desired structure and find matching OpenAPI endpoint definition
  for (const item of structure) {
    const { id, name, method, extension, iterable } = item;
    const { operationId, description, parameters } = endpoints.get(id) || { };

    if (!operationId) {
      throw new Error(`missing endpoint ${item}`);
    }

    // Remove unused params
    const validParams = parameters.filter((p) => ![ 'Authorization', 'sync' ].includes(p.name));
    let params = '';

    // Build the method params example
    if (validParams.length > 0) {
      params = '{\n';

      // For each param create an example entry based on description, key and value
      for (const param of validParams) {
        const { name, example, description, schema } = param;

        const key = name.includes('.') ? `'${name}'` : name;

        const baseComment = description.includes('<span') ? description.split('</span> ')[1] : description;
        let comment = baseComment.split(':')[0].replace('\n', ' ');
        comment = comment.endsWith('.') ? comment : `${comment}.`;

        let value;

        if (schema.type === 'boolean') {
          value = example ?? schema.default ?? true;
        }
        else if (schema.type === 'number') {
          value = example ?? schema.default ?? 10;
        }
        else if (schema.type === 'string') {
          value = example || schema.default;
          value = value ? `'${value}'` : 'string';
        }
        else if (schema.type === 'array') {
          if (schema.items.type === 'number') {
            value = example || schema.default
              ? `[ ${(example || schema.default).replaceAll(',', ', ')} ]`
              : '[ 1, 2, 3]';
          }
          else {
            value = example || schema.default
              ? `[ '${(example || schema.default).replaceAll(',', `', '`)}' ]`
              : `[ 'string' ]`;
          }
        }

        params += `  // ${comment}\n  ${key}: ${value},\n`
      }
      
      params += '}';
    }

    // Builds the code part according to if the method is an async iterable
    const code = iterable
      ? `for await (const ${name} of cnpja.${method}(${params})) {\n  console.log(${name});\n};`
      : `const ${name} = await cnpja.${method}(${params});\n\n${extension ? `fs.writeFileSync('./${name}.${extension}', ${name})` : `console.log(${name})`};`

    // Add the README section for current endpoint
    readme +=
`## ${operationId}

${description}

<span style="color: #DFE3E6">Utilização</span>

\`\`\`js
const { Cnpja } = require('@cnpja/sdk');${extension ? `\nconst fs = require('fs');` : ''}
const cnpja = new Cnpja({ apiKey: '[chave-de-api]' });

${code}
\`\`\`

`;
  }

  // Replace shortened file example URLs and add appendix
  readme = readme.replaceAll('/proxy/api', 'https://cnpja.com/proxy/api');
  readme = `${readme}\n${appendix}`

  // Write complete README
  fs.writeFileSync('./README.md', readme);
}

generateReadme();

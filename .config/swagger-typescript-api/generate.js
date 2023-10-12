const { generateApi } = require('swagger-typescript-api');
const path = require('path');

const renamingDictionary = {
  ConsultaReceitaFederalParams: 'RfbReadDto',
  ComprovanteRfbParams: 'RfbCertificateReadDto',
  ConsultaSimplesEMeiParams: 'SimplesReadDto',
  ComprovanteSimplesEMeiParams: 'SimplesCertificateReadDto',
  ConsultaCccParams: 'CccReadDto',
  ConsultaSuframaParams: 'SuframaReadDto',
  ComprovanteSuframaParams: 'SuframaCertificateReadDto',
  VisaoDaRuaParams: 'OfficeStreetParams',
}

generateApi({
  name: 'cnpja.dto.ts',
  output: path.resolve(process.cwd(), './source/cnpja'),
  url: 'https://api.cnpja.com/docs/json',
  generateClient: false,
  extractRequestParams: true,
  hooks: {
    onParseSchema: (_, parsedSchema) => {
      if (renamingDictionary[parsedSchema.name]) {
        parsedSchema.name = renamingDictionary[parsedSchema.name];
      }
    },
  }
});

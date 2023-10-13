const { generateApi } = require('swagger-typescript-api');
const path = require('path');

/**
 * Configures interfaces which should be renamed in
 * other to match project standards.
 * 
 * Any mapping referred as `*RawDto` means it has
 * further adjustments (see its domain folder).
 */
const renamingDictionary = {
  ConsultaCnpjParams: 'OfficeReadRawDto',
  MapaAereoParams: 'OfficeMapReadDto',
  VisaoDaRuaParams: 'OfficeStreetReadDto',
  ConsultaReceitaFederalParams: 'RfbReadDto',
  ComprovanteRfbParams: 'RfbCertificateRawReadDto',
  ConsultaSimplesEMeiParams: 'SimplesReadDto',
  ComprovanteSimplesEMeiParams: 'SimplesCertificateReadDto',
  ConsultaCccParams: 'CccReadRawDto',
  ConsultaSuframaParams: 'SuframaReadDto',
  ComprovanteSuframaParams: 'SuframaCertificateReadDto',
}

/**
 * Generates CNPJá API interfaces at /source/cnpja/cnpja.dto.ts
 * Renames input params according to dictionary.
 */
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

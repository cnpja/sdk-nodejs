const { generateApi } = require('swagger-typescript-api');
const path = require('path');

/**
 * Configures interfaces which should be renamed in
 * other to match project standards.
 */
const renamingDictionary = {
  ConsultaCnpjParams: 'OfficeReadDto',
  PesquisaCnpjParams: 'OfficeSearchDto',
  MapaAereoParams: 'OfficeMapDto',
  VisaoDaRuaParams: 'OfficeStreetDto',
  PesquisaPessoasParams: 'PersonSearchDto',
  ConsultaReceitaFederalParams: 'RfbReadDto',
  ComprovanteRfbParams: 'RfbCertificateDto',
  ConsultaSimplesEMeiParams: 'SimplesReadDto',
  ComprovanteSimplesEMeiParams: 'SimplesCertificateDto',
  ConsultaCccParams: 'CccReadDto',
  ComprovanteCccParams: 'CccCertificateDto',
  ConsultaSuframaParams: 'SuframaReadDto',
  ComprovanteSuframaParams: 'SuframaCertificateDto',
}

/**
 * Generates CNPJá API interfaces at /source/cnpja/cnpja.dto.ts
 * Renames input params according to dictionary.
 */
generateApi({
  name: 'cnpja.dto.ts',
  output: path.resolve(process.cwd(), './source/cnpja'),
  url: 'https://api.cnpja-stg.com/docs/json',
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

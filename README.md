# CNPJá! Node.js SDK

Pacote para interagir com a API de consultas CNPJ em tempo real fornecida pelo CNPJá.

Baseado na especificação da API disponível em:  
https://cnpja.com/api

- [Requisitos](#requisitos)
- [Instalação](#instala--o)
- [Autenticação](#autentica--o)
- [Guia Rápido](#guia-r-pido)
- [Dados Empresariais](#dados-empresariais)
- [Mapas e Visão da Rua](#mapas-e-vis-o-da-rua)
- [Receita Federal](#receita-federal)
- [Simples Nacional](#simples-nacional)
- [Cadastro de Contribuintes](#cadastro-de-contribuintes)
- [SUFRAMA](#suframa)
- [Correios](#correios)
- [Utilitários](#utilit-rios)

---

## Requisitos

- Node.js 18 ou superior: Necessário para suporte ao `fetch()` nativo.
- Chave de API: Disponível gratuitamente registrando-se pelo website [CNPJá!](https://cnpja.com/me)

## Instalação

Instale o pacote utilizando o gerenciador de sua preferência:

```
npm i @cnpja/sdk
pnpm i @cnpja/sdk
yarn add @cnpja/sdk
```

## Autenticação

Instancie o pacote utilizando sua chave de API:

```ts
import { Cnpja } from '@cnpja/sdk';

const cnpja = new Cnpja({ apiKey: 'sua_api_key' });
```

## Guia Rápido

Utilize o método `office.read()` para ler múltiplos dados de forma consolidada com suporte a consulta em tempo real:

```ts
import { Cnpja } from '@cnpja/sdk';

const cnpja = new Cnpja({ apiKey: 'sua_api_key' });

const office = await cnpja.office.read({
  taxId: '37335118000180', // CNPJ a ser consultado
  maxAge: 7, // Defasagem máxima dos dados em dias
  simples: true, // Adiciona se optante pelo Simples Nacional e MEI
  registrations: [ 'BR' ], // Adiciona as Inscrições Estaduais de todas UFs
  geocoding: true, // Adiciona latitude e longitude do endereço
});

console.log(office);
```

## Dados Empresariais 

Permite navegar estabelecimentos, empresas e pessoas:

```ts
const office = await cnpja.office.read({ taxId: '37335118000180' });
const company = await cnpja.company.read({ id: 37335118 });
const person = await cnpja.person.read({ id: '0ee5ad51-e58d-4400-a68a-1ae0aaf394c6' });

console.log(office);
console.log(company);
console.log(person);
```

É possível utilizar as APIs de dados empresariais para explorar relacionamentos complexos, como por exemplo encontrar todos os outros estabelecimentos que os sócios de um CNPJ estão relacionados:

```ts
const office = await cnpja.office.read({ taxId: '33131541000108' });

const peopleIds = office.company.members.map((m) => m.person.id);
const people = await Promise.all(peopleIds.map((id) => cnpja.person.read({ id })));

const relatedCompaniesIds = people.flatMap((p) => p.membership).map((c) => c.company.id);
const relatedCompaniesUniqueIds = [ ...new Set(relatedCompaniesIds) ];

const relatedCompanies = await Promise.all(relatedCompaniesUniqueIds.map((id) => cnpja.company.read({ id })));
const relatedOffices = relatedCompanies.flatMap((c) => c.offices);

console.log(relatedCompanies);
```

## Mapas e Visão da Rua

Gera arquivos de imagens referentes ao mapa aéreo e visão da rua do estabelecimento desejado:

```ts
import fs from 'fs/promises';

const officeMap = await cnpja.office.map({ taxId: '37335118000180' });
const officeStreet = await cnpja.office.street({ taxId: '37335118000180' });

fs.writeFileSync('./office.map.png', officeMap);
fs.writeFileSync('./office.street.png', officeStreet);
```

## Receita Federal

Dados de cadastro na RFB, bem como emissão do comprovante em PDF:

```ts
const rfb = await cnpja.rfb.read({ taxId: '37335118000180' });
const rfbCertificate = await cnpja.rfb.certificate({ taxId: '37335118000180' });

console.log(rfb);
fs.writeFileSync('./rfb.certificate.pdf', rfbCertificate);
```

## Simples Nacional

Dados de cadastro na Simples Nacional, bem como emissão do comprovante em PDF:

```ts
const simples = await cnpja.simples.read({ taxId: '37335118000180' });
const simplesCertificate = await cnpja.simples.certificate({ taxId: '37335118000180' });

console.log(simples);
fs.writeFileSync('./simples.certificate.pdf', simplesCertificate);
```

## Cadastro de Contribuintes

Dados das Inscrições Estaduais:

```ts
const ccc = await cnpja.ccc.read({ taxId: '00028986014753' });

console.log(ccc);
```

## SUFRAMA

Dados da inscrição SUFRAMA, bem como emissão do comprovante em PDF:

```ts
const suframa = await cnpja.suframa.read({ taxId: '28575910000111' });
const suframaCertificate = await cnpja.suframa.certificate({ taxId: '28575910000111' });

console.log(suframa);
fs.writeFileSync('./suframa.certificate.pdf', suframaCertificate);
```

## Correios

Consulta de CEP:

```ts
const zip = await cnpja.zip.read({ zip: '01452922' });

console.log(zip);
```


## Utilitários

Ferramentas para assinatura de URLs públicas e consulta de créditos

```ts
const signature = await cnpja.signature.create({ url: 'https://api.cnpja.com/company/37335118' });
const credit = await cnpja.credit.read();

console.log(signature);
console.log(credit);
```

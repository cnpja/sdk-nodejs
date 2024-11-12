# CNPJá — SDK para Node.js

Pacote para interagir com a API de consultas CNPJ em tempo real fornecida pelo CNPJá.

Baseado na especificação da API disponível em:  
https://cnpja.com/api/reference

## Requisitos

- Node.js 18 ou superior: Necessário para suporte ao `fetch()` nativo.
- Chave de API: Disponível gratuitamente registrando-se pelo website [CNPJá](https://cnpja.com/me).

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

const cnpja = new Cnpja({ apiKey: '[chave-de-api]' });
```


# CNPJá — SDK para Node.js

SDK gratuito para consultas em tempo real de CNPJs nos portais da Receita Federal, Simples Nacional, Cadastro de Contribuintes e SUFRAMA.

Permite pesquisas de empresas e sócios utilizando múltiplos filtros, como data de abertura, regime tributário, atividades econômicas e muito mais.

Também possibilita a emissão de comprovantes em PDF, geração de mapas aéreos e visualização da rua do estabelecimento, além de obter latitude e longitude via geocodificação.

Este pacote interage com a API de consultas CNPJ em tempo real fornecida pelo CNPJá, baseada na especificação disponível em:  
https://cnpja.com/api/reference

## Requisitos

- Node.js 18 ou superior: necessário para suporte ao `fetch()` nativo.
- (Opcional) Chave de API: disponível gratuitamente registrando-se no site [CNPJá](https://cnpja.com).

## Instalação

Instale o pacote usando o gerenciador de pacotes de sua preferência:

```
npm i @cnpja/sdk
pnpm i @cnpja/sdk
yarn add @cnpja/sdk
```

## Versão

A biblioteca permite acesso às versões comercial ou pública da API:
- **Comercial**: Requer [Chave de API](https://cnpja.com) para autenticação, inclui acesso a plano gratuito.
- **Pública**: Não requer autenticação, mas está limitada a 5 consultas por minuto por endereço IP.

# API Comercial

## Inicialização

Instancie o pacote utilizando sua chave de API:

```ts
import { Cnpja } from '@cnpja/sdk';

const cnpja = new Cnpja({ apiKey: '[chave-de-api]' });
```


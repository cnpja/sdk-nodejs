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

## Consulta CNPJ

Adquire de forma centralizada múltiplas informações de um estabelecimento, incluindo acesso a diversos portais públicos e enriquecimentos externos.

<span style="color: #DFE3E6">Fontes de Dados</span>  
• [Receita Federal 🡭](https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/cnpjreva_solicitacao.asp)  
• [Simples Nacional 🡭](https://www8.receita.fazenda.gov.br/SimplesNacional/aplicacoes.aspx?id=21)  
• [Cadastro de Contribuintes 🡭](https://dfe-portal.svrs.rs.gov.br/NFE/CCC)  
• [SUFRAMA 🡭](https://www4.suframa.gov.br/cadsuf/#/menu-externo)  
• [Google Maps 🡭](https://developers.google.com/maps)

<span style="color: #DFE3E6">Frequência de Atualizações</span>  
• Os dados podem ser obtidos online em tempo real, ou previamente armazenados em cache.  
• O modo de resolução irá respeitar a defasagem máxima fornecida em `maxAge`.  
• Atualizações individuais sob demanda.

<span style="color: #DFE3E6">Custo</span>  
• <span style="color: #EAED37">1 ₪</span> por consulta online.  
• <span style="color: #DFE3E6">0 ₪</span> por consulta em cache.  
• Sujeito a adicionais conforme escolhas de parâmetros.

<span style="color: #DFE3E6">Utilização</span>

```js
const { Cnpja } = require('@cnpja/sdk');
const cnpja = new Cnpja({ apiKey: '[chave-de-api]' });

const office = await cnpja.office.read({
  // Número do CNPJ sem pontuação.
  taxId: '37335118000180',
  // Adiciona as informações de opção pelo Simples e enquadramento no MEI.
  simples: false,
  // Adiciona o histórico de períodos anteriores do Simples e MEI.
  simplesHistory: false,
  // Adiciona as Inscrições Estaduais para as selecionadas Unidades Federativas separadas por vírgula, utilize `BR` para considerar todas.
  registrations: [ 'PR', 'RS', 'SC' ],
  // Adiciona a inscrição na SUFRAMA.
  suframa: false,
  // Adiciona a latitude e longitude do endereço.
  geocoding: false,
  // Adiciona links públicos para visualização dos arquivos selecionados separados por vírgula.
  links: [ 'RFB_CERTIFICATE', 'SIMPLES_CERTIFICATE' ],
  // Estratégia de cache utilizada na aquisição dos dados.
  strategy: 'CACHE_IF_ERROR',
  // Idade máxima, em dias, que um dado em cache é aceite, relevante para as estratégias `CACHE_IF_FRESH` e `CACHE_IF_ERROR`.
  maxAge: 45,
  // Idade máxima, em dias, que um dado em cache é aceite em caso de erro na busca online, relevante apenas para a estratégia `CACHE_IF_FRESH`.
  maxStale: 365,
});

console.log(office);
```

## Pesquisa CNPJ

Lista todos os estabelecimentos que correspondem aos filtros configurados.

<span style="color: #DFE3E6">Fontes de Dados</span>  
• [Receita Federal 🡭](https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/cnpjreva_solicitacao.asp)

<span style="color: #DFE3E6">Frequência de Atualizações</span>  
• Os dados são previamente armazenados em cache.  
• Atualizações individuais sob demanda.  
• Atualizações globais a cada 30 dias.

<span style="color: #DFE3E6">Custo</span>  
• <span style="color: #EAED37">1 ₪</span> por cada 10 estabelecimentos retornados, respeitando o `limit` fornecido.

<span style="color: #DFE3E6">Utilização</span>

```js
const { Cnpja } = require('@cnpja/sdk');
const cnpja = new Cnpja({ apiKey: '[chave-de-api]' });

for await (const offices of cnpja.office.search({
  // Token de paginação, mutualmente exclusivo com as demais propriedades.
  token: '8d47bdcbde4a7a2d4a98d5f555a19701',
  // Quantidade de registros a serem lidos por página.
  limit: 10,
  // Termos a serem incluídos na razão social ou nome fantasia, separados por espaço para correspondência no mesmo estabelecimento, ou separados por vírgula para correspondência em diferentes.
  'names.in': [ 'CNPJá', 'Banco do Brasil', 'AMBEV S/A' ],
  // Termos a serem excluídos na razão social ou nome fantasia, separados por espaço para correspondência no mesmo estabelecimento, ou separados por vírgula para correspondência em diferentes.
  'names.nin': [ 'EI', 'Eireli', 'LTDA' ],
  // Termos a serem incluídos na razão social, separados por espaço para correspondência na mesma empresa, ou separados por vírgula para correspondência em diferentes.
  'company.name.in': [ 'CNPJá', 'Banco do Brasil', 'AMBEV S/A' ],
  // Termos a serem excluídos na razão social, separados por espaço para correspondência na mesma empresa, ou separados por vírgula para correspondência em diferentes.
  'company.name.nin': [ 'EI', 'Eireli', 'LTDA' ],
  // Capital social maior ou igual ao valor especificado.
  'company.equity.gte': 12345.67,
  // Capital social menor ou igual ao valor especificado.
  'company.equity.lte': 98765.43,
  // Códigos das naturezas jurídicas a serem incluídos, separados por vírgula, conforme [IBGE 🡭](https.
  'company.nature.id.in': [ 1015, 2011, 3034 ],
  // Códigos das naturezas jurídicas a serem excluídos, separados por vírgula, conforme [IBGE 🡭](https.
  'company.nature.id.nin': [ 1015, 2011, 3034 ],
  // Códigos dos portes a serem incluídos, separados por vírgula.
  'company.size.id.in': [ 1, 3 ],
  // Indicador de opção pelo Simples Nacional.
  'company.simples.optant.eq': true,
  // Data de opção pelo Simples Nacional maior ou igual a especificada.
  'company.simples.since.gte': '2018-01-01',
  // Data de opção pelo Simples Nacional menor ou igual a especificada.
  'company.simples.since.lte': '2020-12-31',
  // Indicador de enquadramento no MEI.
  'company.simei.optant.eq': true,
  // Data de enquadramento no MEI maior ou igual a especificada.
  'company.simei.since.gte': '2018-01-01',
  // Data de enquadramento no MEI menor ou igual a especificada.
  'company.simei.since.lte': '2020-12-31',
  // Termos a serem incluídos no nome fantasia, separados por espaço para correspondência no mesmo estabelecimento, ou separados por vírgula para correspondência em diferentes.
  'alias.in': [ 'CNPJá', 'Banco do Brasil', 'AMBEV S/A' ],
  // Termos a serem excluídos no nome fantasia, separados por espaço para correspondência no mesmo estabelecimento, ou separados por vírgula para correspondência em diferentes.
  'alias.nin': [ 'Eireli', 'LTDA' ],
  // Data de abertura maior ou igual a especificada.
  'founded.gte': '2018-01-01',
  // Data de abertura menor ou igual a especificada.
  'founded.lte': '2020-12-31',
  // Indicador de estabelecimento matriz.
  'head.eq': true,
  // Data da situação cadastral maior ou igual a especificada.
  'statusDate.gte': '2018-01-01',
  // Data da situação cadastral menor ou igual a especificada.
  'statusDate.lte': '2020-12-31',
  // Códigos das situações cadastrais a serem incluídos, separados por vírgula.
  'status.id.in': [ 3, 4, 8 ],
  // Códigos dos motivos das situações cadastrais a serem incluídos, separados por vírgula, conforme [Receita Federal 🡭](http.
  'reason.id.in': [ 1, 3, 5 ],
  // Data da situação especial maior ou igual a especificada.
  'specialDate.gte': '2018-01-01',
  // Data da situação especial menor ou igual a especificada.
  'specialDate.lte': '2020-12-31',
  // Códigos das situações especiais a serem incluídos, separados por vírgula, conforme [Receita Federal 🡭](http.
  'special.id.in': [ 405, 410, 417 ],
  // Códigos dos municípios a serem incluídos, separados por vírgula, conforme [IBGE 🡭](https.
  'address.municipality.in': [ 4106902, 4205407, 4314902 ],
  // Códigos dos municípios a serem excluídos, separados por vírgula, conforme [IBGE 🡭](https.
  'address.municipality.nin': [ 4106902, 4205407, 4314902 ],
  // Termos a serem incluídos no bairro, separados por espaço para correspondência no mesmo estabelecimento, ou separados por vírgula para correspondência em diferentes.
  'address.district.in': [ 'Leblon', 'Vila Olímpia', 'Belvedere' ],
  // Termos a serem excluídos no bairro, separados por espaço para correspondência no mesmo estabelecimento, ou separados por vírgula para correspondência em diferentes.
  'address.district.nin': [ 'Leblon', 'Vila Olímpia', 'Belvedere' ],
  // Unidades federativas a serem incluídas, separadas por vírgula.
  'address.state.in': [ 'ES', 'RJ', 'SP' ],
  // Códigos de endereçamento postal a serem incluídos, separados por vírgula.
  'address.zip.in': [ '01430000', '01452922', '01310100' ],
  // Código de endereçamento postal maior ou igual ao especificado.
  'address.zip.gte': '01452922',
  // Código de endereçamento postal menor ou igual ao especificado.
  'address.zip.lte': '01452922',
  // Códigos dos países a serem incluídos, separados por vírgula, conforme [M49 🡭](https.
  'address.country.id.in': [ 32, 152, 600 ],
  // Códigos dos países a serem excluídos, separados por vírgula, conforme [M49 🡭](https.
  'address.country.id.nin': [ 32, 152, 600 ],
  // Indicador de existência de telefone.
  'phones.ex': true,
  // Códigos de DDD a serem incluídos, separados por vírgula.
  'phones.area.in': [ '11', '13', '15' ],
  // Códigos de DDD maior ou igual ao especificado.
  'phones.area.gte': '11',
  // Códigos de DDD menor ou igual ao especificado.
  'phones.area.lte': '11',
  // Indicador de existência de e-mail.
  'emails.ex': true,
  // Domínios de e-mail a serem incluídos, separados por vírgula.
  'emails.domain.in': [ 'cnpja.com', 'bb.com.br', 'ambev.com.br' ],
  // Domínios de e-mail a serem excluídos, separados por vírgula.
  'emails.domain.nin': [ 'gmail.com', 'hotmail.com', 'yahoo.com' ],
  // Códigos das atividades econômicas principais ou secundárias a serem incluídos, separados por vírgula, conforme [IBGE 🡭](https.
  'activities.id.in': [ 0111301, 1011201, 3511501 ],
  // Códigos das atividades econômicas principais ou secundárias a serem excluídos, separados por vírgula, conforme [IBGE 🡭](https.
  'activities.id.nin': [ 0111301, 1011201, 3511501 ],
  // Códigos das atividades econômicas principais a serem incluídos, separados por vírgula, conforme [IBGE 🡭](https.
  'mainActivity.id.in': [ 0111301, 1011201, 3511501 ],
  // Códigos das atividades econômicas principais a serem excluídos, separados por vírgula, conforme [IBGE 🡭](https.
  'mainActivity.id.nin': [ 0111301, 1011201, 3511501 ],
  // Códigos das atividades econômicas secundárias a serem incluídos, separados por vírgula, conforme [IBGE 🡭](https.
  'sideActivities.id.in': [ 0111301, 1011201, 3511501 ],
  // Códigos das atividades econômicas secundárias a serem excluídos, separados por vírgula, conforme [IBGE 🡭](https.
  'sideActivities.id.nin': [ 0111301, 1011201, 3511501 ],
})) {
  console.log(offices);
};
```

## Consulta Empresa

Adquire os dados de uma empresa incluindo todos os sócios e estabelecimentos.

<span style="color: #DFE3E6">Fontes de Dados</span>  
• [Receita Federal 🡭](https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/cnpjreva_solicitacao.asp)  
• [Simples Nacional 🡭](https://www8.receita.fazenda.gov.br/SimplesNacional/aplicacoes.aspx?id=21)

<span style="color: #DFE3E6">Frequência de Atualizações</span>  
• Os dados são previamente armazenados em cache.  
• Atualizações individuais sob demanda.  
• Atualizações globais a cada 30 dias.

<span style="color: #DFE3E6">Custo</span>  
• <span style="color: #DFE3E6">0 ₪</span> por consulta.

<span style="color: #DFE3E6">Utilização</span>

```js
const { Cnpja } = require('@cnpja/sdk');
const cnpja = new Cnpja({ apiKey: '[chave-de-api]' });

const company = await cnpja.company.read({
  // Código da empresa, idem aos oito primeiros caracteres do CNPJ.
  companyId: 37335118,
});

console.log(company);
```

## Consulta Pessoa

Adquire os dados de uma pessoa, incluindo todos os quadros societários dos quais faz parte.

<span style="color: #DFE3E6">Fontes de Dados</span>  
• [Receita Federal 🡭](https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/cnpjreva_solicitacao.asp)

<span style="color: #DFE3E6">Frequência de Atualizações</span>  
• Os dados são previamente armazenados em cache.  
• Atualizações individuais sob demanda.  
• Atualizações globais a cada 30 dias.

<span style="color: #DFE3E6">Custo</span>  
• <span style="color: #DFE3E6">0 ₪</span> por consulta.

<span style="color: #DFE3E6">Utilização</span>

```js
const { Cnpja } = require('@cnpja/sdk');
const cnpja = new Cnpja({ apiKey: '[chave-de-api]' });

const person = await cnpja.person.read({
  // Código da pessoa.
  personId: '1e5ed433-0f39-4309-8e85-8d21a571b212',
});

console.log(person);
```

## Pesquisa Pessoas

Lista todas as pessoas que correspondem aos filtros configurados.

<span style="color: #DFE3E6">Fontes de Dados</span>  
• [Receita Federal 🡭](https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/cnpjreva_solicitacao.asp)

<span style="color: #DFE3E6">Frequência de Atualizações</span>  
• Os dados são previamente armazenados em cache.  
• Atualizações individuais sob demanda.  
• Atualizações globais a cada 30 dias.

<span style="color: #DFE3E6">Custo</span>  
• <span style="color: #EAED37">1 ₪</span> por cada 10 pessoas retornadas, respeitando o `limit` fornecido.

<span style="color: #DFE3E6">Utilização</span>

```js
const { Cnpja } = require('@cnpja/sdk');
const cnpja = new Cnpja({ apiKey: '[chave-de-api]' });

for await (const people of cnpja.person.search({
  // Token de paginação, mutualmente exclusivo com as demais propriedades.
  token: '8d47bdcbde4a7a2d4a98d5f555a19701',
  // Quantidade de registros a serem lidos por página.
  limit: 10,
  // Tipos das pessoas serem incluídos, separados por vírgula.
  'type.in': [ 'NATURAL', 'LEGAL' ],
  // Nomes a serem incluídos, separados por espaço para correspondência na mesma pessoa, ou separados por vírgula para correspondência em diferentes.
  'name.in': [ 'Maria Oliveira', 'Ana Martins', 'João' ],
  // Nomes a serem excluídos, separados por espaço para correspondência na mesma pessoa, ou separados por vírgula para correspondência em diferentes.
  'name.nin': [ 'Maria Oliveira', 'Ana Martins', 'João' ],
  // CPFs a serem incluídos, separados por vírgula. A correspondência será feita pelos dígitos entre o quarto e nono, uma vez que não armazenamos CPFs completos em nossa plataforma.
  'taxId.in': [ '78326957062', '92854908082' ],
  // Faixas etárias a serem incluídas, separadas por vírgula.
  'age.in': [ '21-30', '31-40' ],
  // Códigos dos países a serem incluídos, separados por vírgula, conforme [M49 🡭](https.
  'country.id.in': [ 32, 152, 600 ],
  // Códigos dos países a serem excluídos, separados por vírgula, conforme [M49 🡭](https.
  'country.id.nin': [ 32, 152, 600 ],
})) {
  console.log(people);
};
```

## Consulta CEP

Adquire os dados de um código de endereçamento postal, incluindo município IBGE.

<span style="color: #DFE3E6">Fontes de Dados</span>  
• [Correios 🡭](https://buscacepinter.correios.com.br/app/endereco/index.php)

<span style="color: #DFE3E6">Frequência de Atualizações</span>  
• Os dados são previamente armazenados em cache.  
• Atualizações globais a cada 15 dias.

<span style="color: #DFE3E6">Custo</span>  
• <span style="color: #DFE3E6">0 ₪</span> por consulta.

<span style="color: #DFE3E6">Utilização</span>

```js
const { Cnpja } = require('@cnpja/sdk');
const cnpja = new Cnpja({ apiKey: '[chave-de-api]' });

const zip = await cnpja.zip.read({
  // Código de Endereçamento Postal.
  code: '01452922',
});

console.log(zip);
```

## Consulta Receita Federal

Adquire junto à Receita Federal os dados cadastrais do estabelecimento, atividades econômicas, e quadro de sócios e administradores.

<span style="color: #DFE3E6">Fontes de Dados</span>  
• [Receita Federal 🡭](https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/cnpjreva_solicitacao.asp)

<span style="color: #DFE3E6">Frequência de Atualizações</span>  
• Os dados podem ser obtidos online em tempo real, ou previamente armazenados em cache.  
• O modo de resolução irá respeitar a defasagem máxima fornecida em `maxAge`.  
• Atualizações individuais sob demanda.  
• Atualizações globais a cada 30 dias.

<span style="color: #DFE3E6">Custo</span>  
• <span style="color: #EAED37">1 ₪</span> por consulta online.  
• <span style="color: #DFE3E6">0 ₪</span> por consulta em cache.

<span style="color: #DFE3E6">Utilização</span>

```js
const { Cnpja } = require('@cnpja/sdk');
const cnpja = new Cnpja({ apiKey: '[chave-de-api]' });

const rfb = await cnpja.rfb.read({
  // Número do CNPJ sem pontuação.
  taxId: '37335118000180',
  // Estratégia de cache utilizada na aquisição dos dados.
  strategy: 'CACHE_IF_ERROR',
  // Idade máxima, em dias, que um dado em cache é aceite, relevante para as estratégias `CACHE_IF_FRESH` e `CACHE_IF_ERROR`.
  maxAge: 45,
  // Idade máxima, em dias, que um dado em cache é aceite em caso de erro na busca online, relevante apenas para a estratégia `CACHE_IF_FRESH`.
  maxStale: 365,
});

console.log(rfb);
```

## Comprovante RFB

Emite o comprovante em PDF do registro na Receita Federal.

<span style="color: #DFE3E6">Fontes de Dados</span>  
• [Receita Federal 🡭](https://solucoes.receita.fazenda.gov.br/Servicos/cnpjreva/cnpjreva_solicitacao.asp)

<span style="color: #DFE3E6">Frequência de Atualizações</span>  
• Os dados são obtidos online em tempo real.

<span style="color: #DFE3E6">Custo</span>  
• <span style="color: #EAED37">1 ₪</span> por consulta.

<span style="color: #DFE3E6">Exemplos</span>  
• [Estabelecimento Ativo](https://cnpja.com/proxy/api/assets/docs/rfb_certificate_01.pdf).  
• [Estabelecimento Baixado](https://cnpja.com/proxy/api/assets/docs/rfb_certificate_02.pdf).  
• [Estabelecimento com Múltiplos CNAEs e Sócios](https://cnpja.com/proxy/api/assets/docs/rfb_certificate_03.pdf).  
• [Estabelecimento Domiciliado no Exterior](https://cnpja.com/proxy/api/assets/docs/rfb_certificate_04.pdf).

<span style="color: #DFE3E6">Utilização</span>

```js
const { Cnpja } = require('@cnpja/sdk');
const fs = require('fs');
const cnpja = new Cnpja({ apiKey: '[chave-de-api]' });

const rfb = await cnpja.rfb.certificate({
  // Número do CNPJ sem pontuação.
  taxId: '37335118000180',
  // Páginas a incluir no comprovante separadas por vírgula.
  pages: [ 'REGISTRATION', 'MEMBERS' ],
});

fs.writeFileSync('./rfb.pdf', rfb);
```

## Consulta Simples e MEI

Adquire junto ao Simples Nacional a opção pelo regime, enquadramento no MEI, datas de inclusão, e histórico de períodos.

<span style="color: #DFE3E6">Fontes de Dados</span>  
• [Simples Nacional 🡭](https://www8.receita.fazenda.gov.br/SimplesNacional/aplicacoes.aspx?id=21)

<span style="color: #DFE3E6">Frequência de Atualizações</span>  
• Os dados podem ser obtidos online em tempo real, ou previamente armazenados em cache.  
• O modo de resolução irá respeitar a defasagem máxima fornecida em `maxAge`.  
• Atualizações individuais sob demanda.  
• Atualizações globais a cada 30 dias.

<span style="color: #DFE3E6">Custo</span>  
• <span style="color: #EAED37">1 ₪</span> por consulta online.  
• <span style="color: #DFE3E6">0 ₪</span> por consulta em cache.  
• Sujeito a adicionais conforme escolhas de parâmetros.

<span style="color: #DFE3E6">Utilização</span>

```js
const { Cnpja } = require('@cnpja/sdk');
const cnpja = new Cnpja({ apiKey: '[chave-de-api]' });

const simples = await cnpja.simples.read({
  // Número do CNPJ sem pontuação.
  taxId: '37335118000180',
  // Adiciona o histórico de períodos anteriores do Simples e MEI.
  history: false,
  // Estratégia de cache utilizada na aquisição dos dados.
  strategy: 'CACHE_IF_ERROR',
  // Idade máxima, em dias, que um dado em cache é aceite, relevante para as estratégias `CACHE_IF_FRESH` e `CACHE_IF_ERROR`.
  maxAge: 45,
  // Idade máxima, em dias, que um dado em cache é aceite em caso de erro na busca online, relevante apenas para a estratégia `CACHE_IF_FRESH`.
  maxStale: 365,
});

console.log(simples);
```

## Comprovante Simples e MEI

Emite o comprovante em PDF do registro no Simples Nacional.

<span style="color: #DFE3E6">Fontes de Dados</span>  
• [Simples Nacional 🡭](https://www8.receita.fazenda.gov.br/SimplesNacional/aplicacoes.aspx?id=21)

<span style="color: #DFE3E6">Frequência de Atualizações</span>  
• Os dados são obtidos online em tempo real.

<span style="color: #DFE3E6">Custo</span>  
• <span style="color: #EAED37">1 ₪</span> por consulta.

<span style="color: #DFE3E6">Exemplos</span>  
• [Empresa Optante Simples Nacional](https://cnpja.com/proxy/api/assets/docs/simples_certificate_01.pdf).  
• [Empresa Enquadrada no MEI](https://cnpja.com/proxy/api/assets/docs/simples_certificate_02.pdf).  
• [Empresa Desenquadrada](https://cnpja.com/proxy/api/assets/docs/simples_certificate_03.pdf).

<span style="color: #DFE3E6">Utilização</span>

```js
const { Cnpja } = require('@cnpja/sdk');
const fs = require('fs');
const cnpja = new Cnpja({ apiKey: '[chave-de-api]' });

const simples = await cnpja.simples.certificate({
  // Número do CNPJ sem pontuação.
  taxId: '37335118000180',
});

fs.writeFileSync('./simples.pdf', simples);
```

## Consulta CCC

Adquire junto ao Cadastro Centralizado de Contribuintes os números das inscrições estaduais e situações cadastrais. É possível informar o CNPJ de um estabelecimento, ou o CPF de um produtor rural.

<span style="color: #DFE3E6">Fontes de Dados</span>  
• [Cadastro de Contribuintes 🡭](https://dfe-portal.svrs.rs.gov.br/NFE/CCC)

<span style="color: #DFE3E6">Frequência de Atualizações</span>  
• Os dados podem ser obtidos online em tempo real, ou previamente armazenados em cache.  
• O modo de resolução irá respeitar a defasagem máxima fornecida em `maxAge`.  
• Atualizações individuais sob demanda.

<span style="color: #DFE3E6">Custo</span>  
• <span style="color: #EAED37">1 ₪</span> por consulta online.  
• <span style="color: #DFE3E6">0 ₪</span> por consulta em cache.

<span style="color: #DFE3E6">Utilização</span>

```js
const { Cnpja } = require('@cnpja/sdk');
const cnpja = new Cnpja({ apiKey: '[chave-de-api]' });

const ccc = await cnpja.ccc.read({
  // CNPJ ou CPF de produtor rural.
  taxId: '37335118000180',
  // Unidades Federativas para consulta separadas por vírgula, utilize `BR` para considerar todas. Consultas de CPF de produtor rural exigem informar a UF exata.
  states: [ 'PR', 'RS', 'SC' ],
  // Estratégia de cache utilizada na aquisição dos dados.
  strategy: 'CACHE_IF_ERROR',
  // Idade máxima, em dias, que um dado em cache é aceite, relevante para as estratégias `CACHE_IF_FRESH` e `CACHE_IF_ERROR`.
  maxAge: 45,
  // Idade máxima, em dias, que um dado em cache é aceite em caso de erro na busca online, relevante apenas para a estratégia `CACHE_IF_FRESH`.
  maxStale: 365,
});

console.log(ccc);
```

## Comprovante CCC

Emite o comprovante em PDF do registro no Cadastro Centralizado de Contribuintes.

<span style="color: #DFE3E6">Fontes de Dados</span>  
• [Cadastro de Contribuintes 🡭](https://dfe-portal.svrs.rs.gov.br/NFE/CCC)

<span style="color: #DFE3E6">Frequência de Atualizações</span>  
• Os dados são obtidos online em tempo real.

<span style="color: #DFE3E6">Custo</span>  
• <span style="color: #EAED37">1 ₪</span> por consulta.

<span style="color: #DFE3E6">Exemplos</span>  
• [Estabelecimento Sem Restrição](https://cnpja.com/proxy/api/assets/docs/ccc_certificate_01.pdf).  
• [Estabelecimento Bloqueado](https://cnpja.com/proxy/api/assets/docs/ccc_certificate_02.pdf).  
• [Estabelecimento com Múltiplas Inscrições](https://cnpja.com/proxy/api/assets/docs/ccc_certificate_03.pdf).  
• [Produtor Rural](https://cnpja.com/proxy/api/assets/docs/ccc_certificate_04.pdf).

<span style="color: #DFE3E6">Utilização</span>

```js
const { Cnpja } = require('@cnpja/sdk');
const fs = require('fs');
const cnpja = new Cnpja({ apiKey: '[chave-de-api]' });

const ccc = await cnpja.ccc.certificate({
  // Número do CNPJ ou CPF sem pontuação.
  taxId: '37335118000180',
  // Unidade Federativa de origem. Consultas de CPF de produtor rural exigem informar a UF exata.
  state: 'SP',
});

fs.writeFileSync('./ccc.pdf', ccc);
```

## Consulta Suframa

Adquire junto à SUFRAMA os dados cadastrais do estabelecimento, situação do projeto, atividades econômicas, e incentivos fiscais.

<span style="color: #DFE3E6">Fontes de Dados</span>  
• [SUFRAMA 🡭](https://www4.suframa.gov.br/cadsuf/#/menu-externo)

<span style="color: #DFE3E6">Frequência de Atualizações</span>  
• Os dados podem ser obtidos online em tempo real, ou previamente armazenados em cache.  
• O modo de resolução irá respeitar a defasagem máxima fornecida em `maxAge`.  
• Atualizações individuais sob demanda.

<span style="color: #DFE3E6">Custo</span>  
• <span style="color: #EAED37">1 ₪</span> por consulta online.  
• <span style="color: #DFE3E6">0 ₪</span> por consulta em cache.

<span style="color: #DFE3E6">Utilização</span>

```js
const { Cnpja } = require('@cnpja/sdk');
const cnpja = new Cnpja({ apiKey: '[chave-de-api]' });

const suframa = await cnpja.suframa.read({
  // Número do CNPJ ou CPF sem pontuação.
  taxId: '37335118000180',
  // Estratégia de cache utilizada na aquisição dos dados.
  strategy: 'CACHE_IF_ERROR',
  // Idade máxima, em dias, que um dado em cache é aceite, relevante para as estratégias `CACHE_IF_FRESH` e `CACHE_IF_ERROR`.
  maxAge: 45,
  // Idade máxima, em dias, que um dado em cache é aceite em caso de erro na busca online, relevante apenas para a estratégia `CACHE_IF_FRESH`.
  maxStale: 365,
});

console.log(suframa);
```

## Comprovante Suframa

Emite o comprovante em PDF do registro na Suframa.

<span style="color: #DFE3E6">Fontes de Dados</span>  
• [SUFRAMA 🡭](https://www4.suframa.gov.br/cadsuf/#/menu-externo)

<span style="color: #DFE3E6">Frequência de Atualizações</span>  
• Os dados são obtidos online em tempo real.

<span style="color: #DFE3E6">Custo</span>  
• <span style="color: #EAED37">1 ₪</span> por consulta.

<span style="color: #DFE3E6">Exemplos</span>  
• [Estabelecimento Ativo](https://cnpja.com/proxy/api/assets/docs/suframa_certificate_01.pdf) .  
• [Estabelecimento Bloqueado](https://cnpja.com/proxy/api/assets/docs/suframa_certificate_02.pdf).  
• [Estabelecimento com Múltiplos Incentivos](https://cnpja.com/proxy/api/assets/docs/suframa_certificate_03.pdf).

<span style="color: #DFE3E6">Utilização</span>

```js
const { Cnpja } = require('@cnpja/sdk');
const fs = require('fs');
const cnpja = new Cnpja({ apiKey: '[chave-de-api]' });

const suframa = await cnpja.suframa.certificate({
  // Número do CNPJ ou CPF sem pontuação.
  taxId: '37335118000180',
});

fs.writeFileSync('./suframa.pdf', suframa);
```

## Mapa Aéreo

Gera o mapa aéreo referente ao endereço do estabelecimento.

<span style="color: #DFE3E6">Fontes de Dados</span>  
• [Google Maps 🡭](https://developers.google.com/maps)

<span style="color: #DFE3E6">Frequência de Atualizações</span>  
• Os dados são obtidos online em tempo real.

<span style="color: #DFE3E6">Custo</span>  
• <span style="color: #EAED37">3 ₪</span> por consulta.

<span style="color: #DFE3E6">Exemplos</span>  
• Tamanho: [640x640](https://cnpja.com/proxy/api/assets/docs/map_size_640x640.png), [320x320](https://cnpja.com/proxy/api/assets/docs/map_size_320x320.png), [160x160](https://cnpja.com/proxy/api/assets/docs/map_size_160x160.png).  
• Densidade: [1](https://cnpja.com/proxy/api/assets/docs/map_size_640x640.png), [2](https://cnpja.com/proxy/api/assets/docs/map_size_640x640x2.png).  
• Zoom: [2](https://cnpja.com/proxy/api/assets/docs/map_zoom_02.png), [5](https://cnpja.com/proxy/api/assets/docs/map_zoom_05.png), [8](https://cnpja.com/proxy/api/assets/docs/map_zoom_08.png), [11](https://cnpja.com/proxy/api/assets/docs/map_zoom_11.png), [14](https://cnpja.com/proxy/api/assets/docs/map_zoom_14.png), [17](https://cnpja.com/proxy/api/assets/docs/map_zoom_17.png), [20](https://cnpja.com/proxy/api/assets/docs/map_zoom_20.png).  
• Tipo: [roadmap](https://cnpja.com/proxy/api/assets/docs/map_type_roadmap.png), [terrain](https://cnpja.com/proxy/api/assets/docs/map_type_terrain.png), [satellite](https://cnpja.com/proxy/api/assets/docs/map_type_satellite.png), [hybrid](https://cnpja.com/proxy/api/assets/docs/map_type_hybrid.png).

<span style="color: #DFE3E6">Utilização</span>

```js
const { Cnpja } = require('@cnpja/sdk');
const fs = require('fs');
const cnpja = new Cnpja({ apiKey: '[chave-de-api]' });

const map = await cnpja.office.map({
  // Número do CNPJ sem pontuação.
  taxId: '37335118000180',
  // Largura em pixels.
  width: 640,
  // Altura em pixels.
  height: 640,
  // Multiplicador de densidade de pixels.
  scale: 1,
  // Nível de ampliação.
  zoom: 17,
  // Tipo do mapa.
  type: 'roadmap',
});

fs.writeFileSync('./map.png', map);
```

## Visão da Rua

Gera a visão da rua referente ao endereço do estabelecimento.

<span style="color: #DFE3E6">Fontes de Dados</span>  
• [Google Maps 🡭](https://developers.google.com/maps)

<span style="color: #DFE3E6">Frequência de Atualizações</span>  
• Os dados são obtidos online em tempo real.

<span style="color: #DFE3E6">Custo</span>  
• <span style="color: #EAED37">10 ₪</span> por consulta.

<span style="color: #DFE3E6">Exemplos</span>  
• Tamanho: [640x640](https://cnpja.com/proxy/api/assets/docs/street_size_640x640.png), [640x400](https://cnpja.com/proxy/api/assets/docs/street_size_640x400.png), [320x320](https://cnpja.com/proxy/api/assets/docs/street_size_320x320.png), [320x200](https://cnpja.com/proxy/api/assets/docs/street_size_320x200.png).  
• Campo de visão: [120](https://cnpja.com/proxy/api/assets/docs/street_fov_120.png), [90](https://cnpja.com/proxy/api/assets/docs/street_fov_90.png), [60](https://cnpja.com/proxy/api/assets/docs/street_fov_60.png).

<span style="color: #DFE3E6">Utilização</span>

```js
const { Cnpja } = require('@cnpja/sdk');
const fs = require('fs');
const cnpja = new Cnpja({ apiKey: '[chave-de-api]' });

const street = await cnpja.office.street({
  // Número do CNPJ sem pontuação.
  taxId: '37335118000180',
  // Largura em pixels.
  width: 640,
  // Altura em pixels.
  height: 640,
  // Campo de visão em graus.
  fov: 90,
});

fs.writeFileSync('./street.png', street);
```

## Consulta Saldo

Adquire a quantidade de créditos restantes em sua conta.

<span style="color: #DFE3E6">Utilização</span>

```js
const { Cnpja } = require('@cnpja/sdk');
const cnpja = new Cnpja({ apiKey: '[chave-de-api]' });

const credit = await cnpja.credit.read();

console.log(credit);
```


# API Pública

## Inicialização

Instancie o pacote:

```ts
import { CnpjaOpen } from '@cnpja/sdk';

const cnpja = new CnpjaOpen();
```

## Utilização

Uso idêntico a API Comercial, porém restrito a apenas as seguintes funcionalidades:
- Consulta CNPJ
- Consulta CEP

# Suporte

Em caso de dúvidas estamos à disposição em nossos canais de atendimento:
- E-mail: contato@cnpja.com
- WhatsApp: (11) 97156-4144

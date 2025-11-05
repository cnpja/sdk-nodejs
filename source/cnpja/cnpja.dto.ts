/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** ErrorBadRequestDto */
export interface ErrorBadRequestDto {
  /**
   * Código do status HTTP.
   * @format integer
   * @example 400
   */
  code: number;
  /**
   * Mensagem de erro.
   * @format not empty
   * @example "request validation failed"
   */
  message: string;
  /**
   * Lista com as falhas de validação.
   * @example ["taxId must be a string that obeys cnpj verification algorithm"]
   */
  constraints: string[];
}

/** ErrorUnauthorizedDto */
export interface ErrorUnauthorizedDto {
  /**
   * Código do status HTTP.
   * @format integer
   * @example 401
   */
  code: number;
  /**
   * Mensagem de erro.
   * @format not empty
   * @example "invalid authentication"
   */
  message: string;
}

/** ErrorNotFoundDto */
export interface ErrorNotFoundDto {
  /**
   * Código do status HTTP.
   * @format integer
   * @example 404
   */
  code: number;
  /**
   * Mensagem de erro.
   * @format not empty
   * @example "tax id not registered at revenue service"
   */
  message: string;
}

/** ErrorTooManyRequestsDto */
export interface ErrorTooManyRequestsDto {
  /**
   * Código do status HTTP.
   * @format integer
   * @example 429
   */
  code: number;
  /**
   * Mensagem de erro.
   * @format not empty
   * @example "not enough credits"
   */
  message: string;
  /**
   * Créditos necessários para completar a consulta.
   * @format integer
   * @example 3
   */
  required: number;
  /**
   * Créditos restantes em sua conta.
   * @format integer
   * @example 1
   */
  remaining: number;
}

/** ErrorInternalServerErrorDto */
export interface ErrorInternalServerErrorDto {
  /**
   * Código do status HTTP.
   * @format integer
   * @example 500
   */
  code: number;
  /**
   * Mensagem de erro.
   * @format not empty
   * @example "unexpected error"
   */
  message: string;
}

/** ErrorServiceUnavailableDto */
export interface ErrorServiceUnavailableDto {
  /**
   * Código do status HTTP.
   * @format integer
   * @example 503
   */
  code: number;
  /**
   * Mensagem de erro.
   * @format not empty
   * @example "revenue service is offline"
   */
  message: string;
}

/** ZipDto */
export interface ZipDto {
  /**
   * Data da última atualização.
   * @format iso8601
   * @example "2024-06-05T17:52:39.136Z"
   */
  updated: string;
  /**
   * Código do município conforme
   * [IBGE 🡭](https://www.ibge.gov.br/explica/codigos-dos-municipios.php).
   * @format integer
   * @example 3550308
   */
  municipality: number;
  /**
   * Código de Endereçamento Postal.
   * @format numeric
   * @minLength 8
   * @maxLength 8
   * @example "01452922"
   */
  code: string;
  /**
   * Logradouro.
   * @format not empty
   * @example "Avenida Brigadeiro Faria Lima"
   */
  street: string;
  /**
   * Número.
   * @format not empty
   * @example "2369"
   */
  number: string;
  /**
   * Bairro ou distrito.
   * @format not empty
   * @example "Jardim Paulistano"
   */
  district: string;
  /**
   * Município.
   * @format not empty
   * @example "São Paulo"
   */
  city: string;
  /**
   * Sigla da Unidade Federativa.
   * @example "SP"
   */
  state:
    | "AC"
    | "AL"
    | "AM"
    | "AP"
    | "BA"
    | "CE"
    | "DF"
    | "ES"
    | "GO"
    | "MA"
    | "MG"
    | "MS"
    | "MT"
    | "PA"
    | "PB"
    | "PE"
    | "PI"
    | "PR"
    | "RJ"
    | "RN"
    | "RO"
    | "RR"
    | "RS"
    | "SC"
    | "SP"
    | "SE"
    | "TO";
}

/** SuframaStatusDto */
export interface SuframaStatusDto {
  /**
   * Código da situação cadastral:
   * - `1`: Ativa.
   * - `2`: Inativa.
   * - `3`: Bloqueada.
   * - `4`: Cancelada.
   * - `5`: Cancelada Ag. Rec.
   * @format integer
   * @example 1
   */
  id: number;
  /**
   * Descrição da situação cadastral.
   * @format not empty
   * @example "Ativa"
   */
  text: string;
}

/** NatureDto */
export interface NatureDto {
  /**
   * Código da natureza jurídica conforme
   * [IBGE 🡭](https://concla.ibge.gov.br/estrutura/natjur-estrutura/natureza-juridica-2021).
   * @format integer
   * @example 2062
   */
  id: number;
  /**
   * Descrição da natureza jurídica.
   * @format not empty
   * @example "Sociedade Empresária Limitada"
   */
  text: string;
}

/** CountryDto */
export interface CountryDto {
  /**
   * Código do país conforme [M49 🡭](https://unstats.un.org/unsd/methodology/m49/).
   * @format integer
   * @example 76
   */
  id: number;
  /**
   * Nome do país.
   * @format not empty
   * @example "Brasil"
   */
  name: string;
}

/** AddressDto */
export interface AddressDto {
  /**
   * Código do município conforme
   * [IBGE 🡭](https://www.ibge.gov.br/explica/codigos-dos-municipios.php).
   * @format integer
   * @example 3550308
   */
  municipality: number;
  /**
   * Logradouro.
   * @format not empty
   * @example "Avenida Brigadeiro Faria Lima"
   */
  street: string;
  /**
   * Número.
   * @format not empty
   * @example "2369"
   */
  number: string;
  /**
   * Bairro ou distrito.
   * @format not empty
   * @example "Jardim Paulistano"
   */
  district: string;
  /**
   * Município.
   * @format not empty
   * @example "São Paulo"
   */
  city: string;
  /**
   * Sigla da Unidade Federativa.
   * @example "SP"
   */
  state:
    | "AC"
    | "AL"
    | "AM"
    | "AP"
    | "BA"
    | "CE"
    | "DF"
    | "ES"
    | "GO"
    | "MA"
    | "MG"
    | "MS"
    | "MT"
    | "PA"
    | "PB"
    | "PE"
    | "PI"
    | "PR"
    | "RJ"
    | "RN"
    | "RO"
    | "RR"
    | "RS"
    | "SC"
    | "SP"
    | "SE"
    | "TO";
  /**
   * Complemento.
   * @format not empty
   * @example "Conj 1102"
   */
  details: string;
  /**
   * Código de Endereçamento Postal.
   * @format numeric
   * @minLength 8
   * @maxLength 8
   * @example "01452922"
   */
  zip: string;
  /**
   * Latitude.
   * @format float
   * @example -23.5774994
   */
  latitude?: number;
  /**
   * Longitude.
   * @format float
   * @example -46.6864608
   */
  longitude?: number;
  /** Informações do país. */
  country: CountryDto;
}

/** PhoneDto */
export interface PhoneDto {
  /**
   * Tipo do telefone:
   * - `LANDLINE`: Linha terrestre, telefone fixo.
   * - `MOBILE`: Linha móvel, telefone celular.
   * @example "LANDLINE"
   */
  type: "LANDLINE" | "MOBILE";
  /**
   * Código de DDD.
   * @format numeric
   * @minLength 2
   * @maxLength 2
   * @example "11"
   */
  area: string;
  /**
   * Número.
   * @format numeric
   * @minLength 8
   * @maxLength 9
   * @example "971564144"
   */
  number: string;
}

/** EmailDto */
export interface EmailDto {
  /**
   * Tipo de propriedade do e-mail:
   * - `PERSONAL`: Pessoal, registrado em provedor gratuito.
   * - `CORPORATE`: Corporativo, registrado em provedor privado.
   * - `ACCOUNTING`: Contabilidade, domínio remete a empresas de contadores.
   * @example "ACCOUNTING"
   */
  ownership: "ACCOUNTING" | "CORPORATE" | "PERSONAL";
  /**
   * Endereço de e-mail.
   * @format e-mail
   * @example "contato@cnpja.com"
   */
  address: string;
  /**
   * Domínio de registro.
   * @format not empty
   * @example "cnpja.com"
   */
  domain: string;
}

/** SuframaActivityDto */
export interface SuframaActivityDto {
  /**
   * Código da atividade econômica conforme
   * [IBGE 🡭](https://concla.ibge.gov.br/busca-online-cnae.html?view=estrutura).
   * @format integer
   * @example 6311900
   */
  id: number;
  /**
   * Descrição da atividade econômica.
   * @format not empty
   * @example "Tratamento de dados, provedores de serviços de aplicação e serviços de hospedagem na internet"
   */
  text: string;
  /**
   * Indica se a atividade econômica é exercida.
   * @example true
   */
  performed: boolean;
}

/** SuframaIncentiveDto */
export interface SuframaIncentiveDto {
  /**
   * Nome do tributo incentivado.
   * @example "IPI"
   */
  tribute: "ICMS" | "IPI";
  /**
   * Benefício aplicado ao incentivo.
   * @format not empty
   * @example "Isenção"
   */
  benefit: string;
  /**
   * Finalidade do incentivo.
   * @format not empty
   * @example "Consumo Interno, Industrialização e Utilização"
   */
  purpose: string;
  /**
   * Base legal do incentivo.
   * @format not empty
   * @example "Decreto 7.212 de 2010 (Art. 81)"
   */
  basis: string;
}

/** SuframaDto */
export interface SuframaDto {
  /**
   * Número do CNPJ ou CPF sem pontuação.
   * @format cnpj|cpf
   * @example "37335118000180"
   */
  taxId: string;
  /**
   * Data da última atualização.
   * @format iso8601
   * @example "2024-06-05T17:52:39.136Z"
   */
  updated: string;
  /**
   * Número da inscrição SUFRAMA.
   * @format numeric
   * @example "200400029"
   */
  number: string;
  /**
   * Razão social.
   * @format not empty
   * @example "CNPJA TECNOLOGIA LTDA"
   */
  name: string;
  /**
   * Data de inscrição na SUFRAMA.
   * @format iso8601
   * @example "2020-01-01"
   */
  since: string;
  /**
   * Indica se o estabelecimento é a Matriz.
   * @example true
   */
  head: boolean;
  /**
   * Indica se o projeto está aprovado.
   * @example true
   */
  approved: boolean;
  /**
   * Data de aprovação do projeto.
   * @format iso8601
   * @example "2021-01-01"
   */
  approvalDate: string;
  /** Informações da situação cadastral. */
  status: SuframaStatusDto;
  /** Informações da natureza jurídica. */
  nature: NatureDto;
  /** Informações do endereço. */
  address: AddressDto;
  /** Lista de telefones. */
  phones: PhoneDto[];
  /** Lista de e-mails. */
  emails: EmailDto[];
  /** Informações da atividade econômica principal. */
  mainActivity: SuframaActivityDto;
  /** Lista de atividades econômicas secundárias. */
  sideActivities: SuframaActivityDto[];
  /** Lista de incentivos fiscais. */
  incentives: SuframaIncentiveDto[];
}

/** Buffer */
export type Buffer = object;

/** SimplesSimeiHistoryDto */
export interface SimplesSimeiHistoryDto {
  /**
   * Data de início do período.
   * @format iso8601
   * @example "2012-12-26"
   */
  from: string;
  /**
   * Data de término do período.
   * @format iso8601
   * @example "2013-12-31"
   */
  until: string;
  /**
   * Motivo de encerramento.
   * @format not empty
   * @example "Excluída por Ato Administrativo praticado pela Receita Federal do Brasil"
   */
  text: string;
}

/** SimplesSimeiDto */
export interface SimplesSimeiDto {
  /**
   * Indica se optante ou enquadrado.
   * @example true
   */
  optant: boolean;
  /**
   * Data de inclusão no período vigente.
   * @format iso8601
   * @example "2020-06-05"
   */
  since: string;
  /** Histórico de períodos anteriores. */
  history?: SimplesSimeiHistoryDto[];
}

/** SimplesDto */
export interface SimplesDto {
  /**
   * Número do CNPJ sem pontuação.
   * @format cnpj
   * @example "37335118000180"
   */
  taxId: string;
  /**
   * Data da última atualização.
   * @format iso8601
   * @example "2024-06-05T17:52:39.136Z"
   */
  updated: string;
  /** Informações da opção pelo Simples Nacional. */
  simples: SimplesSimeiDto;
  /** Informações do enquadramento no MEI. */
  simei: SimplesSimeiDto;
}

/** CompanySizeDto */
export interface CompanySizeDto {
  /**
   * Código do porte:
   * - `1`: Microempresa (ME).
   * - `3`: Empresa de Pequeno Porte (EPP).
   * - `5`: Demais.
   * @format integer
   * @example 1
   */
  id: number;
  /**
   * Sigla do porte.
   * @format not empty
   * @example "ME"
   */
  acronym: string;
  /**
   * Descrição do porte.
   * @format not empty
   * @example "Microempresa"
   */
  text: string;
}

/** OfficeStatusDto */
export interface OfficeStatusDto {
  /**
   * Código da situação cadastral:
   * - `1`: Nula.
   * - `2`: Ativa.
   * - `3`: Suspensa.
   * - `4`: Inapta.
   * - `8`: Baixada.
   * @format integer
   * @example 2
   */
  id: number;
  /**
   * Descrição da situação cadastral.
   * @format not empty
   * @example "Ativa"
   */
  text: string;
}

/** OfficeReasonDto */
export interface OfficeReasonDto {
  /**
   * Código do motivo da situação cadastral conforme
   * [Receita Federal 🡭](http://www.consultas.cge.rj.gov.br/scadastral.pdf).
   * @format integer
   * @example 1
   */
  id: number;
  /**
   * Descrição do motivo da situação cadastral.
   * @format not empty
   * @example "Extinção Por Encerramento Liquidação Voluntária"
   */
  text: string;
}

/** OfficeSpecialDto */
export interface OfficeSpecialDto {
  /**
   * Código da situação especial conforme
   * [Receita Federal 🡭](http://www38.receita.fazenda.gov.br/cadsincnac/jsp/coleta/ajuda/topicos/Eventos_de_Alteracao.htm).
   * @format integer
   * @example 416
   */
  id: number;
  /**
   * Descrição da situação especial.
   * @format not empty
   * @example "Início de Liquidação Judicial"
   */
  text: string;
}

/** ActivityDto */
export interface ActivityDto {
  /**
   * Código da atividade econômica conforme
   * [IBGE 🡭](https://concla.ibge.gov.br/busca-online-cnae.html?view=estrutura).
   * @format integer
   * @example 6311900
   */
  id: number;
  /**
   * Descrição da atividade econômica.
   * @format not empty
   * @example "Tratamento de dados, provedores de serviços de aplicação e serviços de hospedagem na internet"
   */
  text: string;
}

/** RoleDto */
export interface RoleDto {
  /**
   * Código da qualificação conforme
   * [Receita Federal 🡭](http://www.consultas.cge.rj.gov.br/codsocio.pdf).
   * @format integer
   * @example 49
   */
  id: number;
  /**
   * Descrição da qualificação.
   * @format not empty
   * @example "Sócio-Administrador"
   */
  text: string;
}

/** PersonBaseDto */
export interface PersonBaseDto {
  /**
   * Código da pessoa.
   * @format uuid
   * @example "1e5ed433-0f39-4309-8e85-8d21a571b212"
   */
  id: string;
  /**
   * Tipo da pessoa:
   * - `NATURAL`: Pessoa física.
   * - `LEGAL`: Pessoa jurídica.
   * - `FOREIGN`: Pessoa residente no exterior.
   * - `UNKNOWN`: Pessoa desconhecida.
   * @example "NATURAL"
   */
  type: "LEGAL" | "NATURAL" | "FOREIGN" | "UNKNOWN";
  /**
   * Nome ou razão social.
   * @format not empty
   * @example "João Silva"
   */
  name: string;
  /**
   * CPF ou CNPJ, presente quando `type == 'NATURAL' | 'LEGAL'`.
   * @format not empty
   * @example "***123456**"
   */
  taxId?: string;
  /**
   * Faixa etária, presente quando `type == 'NATURAL'`.
   * @example "31-40"
   */
  age?: "0-12" | "13-20" | "21-30" | "31-40" | "41-50" | "51-60" | "61-70" | "71-80" | "81+";
  /** País de origem, presente quando `type == 'FOREIGN'`. */
  country?: CountryDto;
}

/** MemberAgentDto */
export interface MemberAgentDto {
  /** Informações da pessoa representante legal. */
  person: PersonBaseDto;
  /** Informações da qualificação do representante legal. */
  role: RoleDto;
}

/** RfbMemberDto */
export interface RfbMemberDto {
  /**
   * Data de entrada na sociedade.
   * @format iso8601
   * @example "2020-06-05"
   */
  since: string;
  /** Informações da qualificação. */
  role: RoleDto;
  /** Informações do sócio ou administrador. */
  person: PersonBaseDto;
  /** Informações do representante legal, presente quando aplicável na qualificação. */
  agent: MemberAgentDto;
}

/** RfbDto */
export interface RfbDto {
  /**
   * Número do CNPJ sem pontuação.
   * @format cnpj
   * @example "37335118000180"
   */
  taxId: string;
  /**
   * Data da última atualização.
   * @format iso8601
   * @example "2024-06-05T17:52:39.136Z"
   */
  updated: string;
  /**
   * Razão social.
   * @format not empty
   * @example "CNPJA TECNOLOGIA LTDA"
   */
  name: string;
  /**
   * Ente federativo responsável, presente quando `nature.id < 2000`.
   * @format not empty
   * @example "Uniao"
   */
  jurisdiction?: string;
  /**
   * Capital social
   * @format float
   * @example 1000
   */
  equity: number;
  /** Informações da natureza jurídica. */
  nature: NatureDto;
  /** Informações do porte. */
  size: CompanySizeDto;
  /**
   * Nome fantasia.
   * @format not empty
   * @example "CNPJA"
   */
  alias: string;
  /**
   * Data de abertura.
   * @format iso8601
   * @example "2020-06-05"
   */
  founded: string;
  /**
   * Indica se o estabelecimento é a Matriz.
   * @example true
   */
  head: boolean;
  /**
   * Data da situação cadastral.
   * @format iso8601
   * @example "2020-06-05"
   */
  statusDate: string;
  /** Informações da situação cadastral. */
  status: OfficeStatusDto;
  /** Informações do motivo da situação cadastral, presente quando `status.id != 2`. */
  reason?: OfficeReasonDto;
  /**
   * Data da situação especial.
   * @format iso8601
   * @example "2022-01-01"
   */
  specialDate?: string;
  /** Informações da situação especial, presente quando `specialDate != undefined`. */
  special?: OfficeSpecialDto;
  /** Informações do endereço. */
  address: AddressDto;
  /** Lista de telefones. */
  phones: PhoneDto[];
  /** Lista de e-mails. */
  emails: EmailDto[];
  /** Informações da atividade econômica principal. */
  mainActivity: ActivityDto;
  /** Lista de atividades econômicas secundárias. */
  sideActivities: ActivityDto[];
  /** Quadro de sócios e administradores. */
  members: RfbMemberDto[];
}

/** PersonMemberCompanyDto */
export interface PersonMemberCompanyDto {
  /**
   * Código da empresa, idem aos oito primeiros caracteres do CNPJ.
   * @format integer
   * @example 37335118
   */
  id: number;
  /**
   * Razão social.
   * @format not empty
   * @example "CNPJA TECNOLOGIA LTDA"
   */
  name: string;
  /**
   * Ente federativo responsável, presente quando `nature.id < 2000`.
   * @format not empty
   * @example "Uniao"
   */
  jurisdiction?: string;
  /**
   * Capital social
   * @format float
   * @example 1000
   */
  equity: number;
  /** Informações da natureza jurídica. */
  nature: NatureDto;
  /** Informações do porte. */
  size: CompanySizeDto;
}

/** PersonMemberDto */
export interface PersonMemberDto {
  /**
   * Data de entrada na sociedade.
   * @format iso8601
   * @example "2020-06-05"
   */
  since: string;
  /** Informações da qualificação. */
  role: RoleDto;
  /** Informações do representante legal, presente quando aplicável na qualificação. */
  agent?: MemberAgentDto;
  /** Informações da empresa. */
  company: PersonMemberCompanyDto;
}

/** PersonDto */
export interface PersonDto {
  /**
   * Código da pessoa.
   * @format uuid
   * @example "1e5ed433-0f39-4309-8e85-8d21a571b212"
   */
  id: string;
  /**
   * Tipo da pessoa:
   * - `NATURAL`: Pessoa física.
   * - `LEGAL`: Pessoa jurídica.
   * - `FOREIGN`: Pessoa residente no exterior.
   * - `UNKNOWN`: Pessoa desconhecida.
   * @example "NATURAL"
   */
  type: "LEGAL" | "NATURAL" | "FOREIGN" | "UNKNOWN";
  /**
   * Nome ou razão social.
   * @format not empty
   * @example "João Silva"
   */
  name: string;
  /**
   * CPF ou CNPJ, presente quando `type == 'NATURAL' | 'LEGAL'`.
   * @format not empty
   * @example "***123456**"
   */
  taxId?: string;
  /**
   * Faixa etária, presente quando `type == 'NATURAL'`.
   * @example "31-40"
   */
  age?: "0-12" | "13-20" | "21-30" | "31-40" | "41-50" | "51-60" | "61-70" | "71-80" | "81+";
  /** País de origem, presente quando `type == 'FOREIGN'`. */
  country?: CountryDto;
  /** Lista de sociedades participantes. */
  membership: PersonMemberDto[];
}

/** PersonPageDto */
export interface PersonPageDto {
  /**
   * Token da próxima página.
   * @format not empty
   * @minLength 32
   * @maxLength 32
   * @example "8d47bdcbde4a7a2d4a98d5f555a19701"
   */
  next: string;
  /**
   * Quantidade de registros lidos.
   * @format integer
   * @min 1
   * @max 100
   * @example 100
   */
  limit: number;
  /**
   * Quantidade de registros disponíveis.
   * @format integer
   * @min 0
   * @example 345
   */
  count: number;
  /** Lista de pessoas que obedecem aos critérios de pesquisa. */
  records: PersonDto[];
}

/** MemberDto */
export interface MemberDto {
  /**
   * Data de entrada na sociedade.
   * @format iso8601
   * @example "2020-06-05"
   */
  since: string;
  /** Informações do sócio ou administrador. */
  person: PersonBaseDto;
  /** Informações da qualificação. */
  role: RoleDto;
  /** Informações do representante legal, presente quando aplicável na qualificação. */
  agent?: MemberAgentDto;
}

/** OfficeCompanyDto */
export interface OfficeCompanyDto {
  /**
   * Código da empresa, idem aos oito primeiros caracteres do CNPJ.
   * @format integer
   * @example 37335118
   */
  id: number;
  /**
   * Razão social.
   * @format not empty
   * @example "CNPJA TECNOLOGIA LTDA"
   */
  name: string;
  /**
   * Ente federativo responsável, presente quando `nature.id < 2000`.
   * @format not empty
   * @example "Uniao"
   */
  jurisdiction?: string;
  /**
   * Capital social
   * @format float
   * @example 1000
   */
  equity: number;
  /** Informações da natureza jurídica. */
  nature: NatureDto;
  /** Informações do porte. */
  size: CompanySizeDto;
  /** Informações da opção pelo Simples Nacional. */
  simples?: SimplesSimeiDto;
  /** Informações do enquadramento no MEI. */
  simei?: SimplesSimeiDto;
  /** Quadro de sócios e administradores. */
  members: MemberDto[];
}

/** RegistrationStatusDto */
export interface RegistrationStatusDto {
  /**
   * Código da situação cadastral:
   * - `1`: Sem restrição.
   * - `2`: Bloqueado como destinatário na UF.
   * - `3`: Vedada operação como destinatário na UF.
   * - `10`: Emitente bloqueado no destino.
   * @format integer
   * @example 2
   */
  id: number;
  /**
   * Descrição da situação cadastral.
   * @format not empty
   * @example "Bloqueado como destinatário na UF"
   */
  text: string;
}

/** RegistrationTypeDto */
export interface RegistrationTypeDto {
  /**
   * Código do tipo:
   * - `1`: IE Normal.
   * - `2`: IE Substituto Tributário.
   * - `3`: IE Não Contribuinte (Canteiro de Obras, IE Virtual, outros).
   * - `4`: IE Contribuinte da UF com Endereço em Outra UF.
   * - `5`: IE de Produtor Rural.
   * - `9`: IE Não Informada.
   * @format integer
   * @example 2
   */
  id: number;
  /**
   * Descrição do tipo.
   * @format not empty
   * @example "IE Substituto Tributário"
   */
  text: string;
}

/** RegistrationDto */
export interface RegistrationDto {
  /**
   * Número da Inscrição Estadual.
   * @format numeric
   * @minLength 8
   * @maxLength 14
   * @example "0962101427"
   */
  number: string;
  /**
   * Unidade Federativa de registro.
   * @example "RS"
   */
  state:
    | "AC"
    | "AL"
    | "AM"
    | "AP"
    | "BA"
    | "CE"
    | "DF"
    | "ES"
    | "GO"
    | "MA"
    | "MG"
    | "MS"
    | "MT"
    | "PA"
    | "PB"
    | "PE"
    | "PI"
    | "PR"
    | "RJ"
    | "RN"
    | "RO"
    | "RR"
    | "RS"
    | "SC"
    | "SP"
    | "SE"
    | "TO";
  /**
   * Indica se habilitada como contribuinte.
   * @example true
   */
  enabled: boolean;
  /**
   * Data da situação cadastral.
   * @format iso8601
   * @example "2021-01-21"
   */
  statusDate: string;
  /** Situação cadastral da inscrição. */
  status: RegistrationStatusDto;
  /** Tipo da inscrição. */
  type: RegistrationTypeDto;
}

/** OfficeSuframaDto */
export interface OfficeSuframaDto {
  /**
   * Número da inscrição SUFRAMA.
   * @format numeric
   * @example "200400029"
   */
  number: string;
  /**
   * Data de inscrição na SUFRAMA.
   * @format iso8601
   * @example "2020-01-01"
   */
  since: string;
  /**
   * Indica se o projeto está aprovado.
   * @example true
   */
  approved: boolean;
  /**
   * Data de aprovação do projeto.
   * @format iso8601
   * @example "2021-01-01"
   */
  approvalDate: string;
  /** Informações da situação cadastral. */
  status: SuframaStatusDto;
  /** Lista de incentivos fiscais. */
  incentives: SuframaIncentiveDto[];
}

/** OfficeLinkDto */
export interface OfficeLinkDto {
  /**
   * Tipo de arquivo a qual o link se refere.
   * @example "RFB_CERTIFICATE"
   */
  type:
    | "RFB_CERTIFICATE"
    | "SIMPLES_CERTIFICATE"
    | "CCC_CERTIFICATE"
    | "SUFRAMA_CERTIFICATE"
    | "OFFICE_MAP"
    | "OFFICE_STREET";
  /**
   * URL pública de acesso ao arquivo.
   * @format not empty
   * @example "https://api.cnpja.com/rfb/certificate?taxId=37335118000180&signature=eyJ...vcIlg"
   */
  url: string;
}

/** OfficeDto */
export interface OfficeDto {
  /**
   * Número do CNPJ sem pontuação.
   * @format cnpj
   * @example "37335118000180"
   */
  taxId: string;
  /**
   * Data da última atualização.
   * @format iso8601
   * @example "2024-06-05T17:52:39.136Z"
   */
  updated: string;
  /** Informações da empresa. */
  company: OfficeCompanyDto;
  /**
   * Nome fantasia.
   * @format not empty
   * @example "CNPJA"
   */
  alias: string;
  /**
   * Data de abertura.
   * @format iso8601
   * @example "2020-06-05"
   */
  founded: string;
  /**
   * Indica se o estabelecimento é a Matriz.
   * @example true
   */
  head: boolean;
  /**
   * Data da situação cadastral.
   * @format iso8601
   * @example "2020-06-05"
   */
  statusDate: string;
  /** Informações da situação cadastral. */
  status: OfficeStatusDto;
  /** Informações do motivo da situação cadastral, presente quando `status.id != 2`. */
  reason?: OfficeReasonDto;
  /**
   * Data da situação especial.
   * @format iso8601
   * @example "2022-01-01"
   */
  specialDate?: string;
  /** Informações da situação especial, presente quando `specialDate != undefined`. */
  special?: OfficeSpecialDto;
  /** Informações do endereço. */
  address: AddressDto;
  /** Lista de telefones. */
  phones: PhoneDto[];
  /** Lista de e-mails. */
  emails: EmailDto[];
  /** Informações da atividade econômica principal. */
  mainActivity: ActivityDto;
  /** Lista de atividades econômicas secundárias. */
  sideActivities: ActivityDto[];
  /** Inscrições Estaduais. */
  registrations?: RegistrationDto[];
  /** Lista de inscrições SUFRAMA */
  suframa?: OfficeSuframaDto[];
  /** Lista de links para arquivos. */
  links?: OfficeLinkDto[];
}

/** OfficePageRecordDto */
export interface OfficePageRecordDto {
  /**
   * Número do CNPJ sem pontuação.
   * @format cnpj
   * @example "37335118000180"
   */
  taxId: string;
  /**
   * Data da última atualização.
   * @format iso8601
   * @example "2024-06-05T17:52:39.136Z"
   */
  updated: string;
  /** Informações da empresa. */
  company: OfficeCompanyDto;
  /**
   * Nome fantasia.
   * @format not empty
   * @example "CNPJA"
   */
  alias: string;
  /**
   * Data de abertura.
   * @format iso8601
   * @example "2020-06-05"
   */
  founded: string;
  /**
   * Indica se o estabelecimento é a Matriz.
   * @example true
   */
  head: boolean;
  /**
   * Data da situação cadastral.
   * @format iso8601
   * @example "2020-06-05"
   */
  statusDate: string;
  /** Informações da situação cadastral. */
  status: OfficeStatusDto;
  /** Informações do motivo da situação cadastral, presente quando `status.id != 2`. */
  reason?: OfficeReasonDto;
  /**
   * Data da situação especial.
   * @format iso8601
   * @example "2022-01-01"
   */
  specialDate?: string;
  /** Informações da situação especial, presente quando `specialDate != undefined`. */
  special?: OfficeSpecialDto;
  /** Informações do endereço. */
  address: AddressDto;
  /** Lista de telefones. */
  phones: PhoneDto[];
  /** Lista de e-mails. */
  emails: EmailDto[];
  /** Informações da atividade econômica principal. */
  mainActivity: ActivityDto;
  /** Lista de atividades econômicas secundárias. */
  sideActivities: ActivityDto[];
}

/** OfficePageDto */
export interface OfficePageDto {
  /**
   * Token da próxima página.
   * @format not empty
   * @minLength 32
   * @maxLength 32
   * @example "8d47bdcbde4a7a2d4a98d5f555a19701"
   */
  next: string;
  /**
   * Quantidade de registros lidos.
   * @format integer
   * @min 1
   * @max 100
   * @example 100
   */
  limit: number;
  /**
   * Quantidade de registros disponíveis.
   * @format integer
   * @min 0
   * @example 345
   */
  count: number;
  /** Lista de estabelecimentos que obedecem aos critérios de pesquisa. */
  records: OfficePageRecordDto[];
}

/** ListQueryDto */
export interface ListQueryDto {
  /**
   * Termos a serem incluídos na razão social ou nome fantasia, separados por espaço para correspondência
   * no mesmo estabelecimento, ou separados por vírgula para correspondência em diferentes.
   * @example "CNPJá,Banco do Brasil,AMBEV S/A"
   */
  "names.in"?: string[];
  /**
   * Termos a serem excluídos na razão social ou nome fantasia, separados por espaço para correspondência
   * no mesmo estabelecimento, ou separados por vírgula para correspondência em diferentes.
   * @example "EI,Eireli,LTDA"
   */
  "names.nin"?: string[];
  /**
   * Termos a serem incluídos na razão social, separados por espaço para correspondência na mesma empresa,
   * ou separados por vírgula para correspondência em diferentes.
   * @example "CNPJá,Banco do Brasil,AMBEV S/A"
   */
  "company.name.in"?: string[];
  /**
   * Termos a serem excluídos na razão social, separados por espaço para correspondência na mesma empresa,
   * ou separados por vírgula para correspondência em diferentes.
   * @example "EI,Eireli,LTDA"
   */
  "company.name.nin"?: string[];
  /**
   * Capital social maior ou igual ao valor especificado.
   * @format float
   * @min 0
   * @example 12345.67
   */
  "company.equity.gte"?: number;
  /**
   * Capital social menor ou igual ao valor especificado.
   * @format float
   * @min 0
   * @example 98765.43
   */
  "company.equity.lte"?: number;
  /**
   * Códigos das naturezas jurídicas a serem incluídos, separados por vírgula, conforme
   * [IBGE 🡭](https://concla.ibge.gov.br/estrutura/natjur-estrutura/natureza-juridica-2021).
   * @example "1015,2011,3034"
   */
  "company.nature.id.in"?: number[];
  /**
   * Códigos das naturezas jurídicas a serem excluídos, separados por vírgula, conforme
   * [IBGE 🡭](https://concla.ibge.gov.br/estrutura/natjur-estrutura/natureza-juridica-2021).
   * @example "1015,2011,3034"
   */
  "company.nature.id.nin"?: number[];
  /**
   * Códigos dos portes a serem incluídos, separados por vírgula:
   * - `1`: Microempresa (ME).
   * - `3`: Empresa de Pequeno Porte (EPP).
   * - `5`: Demais.
   * @example "1,3"
   */
  "company.size.id.in"?: number[];
  /**
   * Indicador de opção pelo Simples Nacional:
   * - `true`: Apenas empresas optantes.
   * - `false`: Apenas empresas não optantes.
   * @example true
   */
  "company.simples.optant.eq"?: boolean;
  /**
   * Data de opção pelo Simples Nacional maior ou igual a especificada.
   * @format iso8601
   * @example "2018-01-01"
   */
  "company.simples.since.gte"?: string;
  /**
   * Data de opção pelo Simples Nacional menor ou igual a especificada.
   * @format iso8601
   * @example "2020-12-31"
   */
  "company.simples.since.lte"?: string;
  /**
   * Indicador de enquadramento no MEI:
   * - `true`: Apenas empresas enquadradas.
   * - `false`: Apenas empresas não enquadradas.
   * @example true
   */
  "company.simei.optant.eq"?: boolean;
  /**
   * Data de enquadramento no MEI maior ou igual a especificada.
   * @format iso8601
   * @example "2018-01-01"
   */
  "company.simei.since.gte"?: string;
  /**
   * Data de enquadramento no MEI menor ou igual a especificada.
   * @format iso8601
   * @example "2020-12-31"
   */
  "company.simei.since.lte"?: string;
  /**
   * Identificadores de listas de CNPJs a serem excluídos, separados por vírgula.
   * @example "37505509-b2a5-42c2-94f4-aa99d2033bf5"
   */
  "taxId.nin"?: string[];
  /**
   * Termos a serem incluídos no nome fantasia, separados por espaço para correspondência no mesmo
   * estabelecimento, ou separados por vírgula para correspondência em diferentes.
   * @example "CNPJá,Banco do Brasil,AMBEV S/A"
   */
  "alias.in"?: string[];
  /**
   * Termos a serem excluídos no nome fantasia, separados por espaço para correspondência no mesmo
   * estabelecimento, ou separados por vírgula para correspondência em diferentes.
   * @example "Eireli,LTDA"
   */
  "alias.nin"?: string[];
  /**
   * Data de abertura maior ou igual a especificada.
   * @format iso8601
   * @example "2018-01-01"
   */
  "founded.gte"?: string;
  /**
   * Data de abertura menor ou igual a especificada.
   * @format iso8601
   * @example "2020-12-31"
   */
  "founded.lte"?: string;
  /**
   * Indicador de estabelecimento matriz:
   * - `true`: Apenas matrizes.
   * - `false`: Apenas filiais.
   * @example true
   */
  "head.eq"?: boolean;
  /**
   * Data da situação cadastral maior ou igual a especificada.
   * @format iso8601
   * @example "2018-01-01"
   */
  "statusDate.gte"?: string;
  /**
   * Data da situação cadastral menor ou igual a especificada.
   * @format iso8601
   * @example "2020-12-31"
   */
  "statusDate.lte"?: string;
  /**
   * Códigos das situações cadastrais a serem incluídos, separados por vírgula:
   * - `1`: Nula.
   * - `2`: Ativa.
   * - `3`: Suspensa.
   * - `4`: Inapta.
   * - `8`: Baixada.
   * @example "3,4,8"
   */
  "status.id.in"?: number[];
  /**
   * Códigos dos motivos das situações cadastrais a serem incluídos, separados por vírgula, conforme
   * [Receita Federal 🡭](http://www.consultas.cge.rj.gov.br/scadastral.pdf).
   * @example "1,3,5"
   */
  "reason.id.in"?: number[];
  /**
   * Data da situação especial maior ou igual a especificada.
   * @format iso8601
   * @example "2018-01-01"
   */
  "specialDate.gte"?: string;
  /**
   * Data da situação especial menor ou igual a especificada.
   * @format iso8601
   * @example "2020-12-31"
   */
  "specialDate.lte"?: string;
  /**
   * Códigos das situações especiais a serem incluídos, separados por vírgula, conforme
   * [Receita Federal 🡭](http://www38.receita.fazenda.gov.br/cadsincnac/jsp/coleta/ajuda/topicos/Eventos_de_Alteracao.htm).
   * @example "405,410,417"
   */
  "special.id.in"?: number[];
  /**
   * Códigos dos municípios a serem incluídos, separados por vírgula, conforme
   * [IBGE 🡭](https://www.ibge.gov.br/explica/codigos-dos-municipios.php).
   * @example "4106902,4205407,4314902"
   */
  "address.municipality.in"?: number[];
  /**
   * Códigos dos municípios a serem excluídos, separados por vírgula, conforme
   * [IBGE 🡭](https://www.ibge.gov.br/explica/codigos-dos-municipios.php).
   * @example "4106902,4205407,4314902"
   */
  "address.municipality.nin"?: number[];
  /**
   * Termos a serem incluídos no logradouro, separados por espaço para correspondência no mesmo
   * estabelecimento, ou separados por vírgula para correspondência em diferentes.
   * @example "Avenida Copacabana,Rua das Pedras,Rua Oscar Freire"
   */
  "address.street.in"?: string[];
  /**
   * Termos a serem excluídos no logradouro, separados por espaço para correspondência no mesmo
   * estabelecimento, ou separados por vírgula para correspondência em diferentes.
   * @example "Avenida Copacabana,Rua das Pedras,Rua Oscar Freire"
   */
  "address.street.nin"?: string[];
  /**
   * Números do logradouro a serem incluídos, separados por vírgula.
   * @example "10,435,10387"
   */
  "address.number.in"?: string[];
  /**
   * Números do logradouro a serem excluídos, separados por vírgula.
   * @example "10,435,10387"
   */
  "address.number.nin"?: string[];
  /**
   * Termos a serem incluídos no complemento, separados por espaço para correspondência no mesmo
   * estabelecimento, ou separados por vírgula para correspondência em diferentes.
   * @example "Cj 1403,Andar 4,Bloco C"
   */
  "address.details.in"?: string[];
  /**
   * Termos a serem excluídos no complemento, separados por espaço para correspondência no mesmo
   * estabelecimento, ou separados por vírgula para correspondência em diferentes.
   * @example "Cj 1403,Andar 4,Bloco C"
   */
  "address.details.nin"?: string[];
  /**
   * Termos a serem incluídos no bairro, separados por espaço para correspondência no mesmo
   * estabelecimento, ou separados por vírgula para correspondência em diferentes.
   * @example "Leblon,Vila Olímpia,Belvedere"
   */
  "address.district.in"?: string[];
  /**
   * Termos a serem excluídos no bairro, separados por espaço para correspondência no mesmo
   * estabelecimento, ou separados por vírgula para correspondência em diferentes.
   * @example "Leblon,Vila Olímpia,Belvedere"
   */
  "address.district.nin"?: string[];
  /**
   * Unidades federativas a serem incluídas, separadas por vírgula.
   * @example "ES,RJ,SP"
   */
  "address.state.in"?: (
    | "AC"
    | "AL"
    | "AM"
    | "AP"
    | "BA"
    | "CE"
    | "DF"
    | "ES"
    | "GO"
    | "MA"
    | "MG"
    | "MS"
    | "MT"
    | "PA"
    | "PB"
    | "PE"
    | "PI"
    | "PR"
    | "RJ"
    | "RN"
    | "RO"
    | "RR"
    | "RS"
    | "SC"
    | "SP"
    | "SE"
    | "TO"
  )[];
  /**
   * Códigos de endereçamento postal a serem incluídos, separados por vírgula.
   * @example "01430000,01452922,01310100"
   */
  "address.zip.in"?: string[];
  /**
   * Código de endereçamento postal maior ou igual ao especificado.
   * @format numeric
   * @minLength 8
   * @maxLength 8
   * @example "01452922"
   */
  "address.zip.gte"?: string;
  /**
   * Código de endereçamento postal menor ou igual ao especificado.
   * @format numeric
   * @minLength 8
   * @maxLength 8
   * @example "01452922"
   */
  "address.zip.lte"?: string;
  /**
   * Códigos dos países a serem incluídos, separados por vírgula, conforme
   * [M49 🡭](https://unstats.un.org/unsd/methodology/m49/).
   * @example "32,152,600"
   */
  "address.country.id.in"?: number[];
  /**
   * Códigos dos países a serem excluídos, separados por vírgula, conforme
   * [M49 🡭](https://unstats.un.org/unsd/methodology/m49/).
   * @example "32,152,600"
   */
  "address.country.id.nin"?: number[];
  /**
   * Indicador de existência de telefone:
   * - `true`: Apenas estabelecimentos com telefone.
   * - `false`: Apenas estabelecimentos sem telefone.
   * @example true
   */
  "phones.ex"?: boolean;
  /**
   * Tipos de telefone a serem incluídos, separados por vírgula.
   * @example "LANDLINE,MOBILE"
   */
  "phones.type.in"?: ("LANDLINE" | "MOBILE")[];
  /**
   * Códigos de DDD a serem incluídos, separados por vírgula.
   * @example "11,13,15"
   */
  "phones.area.in"?: string[];
  /**
   * Códigos de DDD maior ou igual ao especificado.
   * @format numeric
   * @minLength 2
   * @maxLength 2
   * @example "11"
   */
  "phones.area.gte"?: string;
  /**
   * Códigos de DDD menor ou igual ao especificado.
   * @format numeric
   * @minLength 2
   * @maxLength 2
   * @example "11"
   */
  "phones.area.lte"?: string;
  /**
   * Números de telefone a serem incluídos, separados por vírgula.
   * @example "92635835,44594576,36285962"
   */
  "phones.number.in"?: string[];
  /**
   * Números de telefone a serem excluídos, separados por vírgula.
   * @example "92635835,44594576,36285962"
   */
  "phones.number.nin"?: string[];
  /**
   * Indicador de existência de e-mail:
   * - `true`: Apenas estabelecimentos com e-mail.
   * - `false`: Apenas estabelecimentos sem e-mail.
   * @example true
   */
  "emails.ex"?: boolean;
  /**
   * Tipos de propriedade de e-mail a serem incluídos, separados por vírgula.
   * @example "CORPORATE,ACCOUNTING"
   */
  "emails.ownership.in"?: ("ACCOUNTING" | "CORPORATE" | "PERSONAL")[];
  /**
   * Endereços de e-mail a serem incluídos, separados por vírgula.
   * @example "alex.costa@company.com,jane.doe@gmail.com,support@domain.com"
   */
  "emails.address.in"?: string[];
  /**
   * Endereços de e-mail a serem excluídos, separados por vírgula.
   * @example "alex.costa@company.com,jane.doe@gmail.com,support@domain.com"
   */
  "emails.address.nin"?: string[];
  /**
   * Domínios de e-mail a serem incluídos, separados por vírgula.
   * @example "cnpja.com,bb.com.br,ambev.com.br"
   */
  "emails.domain.in"?: string[];
  /**
   * Domínios de e-mail a serem excluídos, separados por vírgula.
   * @example "gmail.com,hotmail.com,yahoo.com"
   */
  "emails.domain.nin"?: string[];
  /**
   * Códigos das atividades econômicas principais ou secundárias a serem incluídos, separados por vírgula,
   * conforme [IBGE 🡭](https://concla.ibge.gov.br/busca-online-cnae.html?view=estrutura).
   * @example "0111301,1011201,3511501"
   */
  "activities.id.in"?: number[];
  /**
   * Códigos das atividades econômicas principais ou secundárias a serem excluídos, separados por vírgula,
   * conforme [IBGE 🡭](https://concla.ibge.gov.br/busca-online-cnae.html?view=estrutura).
   * @example "0111301,1011201,3511501"
   */
  "activities.id.nin"?: number[];
  /**
   * Códigos das atividades econômicas principais a serem incluídos, separados por vírgula, conforme
   * [IBGE 🡭](https://concla.ibge.gov.br/busca-online-cnae.html?view=estrutura).
   * @example "0111301,1011201,3511501"
   */
  "mainActivity.id.in"?: number[];
  /**
   * Códigos das atividades econômicas principais a serem excluídos, separados por vírgula, conforme
   * [IBGE 🡭](https://concla.ibge.gov.br/busca-online-cnae.html?view=estrutura).
   * @example "0111301,1011201,3511501"
   */
  "mainActivity.id.nin"?: number[];
  /**
   * Códigos das atividades econômicas secundárias a serem incluídos, separados por vírgula, conforme
   * [IBGE 🡭](https://concla.ibge.gov.br/busca-online-cnae.html?view=estrutura).
   * @example "0111301,1011201,3511501"
   */
  "sideActivities.id.in"?: number[];
  /**
   * Códigos das atividades econômicas secundárias a serem excluídos, separados por vírgula, conforme
   * [IBGE 🡭](https://concla.ibge.gov.br/busca-online-cnae.html?view=estrutura).
   * @example "0111301,1011201,3511501"
   */
  "sideActivities.id.nin"?: number[];
}

/** ListCreateDto */
export interface ListCreateDto {
  /**
   * Título da lista.
   * @format not empty
   * @maxLength 50
   * @example "Minha Lista de Empresas"
   */
  title: string;
  /**
   * Descrição da lista.
   * @format not empty
   * @maxLength 2000
   * @example "Fornecedores da unidade de Manaus."
   */
  description?: string;
  /**
   * Limite de estabelecimentos a serem obtidos ao gerar uma lista através de filtros.
   * @format integer
   * @min 1
   * @max 1000000
   * @example 10000
   */
  limit?: number;
  /**
   * Números dos CNPJs sem pontuação, mutualmente exclusivo com `query`.
   * @maxItems 1000000
   * @minItems 1
   */
  items?: string[];
  /**
   * +**1 ₪** por 10 registros.
   * Filtros de pesquisa utilizados para gerar a lista de estabelecimentos, mutualmente exclusivo com `items`.
   * Os CNPJs serão obtidos na primeira exportação e armazenados de forma estática, não sendo atualizados em execuções posteriores.
   */
  query?: ListQueryDto;
}

/** ListDto */
export interface ListDto {
  /**
   * Identificador único.
   * @format uuid
   * @example "5680a75e-750e-4c31-a1a1-e61e0e4f5618"
   */
  id: string;
  /**
   * Data de criação.
   * @format iso8601
   * @example "2024-03-11T17:30:20.757Z"
   */
  created: string;
  /**
   * Data da última atualização.
   * @format iso8601
   * @example "2024-03-27T08:47:56.384Z"
   */
  updated: string;
  /**
   * Título da lista.
   * @format not empty
   * @maxLength 50
   * @example "Minha Lista de Empresas"
   */
  title: string;
  /**
   * Descrição da lista.
   * @format not empty
   * @maxLength 2000
   * @example "Fornecedores da unidade de Manaus."
   */
  description: string;
  /**
   * Quantidade de estabelecimentos.
   * @format integer
   * @example 9264
   */
  size: number;
  /**
   * Números dos CNPJs sem pontuação.
   * @maxItems 1000000
   * @minItems 0
   */
  items: string[];
  /**
   * Filtros de pesquisa utilizados para gerar a lista de estabelecimentos.
   * Os CNPJs serão obtidos na primeira exportação e armazenados de forma estática, não sendo atualizados em execuções posteriores.
   */
  query?: ListQueryDto;
  /**
   * Limite de estabelecimentos a serem obtidos ao gerar uma lista através de filtros.
   * @format integer
   * @min 1
   * @max 1000000
   * @example 10000
   */
  limit?: number;
}

/** ListSummaryDto */
export interface ListSummaryDto {
  /**
   * Identificador único.
   * @format uuid
   * @example "5680a75e-750e-4c31-a1a1-e61e0e4f5618"
   */
  id: string;
  /**
   * Data de criação.
   * @format iso8601
   * @example "2024-03-11T17:30:20.757Z"
   */
  created: string;
  /**
   * Data da última atualização.
   * @format iso8601
   * @example "2024-03-27T08:47:56.384Z"
   */
  updated: string;
  /**
   * Título da lista.
   * @format not empty
   * @maxLength 50
   * @example "Minha Lista de Empresas"
   */
  title: string;
  /**
   * Descrição da lista.
   * @format not empty
   * @maxLength 2000
   * @example "Fornecedores da unidade de Manaus."
   */
  description: string;
  /**
   * Quantidade de estabelecimentos.
   * @format integer
   * @example 9264
   */
  size: number;
  /**
   * Filtros de pesquisa utilizados para gerar a lista de estabelecimentos.
   * Os CNPJs serão obtidos na primeira exportação e armazenados de forma estática, não sendo atualizados em execuções posteriores.
   */
  query?: ListQueryDto;
  /**
   * Limite de estabelecimentos a serem obtidos ao gerar uma lista através de filtros.
   * @format integer
   * @min 1
   * @max 1000000
   * @example 10000
   */
  limit?: number;
}

/** ListPageDto */
export interface ListPageDto {
  /**
   * Token da próxima página.
   * @format not empty
   * @minLength 32
   * @maxLength 32
   * @example "8d47bdcbde4a7a2d4a98d5f555a19701"
   */
  next: string;
  /**
   * Quantidade de registros lidos.
   * @format integer
   * @min 1
   * @max 100
   * @example 100
   */
  limit: number;
  /**
   * Quantidade de registros disponíveis.
   * @format integer
   * @min 0
   * @example 345
   */
  count: number;
  /** Listas que obedecem aos critérios de pesquisa. */
  records: ListSummaryDto[];
}

/** ListUpdateDto */
export interface ListUpdateDto {
  /**
   * Título da lista.
   * @format not empty
   * @maxLength 50
   * @example "Minha Lista de Empresas"
   */
  title?: string;
  /**
   * Descrição da lista.
   * @format not empty
   * @maxLength 2000
   * @example "Fornecedores da unidade de Manaus."
   */
  description?: string;
  /**
   * Números dos CNPJs sem pontuação, mutualmente exclusivo com `query`.
   * @maxItems 1000000
   * @minItems 1
   */
  items?: string[];
}

/** ListJobOptionsDto */
export interface ListJobOptionsDto {
  /**
   * +**1 ₪** Adiciona as informações de opção pelo
   * Simples e enquadramento no MEI.
   * @default false
   */
  simples?: boolean;
  /**
   * +**1 ₪** Adiciona o histórico de períodos
   * anteriores do Simples e MEI.
   * @default false
   */
  simplesHistory?: boolean;
  /**
   * +**1 ₪** quando `registrationsSource` for `CCC`,
   * +**1 ₪** por UF quando `registrationsSource` for `SINTEGRA`.
   * Adiciona as Inscrições Estaduais para as selecionadas Unidades Federativas separadas por vírgula.
   * Aceita os termos especiais `ORIGIN` (mesma UF do endereço do estabelecimento) e `ALL` (todas).
   * @minItems 1
   * @example "PR,RS,SC"
   */
  registrations?: (
    | "ORIGIN"
    | "ALL"
    | "AC"
    | "AL"
    | "AM"
    | "AP"
    | "BA"
    | "CE"
    | "DF"
    | "ES"
    | "GO"
    | "MA"
    | "MG"
    | "MS"
    | "MT"
    | "PA"
    | "PB"
    | "PE"
    | "PI"
    | "PR"
    | "RJ"
    | "RN"
    | "RO"
    | "RR"
    | "RS"
    | "SC"
    | "SP"
    | "SE"
    | "TO"
  )[];
  /**
   * Fonte de dados para obtenção das Inscrições Estaduais:
   * - `AUTO`: Idem a utilizar `CCC`, sujeito a alterações no futuro caso credenciais sejam necessárias.
   * - `CCC`: Utiliza o Cadastro Centralizado de Contribuintes para leitura de todas as inscrições.
   * - `SINTEGRA`: Utiliza individualmente cada SINTEGRA estadual para leitura das inscrições.
   * @default "AUTO"
   */
  registrationsSource?: "AUTO" | "CCC" | "SINTEGRA";
  /**
   * +**1 ₪** Adiciona a inscrição na SUFRAMA.
   * @default false
   */
  suframa?: boolean;
  /**
   * +**1 ₪** Adiciona a latitude e longitude do endereço.
   * @default false
   */
  geocoding?: boolean;
  /**
   * Estratégia de cache utilizada na aquisição dos dados:
   * - `CACHE`: Entrega os dados do cache, evitando cobranças de créditos, se os dados não estiverem disponíveis resultará em um erro 404.
   * - `CACHE_IF_FRESH`: Retorna os dados do cache respeitando o limite em `maxAge`, se os dados estiverem desatualizados será consultado online.
   * - `CACHE_IF_ERROR`: Idem ao `CACHE_IF_FRESH`, mas se a consulta online falhar retorna os dados do cache respeitando o limite em `maxStale`.
   * - `ONLINE`: Consulta diretamente online, não recomendado pois ignora qualquer cache, sugerimos configurar `maxAge=1` como alternativa.
   * @default "CACHE_IF_ERROR"
   */
  strategy?: "ONLINE" | "CACHE_IF_FRESH" | "CACHE_IF_ERROR" | "CACHE";
  /**
   * Idade máxima, em dias, que um dado em cache é aceite, relevante para as estratégias `CACHE_IF_FRESH` e `CACHE_IF_ERROR`.
   * @format integer
   * @min 1
   * @max 3650
   * @default 45
   */
  maxAge?: number;
  /**
   * Idade máxima, em dias, que um dado em cache é aceite em caso de erro na busca online, relevante apenas para a estratégia `CACHE_IF_ERROR`.
   * @format integer
   * @min 1
   * @max 3650
   * @default 365
   */
  maxStale?: number;
}

/** ListExportCreateDto */
export interface ListExportCreateDto {
  /** Opções de consulta dos estabelecimentos. */
  options?: ListJobOptionsDto;
}

/** ListExportIdDto */
export interface ListExportIdDto {
  /**
   * Código da exportação.
   * @format uuid
   * @example "db344b70-3daf-43f3-b324-0f204ebfbd99"
   */
  id: string;
}

/** ListLinkDto */
export interface ListLinkDto {
  /**
   * Tipo de arquivo a qual o link se refere.
   * @example "EXCEL"
   */
  type: "EXCEL" | "JSON_ZIP";
  /**
   * URL pública de acesso ao arquivo.
   * @format not empty
   * @example "https://storage.googleapis.com/cnpja/list/.../lista.xlsx"
   */
  url: string;
}

/** ListExportDto */
export interface ListExportDto {
  /**
   * Date of last update
   * @format iso8601
   * @example "2024-03-11T17:30:20.757Z"
   */
  updated: string;
  /**
   * Date of creation
   * @format iso8601
   * @example "2024-03-11T17:30:20.757Z"
   */
  created: string;
  /**
   * Unique identifier
   * @format uuid
   * @example "5680a75e-750e-4c31-a1a1-e61e0e4f5618"
   */
  id: string;
  /**
   * Situação da exportação:
   * - `PENDING`: Exportação aguardando na fila, é permitido processar uma lista por vez.
   * - `PROCESSING`: Processamento dos dados empresariais em andamento.
   * - `PROCESSED`: Dados processados, aguardando exportação dos arquivos.
   * - `EXPORTING`: Exportação dos arquivos em andamento.
   * - `COMPLETED`: Exportação concluída com sucesso.
   * - `FAILED`: Exportação falhou, confira detalhes no campo `statusReason`.
   * @example "COMPLETED"
   */
  status: "PENDING" | "PROCESSING" | "PROCESSED" | "EXPORTING" | "COMPLETED" | "FAILED";
  /**
   * Motivo de falha da exportação.
   * @format not empty
   * @example "Saldo insuficiente"
   */
  statusReason: string;
  /**
   * Percentual de conclusão da exportação.
   * @format float
   * @example 0.5
   */
  progress: number;
  /** Opções de consulta dos estabelecimentos. */
  options: ListJobOptionsDto;
  /** Lista de links para arquivos. */
  links: ListLinkDto[];
}

/** ListExportPageDto */
export interface ListExportPageDto {
  /**
   * Token da próxima página.
   * @format not empty
   * @minLength 32
   * @maxLength 32
   * @example "8d47bdcbde4a7a2d4a98d5f555a19701"
   */
  next: string;
  /**
   * Quantidade de registros lidos.
   * @format integer
   * @min 1
   * @max 100
   * @example 100
   */
  limit: number;
  /**
   * Quantidade de registros disponíveis.
   * @format integer
   * @min 0
   * @example 345
   */
  count: number;
  /** Exportações pertencentes a lista. */
  records: ListExportDto[];
}

/** LegacyRegistrationDto */
export interface LegacyRegistrationDto {
  /**
   * Situação cadastral: `NULA`, `ATIVA`, `SUSPENSA`, `INAPTA` ou `BAIXADA`.
   * @example "ATIVA"
   */
  status: "NULA" | "ATIVA" | "SUSPENSA" | "INAPTA" | "BAIXADA";
  /**
   * Data da situação especial.
   * @format iso8601
   * @example "2022-01-01"
   */
  status_date: string;
  /**
   * Motivo da situação cadastral.
   * @format not empty
   * @example "Extinção Por Encerramento Liquidação Voluntária"
   */
  status_reason: string;
  /**
   * Descrição da situação especial.
   * @format not empty
   * @example "Início de Liquidação Judicial"
   */
  special_status: string;
  /**
   * Data da situação especial.
   * @format iso8601
   * @example "2022-01-01"
   */
  special_status_date: string;
}

/** LegacyAddressDto */
export interface LegacyAddressDto {
  /**
   * Logradouro.
   * @format not empty
   * @example "Avenida Brigadeiro Faria Lima"
   */
  street: string;
  /**
   * Número.
   * @format not empty
   * @example "2369"
   */
  number: string;
  /**
   * Complemento.
   * @format not empty
   * @example "Conj 1102"
   */
  details: string;
  /**
   * Bairro ou distrito.
   * @format not empty
   * @example "Jardim Paulistano"
   */
  neighborhood: string;
  /**
   * Município.
   * @format not empty
   * @example "São Paulo"
   */
  city: string;
  /**
   * @format numeric
   * @example "3550308"
   */
  city_ibge: string;
  /**
   * Sigla da Unidade Federativa.
   * @example "SP"
   */
  state:
    | "AC"
    | "AL"
    | "AM"
    | "AP"
    | "BA"
    | "CE"
    | "DF"
    | "ES"
    | "GO"
    | "MA"
    | "MG"
    | "MS"
    | "MT"
    | "PA"
    | "PB"
    | "PE"
    | "PI"
    | "PR"
    | "RJ"
    | "RN"
    | "RO"
    | "RR"
    | "RS"
    | "SC"
    | "SP"
    | "SE"
    | "TO";
  /**
   * Código da Unidade Federativa conforme IBGE.
   * @format numeric
   * @example "35"
   */
  state_ibge: string;
  /**
   * Código de Endereçamento Postal.
   * @format numeric
   * @minLength 8
   * @maxLength 8
   * @example "01452922"
   */
  zip: string;
}

/** LegacyLegalNatureDto */
export interface LegacyLegalNatureDto {
  /**
   * @format numeric
   * @example "2062"
   */
  code: string;
  /**
   * Descrição da natureza jurídica.
   * @format not empty
   * @example "Sociedade Empresária Limitada"
   */
  description: string;
}

/** LegacySimplesNacionalDto */
export interface LegacySimplesNacionalDto {
  /**
   * Data da última atualização do Simples Nacional.
   * @format iso8601
   * @example "2024-06-05T17:52:39.136Z"
   */
  last_update: string;
  /**
   * Indica se optante pelo Simples Nacional.
   * @example true
   */
  simples_optant: boolean;
  /**
   * Data de inclusão no período vigente.
   * @format iso8601
   * @example "2020-06-05"
   */
  simples_included: string;
  /**
   * [Removido] Data de encerramento do último período.
   * @format iso8601
   * @example "2021-06-05"
   */
  simples_excluded: string;
  /**
   * Indica se enquadrado no MEI.
   * @example true
   */
  simei_optant: boolean;
}

/** LegacySintegraRegistrationDto */
export interface LegacySintegraRegistrationDto {
  /**
   * Número da Inscrição Estadual.
   * @format numeric
   * @example "0962101427"
   */
  number: string;
  /**
   * Unidade Federativa de registro.
   * @example "RS"
   */
  state:
    | "AC"
    | "AL"
    | "AM"
    | "AP"
    | "BA"
    | "CE"
    | "DF"
    | "ES"
    | "GO"
    | "MA"
    | "MG"
    | "MS"
    | "MT"
    | "PA"
    | "PB"
    | "PE"
    | "PI"
    | "PR"
    | "RJ"
    | "RN"
    | "RO"
    | "RR"
    | "RS"
    | "SC"
    | "SP"
    | "SE"
    | "TO";
  /**
   * Indica se habilitada como contribuinte.
   * @example true
   */
  enabled: boolean;
}

/** LegacySintegraDto */
export interface LegacySintegraDto {
  /**
   * Data da última atualização do Cadastro de Contribuintes.
   * @format iso8601
   * @example "2024-06-05T17:52:39.136Z"
   */
  last_update: string;
  /**
   * Número da Inscrição Estadual no estado de origem.
   * @format numeric
   * @example "0962101427"
   */
  home_state_registration: string;
  /** Lista de Inscrições Estaduais. */
  registrations: LegacySintegraRegistrationDto[];
}

/** LegacyActivityDto */
export interface LegacyActivityDto {
  /**
   * @format numeric
   * @example "6311900"
   */
  code: string;
  /**
   * Descrição da atividade econômica.
   * @format not empty
   * @example "Tratamento de dados, provedores de serviços de aplicação e serviços de hospedagem na internet"
   */
  description: string;
}

/** LegacyRoleDto */
export interface LegacyRoleDto {
  /**
   * @format numeric
   * @example "49"
   */
  code: string;
  /**
   * Descrição da qualificação.
   * @format not empty
   * @example "Sócio-Administrador"
   */
  description: string;
}

/** LegacyMemberAgentDto */
export interface LegacyMemberAgentDto {
  /**
   * Nome ou razão social.
   * @format not empty
   * @example "João Silva"
   */
  name: string;
  /**
   * CPF ou CNPJ.
   * @format not empty
   * @example "***123456**"
   */
  tax_id: string;
  /**
   * Nome do país de origem.
   * @format not empty
   * @example "BRASIL"
   */
  home_country: string;
  /** Informações da qualificação. */
  role: LegacyRoleDto;
}

/** LegacyMemberDto */
export interface LegacyMemberDto {
  /**
   * Nome ou razão social.
   * @format not empty
   * @example "João Silva"
   */
  name: string;
  /**
   * CPF ou CNPJ.
   * @format not empty
   * @example "***123456**"
   */
  tax_id: string;
  /**
   * Nome do país de origem.
   * @format not empty
   * @example "BRASIL"
   */
  home_country: string;
  /** Informações da qualificação. */
  role: LegacyRoleDto;
  /**
   * Presente quando aplicável na qualificação
   * Informações do representante legal.
   */
  legal_rep: LegacyMemberAgentDto;
}

/** LegacyFilesDto */
export interface LegacyFilesDto {
  /**
   * Comprovante de inscrição em PDF.
   * @format url
   * @example "https://api.cnpja.com/[...]"
   */
  registration: string;
  /**
   * Quadro de sócios e administradores em PDF.
   * @format url
   * @example "https://api.cnpja.com/[...]"
   */
  membership: string;
}

/** LegacyMapsDto */
export interface LegacyMapsDto {
  /**
   * Mapa aéreo de vias.
   * @format url
   * @example "https://api.cnpja.com/[...]"
   */
  roads: string;
  /**
   * Mapa aéreo de satélite.
   * @format url
   * @example "https://api.cnpja.com/[...]"
   */
  satellite: string;
  /**
   * Visão da rua.
   * @format url
   * @example "https://api.cnpja.com/[...]"
   */
  street: string;
}

/** LegacyCompanyDto */
export interface LegacyCompanyDto {
  /**
   * Data da última atualização.
   * @format iso8601
   * @example "2024-06-05T17:52:39.136Z"
   */
  last_update: string;
  /**
   * Razão social.
   * @format not empty
   * @example "CNPJA TECNOLOGIA LTDA"
   */
  name: string;
  /**
   * Nome fantasia.
   * @format not empty
   * @example "CNPJA"
   */
  alias: string;
  /**
   * Número do CNPJ.
   * @format cnpj
   * @example "37335118000180"
   */
  tax_id: string;
  /**
   * Tipo do estabelecimento: `MATRIZ` ou `FILIAL`.
   * @example "MATRIZ"
   */
  type: "MATRIZ" | "FILIAL";
  /**
   * Data de abertura.
   * @format iso8601
   * @example "2020-06-05"
   */
  founded: string;
  /**
   * Porte da empresa: `ME`, `EPP` ou `DEMAIS`.
   * @example "ME"
   */
  size: "ME" | "EPP" | "DEMAIS";
  /**
   * Capital social.
   * @format float
   * @example 1000
   */
  capital: number;
  /**
   * Endereço de e-mail.
   * @format e-mail
   * @example "contato@cnpja.com"
   */
  email: string;
  /**
   * Número do telefone.
   * @format numeric
   * @example "11971564144"
   */
  phone: string;
  /**
   * Número do telefone alternativo.
   * @format numeric
   * @example "11971564144"
   */
  phone_alt: string;
  /**
   * Ente federativo responsável.
   * @format not empty
   * @example "Uniao"
   */
  federal_entity: string;
  /** Informações da situação cadastral. */
  registration: LegacyRegistrationDto;
  /** Informações da situação cadastral. */
  address: LegacyAddressDto;
  /** Informações da natureza jurídica. */
  legal_nature: LegacyLegalNatureDto;
  /** Informações do Simples Nacional. */
  simples_nacional: LegacySimplesNacionalDto;
  /** Informações do Cadastro de Contribuintes. */
  sintegra: LegacySintegraDto;
  /** Informações da atividade econômica principal. */
  primary_activity: LegacyActivityDto;
  /** Lista de atividades econômicas secundárias. */
  secondary_activities: LegacyActivityDto[];
  /** Quadro de sócios e administradores. */
  membership: LegacyMemberDto[];
  partnership: object;
  /** Links para download de arquivos. */
  files: LegacyFilesDto;
  /** Links para download de mapas. */
  maps: LegacyMapsDto;
}

/** CreditoDto */
export interface CreditoDto {
  /**
   * Créditos acumulados de meses anteriores.
   * @format integer
   * @example 2000
   */
  perpetual: number;
  /**
   * Créditos do mês atual.
   * @format integer
   * @example 10000
   */
  transient: number;
}

/** CompanyOfficeDto */
export interface CompanyOfficeDto {
  /**
   * Número do CNPJ sem pontuação.
   * @format cnpj
   * @example "37335118000180"
   */
  taxId: string;
  /**
   * Nome fantasia.
   * @format not empty
   * @example "CNPJA"
   */
  alias: string;
  /**
   * Data de abertura.
   * @format iso8601
   * @example "2020-06-05"
   */
  founded: string;
  /**
   * Indica se o estabelecimento é a Matriz.
   * @example true
   */
  head: boolean;
  /**
   * Data da situação cadastral.
   * @format iso8601
   * @example "2020-06-05"
   */
  statusDate: string;
  /** Informações da situação cadastral. */
  status: OfficeStatusDto;
  /** Informações do motivo da situação cadastral, presente quando `status.id != 2`. */
  reason?: OfficeReasonDto;
  /**
   * Data da situação especial.
   * @format iso8601
   * @example "2022-01-01"
   */
  specialDate?: string;
  /** Informações da situação especial, presente quando `specialDate != undefined`. */
  special?: OfficeSpecialDto;
  /** Informações da atividade econômica principal. */
  mainActivity: ActivityDto;
}

/** CompanyDto */
export interface CompanyDto {
  /**
   * Código da empresa, idem aos oito primeiros caracteres do CNPJ.
   * @format integer
   * @example 37335118
   */
  id: number;
  /**
   * Razão social.
   * @format not empty
   * @example "CNPJA TECNOLOGIA LTDA"
   */
  name: string;
  /**
   * Ente federativo responsável, presente quando `nature.id < 2000`.
   * @format not empty
   * @example "Uniao"
   */
  jurisdiction?: string;
  /**
   * Capital social
   * @format float
   * @example 1000
   */
  equity: number;
  /** Informações da natureza jurídica. */
  nature: NatureDto;
  /** Informações do porte. */
  size: CompanySizeDto;
  /** Informações da opção pelo Simples Nacional. */
  simples?: SimplesSimeiDto;
  /** Informações do enquadramento no MEI. */
  simei?: SimplesSimeiDto;
  /** Quadro de sócios e administradores. */
  members: MemberDto[];
  /** Lista de estabelecimentos. */
  offices: CompanyOfficeDto[];
}

/** CccDto */
export interface CccDto {
  /**
   * Número do CNPJ ou CPF sem pontuação.
   * @format cnpj|cpf
   * @example "37335118000180"
   */
  taxId: string;
  /**
   * Data da última atualização.
   * @format iso8601
   * @example "2024-06-05T17:52:39.136Z"
   */
  updated: string;
  /**
   * Razão social ou nome do produtor rural.
   * @format not empty
   * @example "CNPJA TECNOLOGIA LTDA"
   */
  name: string;
  /**
   * Unidade Federativa de origem.
   * @example "PR"
   */
  originState:
    | "AC"
    | "AL"
    | "AM"
    | "AP"
    | "BA"
    | "CE"
    | "DF"
    | "ES"
    | "GO"
    | "MA"
    | "MG"
    | "MS"
    | "MT"
    | "PA"
    | "PB"
    | "PE"
    | "PI"
    | "PR"
    | "RJ"
    | "RN"
    | "RO"
    | "RR"
    | "RS"
    | "SC"
    | "SP"
    | "SE"
    | "TO";
  /** Inscrições Estaduais. */
  registrations: RegistrationDto[];
}

export interface SuframaReadDto {
  /**
   * Número do CNPJ ou CPF sem pontuação.
   * @format cnpj|cpf
   * @example "37335118000180"
   */
  taxId: string;
  /**
   * Estratégia de cache utilizada na aquisição dos dados:
   * - `CACHE`: Entrega os dados do cache, evitando cobranças de créditos, se os dados não estiverem disponíveis resultará em um erro 404.
   * - `CACHE_IF_FRESH`: Retorna os dados do cache respeitando o limite em `maxAge`, se os dados estiverem desatualizados será consultado online.
   * - `CACHE_IF_ERROR`: Idem ao `CACHE_IF_FRESH`, mas se a consulta online falhar retorna os dados do cache respeitando o limite em `maxStale`.
   * - `ONLINE`: Consulta diretamente online, não recomendado pois ignora qualquer cache, sugerimos configurar `maxAge=1` como alternativa.
   * @default "CACHE_IF_ERROR"
   */
  strategy?: "ONLINE" | "CACHE_IF_FRESH" | "CACHE_IF_ERROR" | "CACHE";
  /**
   * Idade máxima, em dias, que um dado em cache é aceite, relevante para as estratégias `CACHE_IF_FRESH` e `CACHE_IF_ERROR`.
   * @format integer
   * @min 1
   * @max 3650
   * @default 45
   */
  maxAge?: number;
  /**
   * Idade máxima, em dias, que um dado em cache é aceite em caso de erro na busca online, relevante apenas para a estratégia `CACHE_IF_ERROR`.
   * @format integer
   * @min 1
   * @max 3650
   * @default 365
   */
  maxStale?: number;
  /** Aguarda a compensação dos créditos de forma síncrona, retornando o cabeçalho `cnpja-request-cost`. */
  sync?: boolean;
}

export interface SuframaCertificateDto {
  /**
   * Número do CNPJ ou CPF sem pontuação.
   * @format cnpj|cpf
   * @example "37335118000180"
   */
  taxId: string;
}

export interface SimplesReadDto {
  /**
   * Número do CNPJ sem pontuação.
   * @format cnpj
   * @example "37335118000180"
   */
  taxId: string;
  /**
   * +**1 ₪** Adiciona o histórico de períodos
   * anteriores do Simples e MEI.
   * @default false
   */
  history?: boolean;
  /**
   * Estratégia de cache utilizada na aquisição dos dados:
   * - `CACHE`: Entrega os dados do cache, evitando cobranças de créditos, se os dados não estiverem disponíveis resultará em um erro 404.
   * - `CACHE_IF_FRESH`: Retorna os dados do cache respeitando o limite em `maxAge`, se os dados estiverem desatualizados será consultado online.
   * - `CACHE_IF_ERROR`: Idem ao `CACHE_IF_FRESH`, mas se a consulta online falhar retorna os dados do cache respeitando o limite em `maxStale`.
   * - `ONLINE`: Consulta diretamente online, não recomendado pois ignora qualquer cache, sugerimos configurar `maxAge=1` como alternativa.
   * @default "CACHE_IF_ERROR"
   */
  strategy?: "ONLINE" | "CACHE_IF_FRESH" | "CACHE_IF_ERROR" | "CACHE";
  /**
   * Idade máxima, em dias, que um dado em cache é aceite, relevante para as estratégias `CACHE_IF_FRESH` e `CACHE_IF_ERROR`.
   * @format integer
   * @min 1
   * @max 3650
   * @default 45
   */
  maxAge?: number;
  /**
   * Idade máxima, em dias, que um dado em cache é aceite em caso de erro na busca online, relevante apenas para a estratégia `CACHE_IF_ERROR`.
   * @format integer
   * @min 1
   * @max 3650
   * @default 365
   */
  maxStale?: number;
  /** Aguarda a compensação dos créditos de forma síncrona, retornando o cabeçalho `cnpja-request-cost`. */
  sync?: boolean;
}

export interface SimplesCertificateDto {
  /**
   * Número do CNPJ sem pontuação.
   * @format cnpj
   * @example "37335118000180"
   */
  taxId: string;
}

export interface RfbReadDto {
  /**
   * Número do CNPJ sem pontuação.
   * @format cnpj
   * @example "37335118000180"
   */
  taxId: string;
  /**
   * Estratégia de cache utilizada na aquisição dos dados:
   * - `CACHE`: Entrega os dados do cache, evitando cobranças de créditos, se os dados não estiverem disponíveis resultará em um erro 404.
   * - `CACHE_IF_FRESH`: Retorna os dados do cache respeitando o limite em `maxAge`, se os dados estiverem desatualizados será consultado online.
   * - `CACHE_IF_ERROR`: Idem ao `CACHE_IF_FRESH`, mas se a consulta online falhar retorna os dados do cache respeitando o limite em `maxStale`.
   * - `ONLINE`: Consulta diretamente online, não recomendado pois ignora qualquer cache, sugerimos configurar `maxAge=1` como alternativa.
   * @default "CACHE_IF_ERROR"
   */
  strategy?: "ONLINE" | "CACHE_IF_FRESH" | "CACHE_IF_ERROR" | "CACHE";
  /**
   * Idade máxima, em dias, que um dado em cache é aceite, relevante para as estratégias `CACHE_IF_FRESH` e `CACHE_IF_ERROR`.
   * @format integer
   * @min 1
   * @max 3650
   * @default 45
   */
  maxAge?: number;
  /**
   * Idade máxima, em dias, que um dado em cache é aceite em caso de erro na busca online, relevante apenas para a estratégia `CACHE_IF_ERROR`.
   * @format integer
   * @min 1
   * @max 3650
   * @default 365
   */
  maxStale?: number;
  /** Aguarda a compensação dos créditos de forma síncrona, retornando o cabeçalho `cnpja-request-cost`. */
  sync?: boolean;
}

export interface RfbCertificateDto {
  /**
   * Número do CNPJ sem pontuação.
   * @format cnpj
   * @example "37335118000180"
   */
  taxId: string;
  /**
   * Páginas a incluir no comprovante separadas por vírgula.
   * @default "REGISTRATION,MEMBERS"
   */
  pages?: ("REGISTRATION" | "MEMBERS")[];
}

export interface PersonSearchDto {
  /**
   * Token de paginação, mutualmente exclusivo com as demais propriedades.
   * @format not empty
   * @minLength 32
   * @maxLength 32
   * @example "8d47bdcbde4a7a2d4a98d5f555a19701"
   */
  token?: string;
  /**
   * Quantidade de registros a serem lidos por página.
   * @format integer
   * @min 1
   * @max 1000
   * @default 10
   */
  limit?: number;
  /**
   * Tipos das pessoas serem incluídos, separados por vírgula:
   * - `NATURAL`: Pessoa física.
   * - `LEGAL`: Pessoa jurídica.
   * - `FOREIGN`: Pessoa residente no exterior.
   * - `UNKNOWN`: Pessoa desconhecida.
   * @example "NATURAL,LEGAL"
   */
  "type.in"?: ("LEGAL" | "NATURAL" | "FOREIGN" | "UNKNOWN")[];
  /**
   * Nomes a serem incluídos, separados por espaço para correspondência na mesma pessoa,
   * ou separados por vírgula para correspondência em diferentes.
   * @example "Maria Oliveira,Ana Martins,João"
   */
  "name.in"?: string[];
  /**
   * Nomes a serem excluídos, separados por espaço para correspondência na mesma pessoa,
   * ou separados por vírgula para correspondência em diferentes.
   * @example "Maria Oliveira,Ana Martins,João"
   */
  "name.nin"?: string[];
  /**
   * CPFs ou CNPJs a serem incluídos, separados por vírgula. A correspondência por CPF será feita pelos
   * dígitos entre o quarto e nono, uma vez que não armazenamos CPFs completos em nossa plataforma.
   * @example "78326957062,92854908082,07526557000100"
   */
  "taxId.in"?: string[];
  /**
   * Faixas etárias a serem incluídas, separadas por vírgula.
   * @example "21-30,31-40"
   */
  "age.in"?: ("0-12" | "13-20" | "21-30" | "31-40" | "41-50" | "51-60" | "61-70" | "71-80" | "81+")[];
  /**
   * Códigos dos países a serem incluídos, separados por vírgula, conforme
   * [M49 🡭](https://unstats.un.org/unsd/methodology/m49/).
   * @example "32,152,600"
   */
  "country.id.in"?: number[];
  /**
   * Códigos dos países a serem excluídos, separados por vírgula, conforme
   * [M49 🡭](https://unstats.un.org/unsd/methodology/m49/).
   * @example "32,152,600"
   */
  "country.id.nin"?: number[];
}

export interface OfficeReadDto {
  /**
   * +**1 ₪** Adiciona as informações de opção pelo
   * Simples e enquadramento no MEI.
   * @default false
   */
  simples?: boolean;
  /**
   * +**1 ₪** Adiciona o histórico de períodos
   * anteriores do Simples e MEI.
   * @default false
   */
  simplesHistory?: boolean;
  /**
   * +**1 ₪** quando `registrationsSource` for `CCC`,
   * +**1 ₪** por UF quando `registrationsSource` for `SINTEGRA`.
   * Adiciona as Inscrições Estaduais para as selecionadas Unidades Federativas separadas por vírgula.
   * Aceita os termos especiais `ORIGIN` (mesma UF do endereço do estabelecimento) e `ALL` (todas).
   * @minItems 1
   * @example "PR,RS,SC"
   */
  registrations?: (
    | "ORIGIN"
    | "ALL"
    | "AC"
    | "AL"
    | "AM"
    | "AP"
    | "BA"
    | "CE"
    | "DF"
    | "ES"
    | "GO"
    | "MA"
    | "MG"
    | "MS"
    | "MT"
    | "PA"
    | "PB"
    | "PE"
    | "PI"
    | "PR"
    | "RJ"
    | "RN"
    | "RO"
    | "RR"
    | "RS"
    | "SC"
    | "SP"
    | "SE"
    | "TO"
  )[];
  /**
   * Fonte de dados para obtenção das Inscrições Estaduais:
   * - `AUTO`: Idem a utilizar `CCC`, sujeito a alterações no futuro caso credenciais sejam necessárias.
   * - `CCC`: Utiliza o Cadastro Centralizado de Contribuintes para leitura de todas as inscrições.
   * - `SINTEGRA`: Utiliza individualmente cada SINTEGRA estadual para leitura das inscrições.
   * @default "AUTO"
   */
  registrationsSource?: "AUTO" | "CCC" | "SINTEGRA";
  /**
   * +**1 ₪** Adiciona a inscrição na SUFRAMA.
   * @default false
   */
  suframa?: boolean;
  /**
   * +**1 ₪** Adiciona a latitude e longitude do endereço.
   * @default false
   */
  geocoding?: boolean;
  /**
   * Adiciona links públicos para visualização dos arquivos selecionados separados por vírgula.
   * @example "RFB_CERTIFICATE,SIMPLES_CERTIFICATE"
   */
  links?: (
    | "RFB_CERTIFICATE"
    | "SIMPLES_CERTIFICATE"
    | "CCC_CERTIFICATE"
    | "SUFRAMA_CERTIFICATE"
    | "OFFICE_MAP"
    | "OFFICE_STREET"
  )[];
  /**
   * Estratégia de cache utilizada na aquisição dos dados:
   * - `CACHE`: Entrega os dados do cache, evitando cobranças de créditos, se os dados não estiverem disponíveis resultará em um erro 404.
   * - `CACHE_IF_FRESH`: Retorna os dados do cache respeitando o limite em `maxAge`, se os dados estiverem desatualizados será consultado online.
   * - `CACHE_IF_ERROR`: Idem ao `CACHE_IF_FRESH`, mas se a consulta online falhar retorna os dados do cache respeitando o limite em `maxStale`.
   * - `ONLINE`: Consulta diretamente online, não recomendado pois ignora qualquer cache, sugerimos configurar `maxAge=1` como alternativa.
   * @default "CACHE_IF_ERROR"
   */
  strategy?: "ONLINE" | "CACHE_IF_FRESH" | "CACHE_IF_ERROR" | "CACHE";
  /**
   * Idade máxima, em dias, que um dado em cache é aceite, relevante para as estratégias `CACHE_IF_FRESH` e `CACHE_IF_ERROR`.
   * @format integer
   * @min 1
   * @max 3650
   * @default 45
   */
  maxAge?: number;
  /**
   * Idade máxima, em dias, que um dado em cache é aceite em caso de erro na busca online, relevante apenas para a estratégia `CACHE_IF_ERROR`.
   * @format integer
   * @min 1
   * @max 3650
   * @default 365
   */
  maxStale?: number;
  /** Aguarda a compensação dos créditos de forma síncrona, retornando o cabeçalho `cnpja-request-cost`. */
  sync?: boolean;
  /**
   * Número do CNPJ sem pontuação.
   * @format cnpj
   * @example "37335118000180"
   */
  taxId: string;
}

export interface OfficeSearchDto {
  /**
   * Token de paginação, mutualmente exclusivo com as demais propriedades.
   * @format not empty
   * @minLength 32
   * @maxLength 32
   * @example "8d47bdcbde4a7a2d4a98d5f555a19701"
   */
  token?: string;
  /**
   * Quantidade de registros a serem lidos por página.
   * @format integer
   * @min 1
   * @max 1000
   * @default 10
   */
  limit?: number;
  /**
   * Termos a serem incluídos na razão social ou nome fantasia, separados por espaço para correspondência
   * no mesmo estabelecimento, ou separados por vírgula para correspondência em diferentes.
   * @example "CNPJá,Banco do Brasil,AMBEV S/A"
   */
  "names.in"?: string[];
  /**
   * Termos a serem excluídos na razão social ou nome fantasia, separados por espaço para correspondência
   * no mesmo estabelecimento, ou separados por vírgula para correspondência em diferentes.
   * @example "EI,Eireli,LTDA"
   */
  "names.nin"?: string[];
  /**
   * Termos a serem incluídos na razão social, separados por espaço para correspondência na mesma empresa,
   * ou separados por vírgula para correspondência em diferentes.
   * @example "CNPJá,Banco do Brasil,AMBEV S/A"
   */
  "company.name.in"?: string[];
  /**
   * Termos a serem excluídos na razão social, separados por espaço para correspondência na mesma empresa,
   * ou separados por vírgula para correspondência em diferentes.
   * @example "EI,Eireli,LTDA"
   */
  "company.name.nin"?: string[];
  /**
   * Capital social maior ou igual ao valor especificado.
   * @format float
   * @min 0
   * @example 12345.67
   */
  "company.equity.gte"?: number;
  /**
   * Capital social menor ou igual ao valor especificado.
   * @format float
   * @min 0
   * @example 98765.43
   */
  "company.equity.lte"?: number;
  /**
   * Códigos das naturezas jurídicas a serem incluídos, separados por vírgula, conforme
   * [IBGE 🡭](https://concla.ibge.gov.br/estrutura/natjur-estrutura/natureza-juridica-2021).
   * @example "1015,2011,3034"
   */
  "company.nature.id.in"?: number[];
  /**
   * Códigos das naturezas jurídicas a serem excluídos, separados por vírgula, conforme
   * [IBGE 🡭](https://concla.ibge.gov.br/estrutura/natjur-estrutura/natureza-juridica-2021).
   * @example "1015,2011,3034"
   */
  "company.nature.id.nin"?: number[];
  /**
   * Códigos dos portes a serem incluídos, separados por vírgula:
   * - `1`: Microempresa (ME).
   * - `3`: Empresa de Pequeno Porte (EPP).
   * - `5`: Demais.
   * @example "1,3"
   */
  "company.size.id.in"?: number[];
  /**
   * Indicador de opção pelo Simples Nacional:
   * - `true`: Apenas empresas optantes.
   * - `false`: Apenas empresas não optantes.
   * @example true
   */
  "company.simples.optant.eq"?: boolean;
  /**
   * Data de opção pelo Simples Nacional maior ou igual a especificada.
   * @format iso8601
   * @example "2018-01-01"
   */
  "company.simples.since.gte"?: string;
  /**
   * Data de opção pelo Simples Nacional menor ou igual a especificada.
   * @format iso8601
   * @example "2020-12-31"
   */
  "company.simples.since.lte"?: string;
  /**
   * Indicador de enquadramento no MEI:
   * - `true`: Apenas empresas enquadradas.
   * - `false`: Apenas empresas não enquadradas.
   * @example true
   */
  "company.simei.optant.eq"?: boolean;
  /**
   * Data de enquadramento no MEI maior ou igual a especificada.
   * @format iso8601
   * @example "2018-01-01"
   */
  "company.simei.since.gte"?: string;
  /**
   * Data de enquadramento no MEI menor ou igual a especificada.
   * @format iso8601
   * @example "2020-12-31"
   */
  "company.simei.since.lte"?: string;
  /**
   * Identificadores de listas de CNPJs a serem excluídos, separados por vírgula.
   * @example "37505509-b2a5-42c2-94f4-aa99d2033bf5"
   */
  "taxId.nin"?: string[];
  /**
   * Termos a serem incluídos no nome fantasia, separados por espaço para correspondência no mesmo
   * estabelecimento, ou separados por vírgula para correspondência em diferentes.
   * @example "CNPJá,Banco do Brasil,AMBEV S/A"
   */
  "alias.in"?: string[];
  /**
   * Termos a serem excluídos no nome fantasia, separados por espaço para correspondência no mesmo
   * estabelecimento, ou separados por vírgula para correspondência em diferentes.
   * @example "Eireli,LTDA"
   */
  "alias.nin"?: string[];
  /**
   * Data de abertura maior ou igual a especificada.
   * @format iso8601
   * @example "2018-01-01"
   */
  "founded.gte"?: string;
  /**
   * Data de abertura menor ou igual a especificada.
   * @format iso8601
   * @example "2020-12-31"
   */
  "founded.lte"?: string;
  /**
   * Indicador de estabelecimento matriz:
   * - `true`: Apenas matrizes.
   * - `false`: Apenas filiais.
   * @example true
   */
  "head.eq"?: boolean;
  /**
   * Data da situação cadastral maior ou igual a especificada.
   * @format iso8601
   * @example "2018-01-01"
   */
  "statusDate.gte"?: string;
  /**
   * Data da situação cadastral menor ou igual a especificada.
   * @format iso8601
   * @example "2020-12-31"
   */
  "statusDate.lte"?: string;
  /**
   * Códigos das situações cadastrais a serem incluídos, separados por vírgula:
   * - `1`: Nula.
   * - `2`: Ativa.
   * - `3`: Suspensa.
   * - `4`: Inapta.
   * - `8`: Baixada.
   * @example "3,4,8"
   */
  "status.id.in"?: number[];
  /**
   * Códigos dos motivos das situações cadastrais a serem incluídos, separados por vírgula, conforme
   * [Receita Federal 🡭](http://www.consultas.cge.rj.gov.br/scadastral.pdf).
   * @example "1,3,5"
   */
  "reason.id.in"?: number[];
  /**
   * Data da situação especial maior ou igual a especificada.
   * @format iso8601
   * @example "2018-01-01"
   */
  "specialDate.gte"?: string;
  /**
   * Data da situação especial menor ou igual a especificada.
   * @format iso8601
   * @example "2020-12-31"
   */
  "specialDate.lte"?: string;
  /**
   * Códigos das situações especiais a serem incluídos, separados por vírgula, conforme
   * [Receita Federal 🡭](http://www38.receita.fazenda.gov.br/cadsincnac/jsp/coleta/ajuda/topicos/Eventos_de_Alteracao.htm).
   * @example "405,410,417"
   */
  "special.id.in"?: number[];
  /**
   * Códigos dos municípios a serem incluídos, separados por vírgula, conforme
   * [IBGE 🡭](https://www.ibge.gov.br/explica/codigos-dos-municipios.php).
   * @example "4106902,4205407,4314902"
   */
  "address.municipality.in"?: number[];
  /**
   * Códigos dos municípios a serem excluídos, separados por vírgula, conforme
   * [IBGE 🡭](https://www.ibge.gov.br/explica/codigos-dos-municipios.php).
   * @example "4106902,4205407,4314902"
   */
  "address.municipality.nin"?: number[];
  /**
   * Termos a serem incluídos no logradouro, separados por espaço para correspondência no mesmo
   * estabelecimento, ou separados por vírgula para correspondência em diferentes.
   * @example "Avenida Copacabana,Rua das Pedras,Rua Oscar Freire"
   */
  "address.street.in"?: string[];
  /**
   * Termos a serem excluídos no logradouro, separados por espaço para correspondência no mesmo
   * estabelecimento, ou separados por vírgula para correspondência em diferentes.
   * @example "Avenida Copacabana,Rua das Pedras,Rua Oscar Freire"
   */
  "address.street.nin"?: string[];
  /**
   * Números do logradouro a serem incluídos, separados por vírgula.
   * @example "10,435,10387"
   */
  "address.number.in"?: string[];
  /**
   * Números do logradouro a serem excluídos, separados por vírgula.
   * @example "10,435,10387"
   */
  "address.number.nin"?: string[];
  /**
   * Termos a serem incluídos no complemento, separados por espaço para correspondência no mesmo
   * estabelecimento, ou separados por vírgula para correspondência em diferentes.
   * @example "Cj 1403,Andar 4,Bloco C"
   */
  "address.details.in"?: string[];
  /**
   * Termos a serem excluídos no complemento, separados por espaço para correspondência no mesmo
   * estabelecimento, ou separados por vírgula para correspondência em diferentes.
   * @example "Cj 1403,Andar 4,Bloco C"
   */
  "address.details.nin"?: string[];
  /**
   * Termos a serem incluídos no bairro, separados por espaço para correspondência no mesmo
   * estabelecimento, ou separados por vírgula para correspondência em diferentes.
   * @example "Leblon,Vila Olímpia,Belvedere"
   */
  "address.district.in"?: string[];
  /**
   * Termos a serem excluídos no bairro, separados por espaço para correspondência no mesmo
   * estabelecimento, ou separados por vírgula para correspondência em diferentes.
   * @example "Leblon,Vila Olímpia,Belvedere"
   */
  "address.district.nin"?: string[];
  /**
   * Unidades federativas a serem incluídas, separadas por vírgula.
   * @example "ES,RJ,SP"
   */
  "address.state.in"?: (
    | "AC"
    | "AL"
    | "AM"
    | "AP"
    | "BA"
    | "CE"
    | "DF"
    | "ES"
    | "GO"
    | "MA"
    | "MG"
    | "MS"
    | "MT"
    | "PA"
    | "PB"
    | "PE"
    | "PI"
    | "PR"
    | "RJ"
    | "RN"
    | "RO"
    | "RR"
    | "RS"
    | "SC"
    | "SP"
    | "SE"
    | "TO"
  )[];
  /**
   * Códigos de endereçamento postal a serem incluídos, separados por vírgula.
   * @minLength 8
   * @maxLength 8
   * @example "01430000,01452922,01310100"
   */
  "address.zip.in"?: string[];
  /**
   * Código de endereçamento postal maior ou igual ao especificado.
   * @format numeric
   * @minLength 8
   * @maxLength 8
   * @example "01452922"
   */
  "address.zip.gte"?: string;
  /**
   * Código de endereçamento postal menor ou igual ao especificado.
   * @format numeric
   * @minLength 8
   * @maxLength 8
   * @example "01452922"
   */
  "address.zip.lte"?: string;
  /**
   * Códigos dos países a serem incluídos, separados por vírgula, conforme
   * [M49 🡭](https://unstats.un.org/unsd/methodology/m49/).
   * @example "32,152,600"
   */
  "address.country.id.in"?: number[];
  /**
   * Códigos dos países a serem excluídos, separados por vírgula, conforme
   * [M49 🡭](https://unstats.un.org/unsd/methodology/m49/).
   * @example "32,152,600"
   */
  "address.country.id.nin"?: number[];
  /**
   * Indicador de existência de telefone:
   * - `true`: Apenas estabelecimentos com telefone.
   * - `false`: Apenas estabelecimentos sem telefone.
   * @example true
   */
  "phones.ex"?: boolean;
  /**
   * Tipos de telefone a serem incluídos, separados por vírgula.
   * @example "LANDLINE,MOBILE"
   */
  "phones.type.in"?: ("LANDLINE" | "MOBILE")[];
  /**
   * Códigos de DDD a serem incluídos, separados por vírgula.
   * @minLength 2
   * @maxLength 2
   * @example "11,13,15"
   */
  "phones.area.in"?: string[];
  /**
   * Códigos de DDD maior ou igual ao especificado.
   * @format numeric
   * @minLength 2
   * @maxLength 2
   * @example "11"
   */
  "phones.area.gte"?: string;
  /**
   * Códigos de DDD menor ou igual ao especificado.
   * @format numeric
   * @minLength 2
   * @maxLength 2
   * @example "11"
   */
  "phones.area.lte"?: string;
  /**
   * Números de telefone a serem incluídos, separados por vírgula.
   * @minLength 8
   * @maxLength 8
   * @example "92635835,44594576,36285962"
   */
  "phones.number.in"?: string[];
  /**
   * Números de telefone a serem excluídos, separados por vírgula.
   * @minLength 8
   * @maxLength 8
   * @example "92635835,44594576,36285962"
   */
  "phones.number.nin"?: string[];
  /**
   * Indicador de existência de e-mail:
   * - `true`: Apenas estabelecimentos com e-mail.
   * - `false`: Apenas estabelecimentos sem e-mail.
   * @example true
   */
  "emails.ex"?: boolean;
  /**
   * Tipos de propriedade de e-mail a serem incluídos, separados por vírgula.
   * @example "CORPORATE,ACCOUNTING"
   */
  "emails.ownership.in"?: ("ACCOUNTING" | "CORPORATE" | "PERSONAL")[];
  /**
   * Endereços de e-mail a serem incluídos, separados por vírgula.
   * @example "alex.costa@company.com,jane.doe@gmail.com,support@domain.com"
   */
  "emails.address.in"?: string[];
  /**
   * Endereços de e-mail a serem excluídos, separados por vírgula.
   * @example "alex.costa@company.com,jane.doe@gmail.com,support@domain.com"
   */
  "emails.address.nin"?: string[];
  /**
   * Domínios de e-mail a serem incluídos, separados por vírgula.
   * @example "cnpja.com,bb.com.br,ambev.com.br"
   */
  "emails.domain.in"?: string[];
  /**
   * Domínios de e-mail a serem excluídos, separados por vírgula.
   * @example "gmail.com,hotmail.com,yahoo.com"
   */
  "emails.domain.nin"?: string[];
  /**
   * Códigos das atividades econômicas principais ou secundárias a serem incluídos, separados por vírgula,
   * conforme [IBGE 🡭](https://concla.ibge.gov.br/busca-online-cnae.html?view=estrutura).
   * @example "0111301,1011201,3511501"
   */
  "activities.id.in"?: number[];
  /**
   * Códigos das atividades econômicas principais ou secundárias a serem excluídos, separados por vírgula,
   * conforme [IBGE 🡭](https://concla.ibge.gov.br/busca-online-cnae.html?view=estrutura).
   * @example "0111301,1011201,3511501"
   */
  "activities.id.nin"?: number[];
  /**
   * Códigos das atividades econômicas principais a serem incluídos, separados por vírgula, conforme
   * [IBGE 🡭](https://concla.ibge.gov.br/busca-online-cnae.html?view=estrutura).
   * @example "0111301,1011201,3511501"
   */
  "mainActivity.id.in"?: number[];
  /**
   * Códigos das atividades econômicas principais a serem excluídos, separados por vírgula, conforme
   * [IBGE 🡭](https://concla.ibge.gov.br/busca-online-cnae.html?view=estrutura).
   * @example "0111301,1011201,3511501"
   */
  "mainActivity.id.nin"?: number[];
  /**
   * Códigos das atividades econômicas secundárias a serem incluídos, separados por vírgula, conforme
   * [IBGE 🡭](https://concla.ibge.gov.br/busca-online-cnae.html?view=estrutura).
   * @example "0111301,1011201,3511501"
   */
  "sideActivities.id.in"?: number[];
  /**
   * Códigos das atividades econômicas secundárias a serem excluídos, separados por vírgula, conforme
   * [IBGE 🡭](https://concla.ibge.gov.br/busca-online-cnae.html?view=estrutura).
   * @example "0111301,1011201,3511501"
   */
  "sideActivities.id.nin"?: number[];
}

export interface OfficeMapDto {
  /**
   * Largura em pixels.
   * @format integer
   * @min 80
   * @max 640
   * @default 640
   */
  width?: number;
  /**
   * Altura em pixels.
   * @format integer
   * @min 80
   * @max 640
   * @default 640
   */
  height?: number;
  /**
   * Multiplicador de densidade de pixels.
   * @format integer
   * @min 1
   * @max 2
   * @default 1
   */
  scale?: number;
  /**
   * Nível de ampliação.
   * @format integer
   * @min 1
   * @max 20
   * @default 17
   */
  zoom?: number;
  /**
   * Tipo do mapa:
   * - `roadmap`: Rodovias.
   * - `terrain`: Elevação.
   * - `satellite`: Satélite.
   * - `hybrid`: Rodovias e satélite.
   * @default "roadmap"
   */
  type?: "roadmap" | "terrain" | "satellite" | "hybrid";
  /**
   * Número do CNPJ sem pontuação.
   * @format cnpj
   * @example "37335118000180"
   */
  taxId: string;
}

export interface OfficeStreetDto {
  /**
   * Largura em pixels.
   * @format integer
   * @min 80
   * @max 640
   * @default 640
   */
  width?: number;
  /**
   * Altura em pixels.
   * @format integer
   * @min 80
   * @max 640
   * @default 640
   */
  height?: number;
  /**
   * Campo de visão em graus.
   * @format integer
   * @min 60
   * @max 120
   * @default 90
   */
  fov?: number;
  /**
   * Número do CNPJ sem pontuação.
   * @format cnpj
   * @example "37335118000180"
   */
  taxId: string;
}

export interface ListSearchDto {
  /**
   * Token de paginação, mutualmente exclusivo com as demais propriedades.
   * @format not empty
   * @minLength 32
   * @maxLength 32
   * @example "8d47bdcbde4a7a2d4a98d5f555a19701"
   */
  token?: string;
  /**
   * Quantidade de registros a serem lidos por página.
   * @format integer
   * @min 1
   * @max 1000
   * @default 10
   */
  limit?: number;
  /**
   * Termo a ser pesquisado no título ou descrição.
   * @format not empty
   * @minLength 1
   * @example "Clientes"
   */
  search?: string;
}

export interface ListExportSearchDto {
  /**
   * Token de paginação, mutualmente exclusivo com as demais propriedades.
   * @format not empty
   * @minLength 32
   * @maxLength 32
   * @example "8d47bdcbde4a7a2d4a98d5f555a19701"
   */
  token?: string;
  /**
   * Quantidade de registros a serem lidos por página.
   * @format integer
   * @min 1
   * @max 1000
   * @default 10
   */
  limit?: number;
  /**
   * Código da lista.
   * @format uuid
   * @example "97d34b55-ecba-4e22-bd05-9e27ff24632b"
   */
  listId: string;
}

export interface ConsultaCnpjParams {
  /**
   * Habilita retornar dados em cache caso a busca em tempo real falhe.
   * @default true
   */
  enable_cache_fallback?: boolean;
  /**
   * Idade máxima, em dias, que um dado em cache é aceite.
   * @format integer
   * @min 0
   * @default 45
   */
  company_max_age?: number;
  /**
   * +**1 ₪** Adiciona as informações de opção pelo Simples e
   * enquadramento no MEI.
   * @format integer
   * @min 0
   * @example 1
   */
  simples_max_age?: number;
  /**
   * +**1 ₪** Adiciona a lista de Inscrições Estaduais.
   * @format integer
   * @min 0
   * @example 1
   */
  sintegra_max_age?: number;
  /**
   * Número do CNPJ sem pontuação.
   * @format cnpj
   * @example "37335118000180"
   */
  taxId: string;
}

export interface CccReadDto {
  /**
   * CNPJ ou CPF de produtor rural
   * @format cnpj|cpf
   * @example "37335118000180"
   */
  taxId: string;
  /**
   * Unidades Federativas separadas por vírgula. Aceita os termos especiais `ORIGIN`
   * (mesma UF do endereço do estabelecimento) e `ALL` (todas). Consultas de CPF de produtor rural exigem
   * informar a UF exata.
   * @example "PR,RS,SC"
   */
  states: (
    | "ORIGIN"
    | "ALL"
    | "AC"
    | "AL"
    | "AM"
    | "AP"
    | "BA"
    | "CE"
    | "DF"
    | "ES"
    | "GO"
    | "MA"
    | "MG"
    | "MS"
    | "MT"
    | "PA"
    | "PB"
    | "PE"
    | "PI"
    | "PR"
    | "RJ"
    | "RN"
    | "RO"
    | "RR"
    | "RS"
    | "SC"
    | "SP"
    | "SE"
    | "TO"
  )[];
  /**
   * Fonte de dados para obtenção das Inscrições Estaduais:
   * - `AUTO`: Idem a utilizar `CCC`, sujeito a alterações no futuro caso credenciais sejam necessárias.
   * - `CCC`: Utiliza o Cadastro Centralizado de Contribuintes para leitura de todas as inscrições.
   * - `SINTEGRA`: Utiliza individualmente cada SINTEGRA estadual para leitura das inscrições.
   * @default "AUTO"
   */
  source?: "AUTO" | "CCC" | "SINTEGRA";
  /**
   * Estratégia de cache utilizada na aquisição dos dados:
   * - `CACHE`: Entrega os dados do cache, evitando cobranças de créditos, se os dados não estiverem disponíveis resultará em um erro 404.
   * - `CACHE_IF_FRESH`: Retorna os dados do cache respeitando o limite em `maxAge`, se os dados estiverem desatualizados será consultado online.
   * - `CACHE_IF_ERROR`: Idem ao `CACHE_IF_FRESH`, mas se a consulta online falhar retorna os dados do cache respeitando o limite em `maxStale`.
   * - `ONLINE`: Consulta diretamente online, não recomendado pois ignora qualquer cache, sugerimos configurar `maxAge=1` como alternativa.
   * @default "CACHE_IF_ERROR"
   */
  strategy?: "ONLINE" | "CACHE_IF_FRESH" | "CACHE_IF_ERROR" | "CACHE";
  /**
   * Idade máxima, em dias, que um dado em cache é aceite, relevante para as estratégias `CACHE_IF_FRESH` e `CACHE_IF_ERROR`.
   * @format integer
   * @min 1
   * @max 3650
   * @default 45
   */
  maxAge?: number;
  /**
   * Idade máxima, em dias, que um dado em cache é aceite em caso de erro na busca online, relevante apenas para a estratégia `CACHE_IF_ERROR`.
   * @format integer
   * @min 1
   * @max 3650
   * @default 365
   */
  maxStale?: number;
  /** Aguarda a compensação dos créditos de forma síncrona, retornando o cabeçalho `cnpja-request-cost`. */
  sync?: boolean;
}

export interface CccCertificateDto {
  /**
   * Número do CNPJ ou CPF sem pontuação.
   * @format cnpj|cpf
   * @example "37335118000180"
   */
  taxId: string;
  /**
   * Unidade Federativa de origem. Consultas de CPF de produtor rural exigem informar a UF exata.
   * @example "SP"
   */
  state?:
    | "AC"
    | "AL"
    | "AM"
    | "AP"
    | "BA"
    | "CE"
    | "DF"
    | "ES"
    | "GO"
    | "MA"
    | "MG"
    | "MS"
    | "MT"
    | "PA"
    | "PB"
    | "PE"
    | "PI"
    | "PR"
    | "RJ"
    | "RN"
    | "RO"
    | "RR"
    | "RS"
    | "SC"
    | "SP"
    | "SE"
    | "TO";
}

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

/** ZipDto */
export interface ZipDto {
  /**
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
  zip: string;
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

/** SuframaStatusDto */
export interface SuframaStatusDto {
  /**
   * Código da situação cadastral:
   * 1\. Ativa.
   * 2\. Inativa.
   * 3\. Bloqueada.
   * 4\. Cancelada.
   * 5\. Cancelada Ag. Rec.
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
  zip: string;
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
   * Código de DDD.
   * @format numeric
   * @example "11"
   */
  area: string;
  /**
   * Número.
   * @format numeric
   * @example "971564144"
   */
  number: string;
}

/** EmailDto */
export interface EmailDto {
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
   * Número do CNPJ ou CPF.
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
   * Número do CNPJ.
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
   * 1\. ME - Microempresa.
   * 3\. EPP - Empresa de Pequeno Porte.
   * 5\. DEMAIS - Demais.
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
   * 1\. Nula.
   * 2\. Ativa.
   * 3\. Suspensa.
   * 4\. Inapta.
   * 8\. Baixada.
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
   * - `UNKNOWN`: Desconhecida.
   * @example "NATURAL"
   */
  type: "NATURAL" | "LEGAL" | "FOREIGN" | "UNKNOWN";
  /**
   * Nome ou razão social.
   * @format not empty
   * @example "João Silva"
   */
  name: string;
  /**
   * Presente quando `type == 'NATURAL' | 'LEGAL'`
   * CPF ou CNPJ.
   * @format not empty
   * @example "***123456**"
   */
  taxId?: string;
  /**
   * Presente quando `type == 'NATURAL'`
   * Faixa etária.
   * @format not empty
   * @example "31-40"
   */
  age?: string;
  /**
   * Presente quando `type == 'FOREIGN'`
   * País de origem.
   */
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
  /**
   * Presente quando aplicável na qualificação
   * Informações do representante legal.
   */
  agent: MemberAgentDto;
}

/** RfbDto */
export interface RfbDto {
  /**
   * Número do CNPJ.
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
   * Presente quando `nature.id < 2000`
   * Ente federativo responsável.
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
  /**
   * Presente quando `status.id != 2`
   * Informações do motivo da situação cadastral.
   */
  reason?: OfficeReasonDto;
  /**
   * Data da situação especial.
   * @format iso8601
   * @example "2022-01-01"
   */
  specialDate?: string;
  /**
   * Presente quando `specialDate != undefined`
   * Informações da situação especial.
   */
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
   * Presente quando `nature.id < 2000`
   * Ente federativo responsável.
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
  /**
   * Presente quando aplicável na qualificação
   * Informações do representante legal.
   */
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
   * - `UNKNOWN`: Desconhecida.
   * @example "NATURAL"
   */
  type: "NATURAL" | "LEGAL" | "FOREIGN" | "UNKNOWN";
  /**
   * Nome ou razão social.
   * @format not empty
   * @example "João Silva"
   */
  name: string;
  /**
   * Presente quando `type == 'NATURAL' | 'LEGAL'`
   * CPF ou CNPJ.
   * @format not empty
   * @example "***123456**"
   */
  taxId?: string;
  /**
   * Presente quando `type == 'NATURAL'`
   * Faixa etária.
   * @format not empty
   * @example "31-40"
   */
  age?: string;
  /**
   * Presente quando `type == 'FOREIGN'`
   * País de origem.
   */
  country?: CountryDto;
  /** Lista de sociedades participantes. */
  membership: PersonMemberDto[];
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
  /**
   * Presente quando aplicável na qualificação
   * Informações do representante legal.
   */
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
   * Presente quando `nature.id < 2000`
   * Ente federativo responsável.
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
   * 1\. Sem restrição.
   * 2\. Bloqueado como destinatário na UF.
   * 3\. Vedada operação como destinatário na UF.
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
   * 1\. IE Normal.
   * 2\. IE Substituto Tributário.
   * 3\. IE Não Contribuinte (Canteiro de Obras, IE Virtual, outros).
   * 4\. IE de Produtor Rural.
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
  type: "RFB_CERTIFICATE" | "SIMPLES_CERTIFICATE" | "SUFRAMA_CERTIFICATE" | "OFFICE_MAP" | "OFFICE_STREET";
  /**
   * URL pública de acesso ao arquivo.
   * @format not empty
   * @example "https://api.cnpja.com/rfb/certificate?taxId=37335118000180&signature=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyZDdhNTVhNy1hMTYxLTRiNTAtODI5ZC1iNDg4MjE5NGMwYjciLCJ1cmwiOiIvcmZiL2NlcnRpZmljYXRlP3RheElkPTM3MzM1MTE4MDAwMTgwIiwiaWF0IjoxNjI1ODkxMzczLCJleHAiOjE2MjU4OTQ5NzMsImF1ZCI6Imh0dHBzOi8vY25wamEuY29tLyIsImlzcyI6Imh0dHBzOi8vY25wamEuY29tLyJ9.AY9YgQfRk5jEMbkDQL7Hx2s5gEChncPQME8D5hx7PpXQdf6oqjHvN5s_Zk_y2F6srN1ZfMt1oyPJ62JZcwhWtIEL6j_7N_lnv-64w16uAL5xDBfGboNcqtxABV1Mtq-B0-mdKCHsMIw6eHDkBJXnQgGY4EELKYAOMXBF4XgcNWZN00_1nAA_iEivEIOKgyDAVbPg2Pd-zowqL_taSPuOYU_9fpLWxB2nsXLa4QfhCjdp_7kllcI83DbDAjfpVcDNYh4zuVhgoHkGHIzRFyeqOH_RU1sO-_3zDd75cF2B2u0qtyLn0i4KDcJxjK21_5Oh7oJTUd8E08-anjCdIZAIoyQyobc9Awulb86LuASFzvrE_R8uFlnglzAH_CHyGyg-VCBuKRUm0ES7iKVhaKVcWBoEb4r5BIzqO1c0nBvK9Jd_Uc3f2Zu6ouNiyQPYM9PjCRCwed8NomivJkYcUugR-KKp_M21AliocPFpHrM5zIgORxSeK-FUq4zc9jZGQo93I3f1U2Ao5kid3-xviNcNNDbON4m3GDJ1vXGjE2ZWA4IfbzdcPnJvx1-A5QD5J-gFvGRb91mrQof3ujxnTxzCgs939EXrXKL3SQ0S90b5jgrBMYFcCPQbetBGooC0zC-se4ykqEYxY95pAsqIPncoAojQ94rxztDeM4cDy-vcIlg"
   */
  url: string;
}

/** OfficeDto */
export interface OfficeDto {
  /**
   * Número do CNPJ.
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
  /**
   * Presente quando `status.id != 2`
   * Informações do motivo da situação cadastral.
   */
  reason?: OfficeReasonDto;
  /**
   * Data da situação especial.
   * @format iso8601
   * @example "2022-01-01"
   */
  specialDate?: string;
  /**
   * Presente quando `specialDate != undefined`
   * Informações da situação especial.
   */
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
  /** Lista de Inscrições Estaduais. */
  registrations?: RegistrationDto[];
  /** Lista de inscrições SUFRAMA */
  suframa?: OfficeSuframaDto[];
  /** Lista de links para arquivos. */
  links?: OfficeLinkDto[];
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
   * @example "2024-08-24T21:39:13.122Z"
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
   * @example "2024-08-24T21:39:13.128Z"
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
   * @example "2024-08-24T21:39:13.129Z"
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
   * Número do CNPJ.
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
   * Presente quando `nature.id < 2000`
   * Ente federativo responsável.
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
   * Número do CNPJ ou CPF.
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
   * Número do CNPJ ou CPF.
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
   * Idade máxima, em dias, que um dado em cache é aceite em caso de erro na busca online, relevante apenas para a estratégia `CACHE_IF_FRESH`.
   * @format integer
   * @min 1
   * @max 3650
   * @default 365
   */
  maxStale?: number;
  /** Aguarda a compensação dos créditos de forma síncrona, retornando o cabeçalho `cnpja-request-cost`. */
  sync?: boolean;
}

export interface SuframaCertificateReadDto {
  /**
   * Número do CNPJ ou CPF.
   * @format cnpj|cpf
   * @example "37335118000180"
   */
  taxId: string;
}

export interface SimplesReadDto {
  /**
   * Número do CNPJ.
   * @format cnpj
   * @example "37335118000180"
   */
  taxId: string;
  /**
   * <span style="color: #EAED37">[ +1 ₪ ]</span> Adiciona o histórico de períodos
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
   * Idade máxima, em dias, que um dado em cache é aceite em caso de erro na busca online, relevante apenas para a estratégia `CACHE_IF_FRESH`.
   * @format integer
   * @min 1
   * @max 3650
   * @default 365
   */
  maxStale?: number;
  /** Aguarda a compensação dos créditos de forma síncrona, retornando o cabeçalho `cnpja-request-cost`. */
  sync?: boolean;
}

export interface SimplesCertificateReadDto {
  /**
   * Número do CNPJ.
   * @format cnpj
   * @example "37335118000180"
   */
  taxId: string;
}

export interface RfbReadDto {
  /**
   * Número do CNPJ.
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
   * Idade máxima, em dias, que um dado em cache é aceite em caso de erro na busca online, relevante apenas para a estratégia `CACHE_IF_FRESH`.
   * @format integer
   * @min 1
   * @max 3650
   * @default 365
   */
  maxStale?: number;
  /** Aguarda a compensação dos créditos de forma síncrona, retornando o cabeçalho `cnpja-request-cost`. */
  sync?: boolean;
}

export interface RfbCertificateReadDto {
  /**
   * Número do CNPJ.
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

export interface OfficeReadDto {
  /**
   * <span style="color: #EAED37">[ +1 ₪ ]</span> Adiciona as informações de opção pelo
   * Simples e enquadramento no MEI.
   * @default false
   */
  simples?: boolean;
  /**
   * <span style="color: #EAED37">[ +1 ₪ ]</span> Adiciona o histórico de períodos
   * anteriores do Simples e MEI.
   * @default false
   */
  simplesHistory?: boolean;
  /**
   * <span style="color: #EAED37">[ +1 ₪ ]</span> Adiciona as Inscrições Estaduais para as selecionadas
   * Unidades Federativas separadas por vírgula, utilize `BR` para considerar todas.
   * @example "PR,RS,SC"
   */
  registrations?: (
    | "BR"
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
   * <span style="color: #EAED37">[ +1 ₪ ]</span> Adiciona a inscrição na SUFRAMA.
   * @default false
   */
  suframa?: boolean;
  /**
   * <span style="color: #EAED37">[ +7 ₪ ]</span> Adiciona a latitude e longitude do endereço.
   * @default false
   */
  geocoding?: boolean;
  /**
   * Adiciona links públicos para visualização dos arquivos selecionados separados por vírgula.
   * @example "RFB_CERTIFICATE,SIMPLES_CERTIFICATE"
   */
  links?: ("RFB_CERTIFICATE" | "SIMPLES_CERTIFICATE" | "SUFRAMA_CERTIFICATE" | "OFFICE_MAP" | "OFFICE_STREET")[];
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
   * Idade máxima, em dias, que um dado em cache é aceite em caso de erro na busca online, relevante apenas para a estratégia `CACHE_IF_FRESH`.
   * @format integer
   * @min 1
   * @max 3650
   * @default 365
   */
  maxStale?: number;
  /** Aguarda a compensação dos créditos de forma síncrona, retornando o cabeçalho `cnpja-request-cost`. */
  sync?: boolean;
  /**
   * Número do CNPJ.
   * @format cnpj
   * @example "37335118000180"
   */
  taxId: string;
}

export interface OfficeMapReadDto {
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
   * • `roadmap`: Rodovias.
   * • `terrain`: Elevação.
   * • `satellite`: Satélite.
   * • `hybrid`: Rodovias e satélite.
   * @default "roadmap"
   */
  type?: "roadmap" | "terrain" | "satellite" | "hybrid";
  /**
   * Número do CNPJ.
   * @format cnpj
   * @example "37335118000180"
   */
  taxId: string;
}

export interface OfficeStreetReadDto {
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
   * Número do CNPJ.
   * @format cnpj
   * @example "37335118000180"
   */
  taxId: string;
}

export interface ConsultaCnpjDescontParams {
  /**
   * Habilita retornar dados em cache caso a busca em tempo real falhe.
   * @default true
   */
  enable_cache_fallback?: boolean;
  /**
   * Idade máxima que um dado em cache da Receita Federal é aceite.
   * @format integer
   * @min 0
   * @default 30
   */
  company_max_age?: number;
  /**
   * <span style="color: #EAED37">[ +1 ₪ ]</span> Adiciona as informações de opção pelo Simples e
   * enquadramento no MEI, e configura a idade máxima que um dado em cache do Simples Nacional é aceite.
   * @format integer
   * @min 0
   * @default 30
   */
  simples_max_age?: number;
  /**
   * <span style="color: #EAED37">[ +1 ₪ ]</span> Adiciona a lista de Inscrições Estaduais e configura
   * a idade máxima que um dado em cache do Cadastro de Contribuintes é aceite.
   * @format integer
   * @min 0
   * @default 30
   */
  sintegra_max_age?: number;
  /**
   * Número do CNPJ.
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
   * Unidades Federativas para consulta separadas por vírgula, utilize `BR` para considerar todas.
   * Consultas de CPF de produtor rural exigem informar a UF exata.
   * @example "PR,RS,SC"
   */
  states: (
    | "BR"
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
   * Idade máxima, em dias, que um dado em cache é aceite em caso de erro na busca online, relevante apenas para a estratégia `CACHE_IF_FRESH`.
   * @format integer
   * @min 1
   * @max 3650
   * @default 365
   */
  maxStale?: number;
  /** Aguarda a compensação dos créditos de forma síncrona, retornando o cabeçalho `cnpja-request-cost`. */
  sync?: boolean;
}

export interface CccCertificateReadDto {
  /**
   * Número do CNPJ ou CPF.
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

import { RfbCertificateRawReadDto } from '../cnpja/cnpja.dto';

export interface RfbCertificateReadDto extends Omit<RfbCertificateRawReadDto, 'pages'> {
  /**
   * Páginas a incluir no comprovante.
   * @default "[ 'REGISTRATION', 'MEMBERS' ]"
   */
  pages?: ('REGISTRATION' | 'MEMBERS')[];
}

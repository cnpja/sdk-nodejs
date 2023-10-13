import { CccStates } from '../ccc/ccc.dto';
import { OfficeReadRawDto } from '../cnpja/cnpja.dto';

export interface OfficeReadDto extends Omit<OfficeReadRawDto, 'registrations' | 'links'> {
  /**
   * <span style="color: #EAED37"><b>[ +1 ₪ ]</b></span> Adiciona as Inscrições Estaduais para as selecionadas
   * Unidades Federativas, utilize `BR` para considerar todas.
   * @example "[ 'PR', 'RS', 'SC' ]"
   */
  registrations?: CccStates[];
  /**
   * Adiciona links públicos para visualização dos arquivos selecionados.
   * @example "[ 'RFB_CERTIFICATE', 'SIMPLES_CERTIFICATE' ]"
   */
  links?: ('RFB_CERTIFICATE' | 'SIMPLES_CERTIFICATE' | 'OFFICE_MAP' | 'OFFICE_STREET')[];
}

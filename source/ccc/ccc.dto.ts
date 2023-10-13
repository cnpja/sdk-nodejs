import { CccReadRawDto } from '../cnpja/cnpja.dto';

export type CccStates =
  | 'BR'
  | 'AC'
  | 'AL'
  | 'AM'
  | 'AP'
  | 'BA'
  | 'CE'
  | 'DF'
  | 'ES'
  | 'GO'
  | 'MA'
  | 'MG'
  | 'MS'
  | 'MT'
  | 'PA'
  | 'PB'
  | 'PE'
  | 'PI'
  | 'PR'
  | 'RJ'
  | 'RN'
  | 'RO'
  | 'RR'
  | 'RS'
  | 'SC'
  | 'SP'
  | 'SE'
  | 'TO';

export interface CccReadDto extends Omit<CccReadRawDto, 'states'> {
  /**
   * Unidades Federativas, utilize `BR` para considerar todas.
   * @example "[ 'PR', 'RS', 'SC' ]"
   */
  states: CccStates[];
}

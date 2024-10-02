/* eslint-disable jsdoc/check-tag-names */
export interface PersonSearchReadDto {
  type?: {
    /**
     * Tipos de pessoa a serem incluídos, separados por vírgula.
     * - `NATURAL`: Pessoa física.
     * - `LEGAL`: Pessoa jurídica.
     * - `FOREIGN`: Pessoa residente no exterior.
     * - `UNKNOWN`: Desconhecida.
     * @example "NATURAL,LEGAL"
     */
    in?: ('LEGAL' | 'NATURAL' | 'FOREIGN' | 'UNKNOWN')[];
  };
  name?: {
    /**
     * Nomes a serem incluídos, separados por espaço para correspondência na mesma pessoa,
     * ou separados por vírgula para correspondência em diferentes.
     * @format not empty
     * @example "Miguel Sousa,Maria,João "
     */
    in?: string[];
    /**
     * Nomes a serem excluídos, separados por espaço para correspondência na mesma pessoa,
     * ou separados por vírgula para correspondência em diferentes.
     * @format not empty
     * @example "Pedro Silva,Santos,Oliveira"
     */
    nin?: string[];
  };
  taxId?: {
  /**
   * CPFs a serem incluídos, separados por vírgula. A correspondência será feita pelos dígitos
   * entre o quarto e nono, uma vez que não armazenamos CPFs completos em nossa plataforma.
   * @format cpf
   * @example "78326957062,92854908082"
   */
    in?: string[];
  };
  age?: {
    /**
     * Faixas etárias a serem incluídas, separadas por vírgula.
     * @example "21-30,31-40"
     */
    in?: ('0-12' | '13-20' | '21-30' | '31-40' | '41-50' | '51-60' | '61-70' | '71-80' | '81+')[];
  };
  country?: {
    id?: {
      /**
       * Códigos de países a serem incluídos, separados por vírgula, conforme
       * [M49 🡭](https://unstats.un.org/unsd/methodology/m49/).
       * @format integer
       * @example "250,276,724"
       */
      in?: number[];
      /**
       * Códigos de países a serem excluídos, separados por vírgula, conforme
       * [M49 🡭](https://unstats.un.org/unsd/methodology/m49/).
       * @format integer
       * @example "32,152,600"
       */
      nin?: number[];
    };
  };
}

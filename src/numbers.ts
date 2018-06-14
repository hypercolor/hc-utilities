export class Numbers {
  /**
   * Determine if the input is a numeric type
   *
   * @param n {Object} anything
   * @returns {boolean}
   */
  public static isNumber = (n: any) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };


  public static roundFloat(value: number, numDecimals: number) {
    return Number(Math.round(value+'e'+numDecimals as any)+'e-'+numDecimals);
  }

}

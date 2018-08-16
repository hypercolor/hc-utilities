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

  public static zeroPad(numberValue: number, minDigits: number): string {
    const desiredDigits = Math.round(minDigits);

    let stringValue = '' + numberValue;

    if (desiredDigits > 0) {
      let numDigits = Math.ceil(Math.log10(Math.floor(numberValue) + 0.000001));

      while (numDigits < desiredDigits) {
        stringValue = '0' + stringValue;
        numDigits += 1;
      }

    }

    return stringValue;
  }

}

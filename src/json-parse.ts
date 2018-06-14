export class JsonParse {
  /**
   * Simple wrapper of JSON.parse so it can be included in promise chains.
   * @param jsonString
   * @returns {*}
   */
  public static parse(jsonString: string) {
    return new Promise((resolve, reject) => {
      try {
        const json = JSON.parse(jsonString);
        resolve(json);
      } catch (err) {
        reject(err);
      }
    });



  }


  public static parseIntArrayFromJsonString(param: string): Array<number> {
    if (!param) {
      return [];
    }
    return param.split(',').map(id => parseInt(id, 10)).filter(id => !isNaN(id));
  }
}

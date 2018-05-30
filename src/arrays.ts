export class Arrays {

  public static deduplicate<T>(array: Array<T>, isEqual: (a: T, b: T) => boolean) {
    const uniques: Array<T> = [];
    array.forEach(val => {
      let found = false;
      for (let ii=0; ii<uniques.length; ii+=1) {
        if (isEqual(val, uniques[ii])) {
          found = true;
          break;
        }
      }
      if (!found) {
        uniques.push(val);
      }
    });
  }
}

export class Strings {


  public static sanitizeEmail(email: string) {

    return email.toLowerCase().replace(/ /g,'');
  }
}

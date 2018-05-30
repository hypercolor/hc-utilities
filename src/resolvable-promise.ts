export class ResolvablePromise<T> {

  public resolve: (value?: T | PromiseLike<T>) => void;
  public reject: (reason?: any) => void;
  public promise: Promise<T>;

  constructor(promise: Promise<T>){

    this.promise = new Promise((resolve, reject) => {

      this.resolve = resolve;
      this.reject = reject;

      promise
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  // public promise(): Promise<T> {
  //   return new Promise();
  // }
}

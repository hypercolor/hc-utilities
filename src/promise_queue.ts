import {ResolvablePromise} from './resolvable-promise';

import * as PQueue from 'p-queue';

export class PromiseQueue {

  private queue: PQueue;

  private pendingPromise: ResolvablePromise<any> | null;

  constructor(maxConcurrent?: number){
    this.queue = new PQueue({concurrency: maxConcurrent || 1});
  }

  public add(promiseFunction: () => Promise<any>): Promise<any> {
    return this.queue.add(promiseFunction);
  }

  public clear(resolvedResult: any): void {
    if (this.pendingPromise){
      this.queue.clear();
      this.pendingPromise.resolve(resolvedResult);
    } else {
      throw new Error('Promise queue clear must be used with runAllPromiseFunctionsCancellable');
    }
  }

  public runAllPromiseFunctionsCancellable<T>(promiseFunctions: Array<() => Promise<T>>): Promise<Array<T>> {
    if (!promiseFunctions) {
      return Promise.reject('promiseFunctions was not supplied');
    } else if (promiseFunctions.length === 0) {
      return Promise.resolve([]);
    } else {
      promiseFunctions.forEach(promiseFunction => {
        this.pendingPromise = new ResolvablePromise<any>(this.add(promiseFunction));
      });
      return this.pendingPromise ? this.pendingPromise.promise : Promise.resolve();
    }
  }

  public runAllPromiseFunctions<T>(promiseFunctions: Array<() => Promise<T>>): Promise<Array<T>> {
    this.pendingPromise = null;
    if (!promiseFunctions) {
      return Promise.reject('promiseFunctions was not supplied');
    } else if (promiseFunctions.length === 0) {
      return Promise.resolve([]);
    } else {
      const addedPromises: Array<Promise<any>> = [];
      promiseFunctions.forEach(promiseFunction => {
        addedPromises.push(this.add(promiseFunction));
      });

      return new Promise((resolve, reject) => {
        Promise.all(addedPromises)
        .then(results => {
          resolve(results);
        })
        .catch(err => {
          reject(err);
        });
      });
    }
  }

}


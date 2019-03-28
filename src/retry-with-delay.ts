import { PromiseQueue } from './promise_queue'

export class RetryWithDelay {
  public static retry(
    promiseFunction: (retryNumber: number) => Promise<any>,
    numRetries: number,
    delayMs: number
  ): Promise<any> {
    const queue = new PromiseQueue(1)

    const promiseFunctions = []

    for (let ii = 0; ii < numRetries; ii++) {
      promiseFunctions.push(this.retryFunction(promiseFunction, delayMs, queue, ii, ii === numRetries - 1))
    }

    return queue.runAllCancellable(promiseFunctions).then(results => {
      // console.log('All promise functions complete: ' + JSON.stringify(results));
      return Promise.resolve(results)
    })
  }

  private static retryFunction(
    promiseFunction: (retryNumber: number) => Promise<any>,
    delayMs: number,
    queue: PromiseQueue,
    retryIndex: number,
    isLastInQueue: boolean
  ): () => Promise<any> {
    return () => {
      return promiseFunction(retryIndex)
        .then(result => {
          // SUCCESS, CANCEL SUBSEQUENT EXECUTION
          // console.log('Success: ' + result);
          queue.clear(result)
          return Promise.resolve(result)
        })
        .catch(err => {
          // This one errored out, skip to next execution unless this was the last retry
          if (isLastInQueue) {
            // console.log('Failed, is last one so rejecting.');
            return Promise.reject(err)
          } else {
            // console.log('Failed, delaying and retrying.');
            return this.delayPromise(delayMs)
          }
        })
    }
  }

  private static delayPromise(ms: number) {
    return new Promise(resolve => {
      setTimeout(resolve, ms)
    })
  }
}

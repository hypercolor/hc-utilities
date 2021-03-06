// Generated by dts-bundle v0.7.3

export class JsonParse {
    /**
      * Simple wrapper of JSON.parse so it can be included in promise chains.
      * @param jsonString
      * @returns {*}
      */
    static parse(jsonString: string): Promise<{}>;
    static parseIntArrayFromJsonString(param: string): Array<number>;
}

/**
    * @module Keygen
    */
export class Keygen {
        /**
            * Return a unique identifier with the given `len`.
            *
            *     utils.uid(10);
            *     // => "FDaS435D2z"
            *
            * @param {Number} len
            * @return {String}
            * @api private
            */
        static uid(len: number): string;
        /**
            * Create a HMAC using SHA512
            *
            * @param {String} key - encryption key
            * @param {String} message - message to be encrypted
            * @return {String} encrypted HMAC
            */
        static hmacSHA512(key: string, message: string): Promise<string>;
}

export class Numbers {
    /**
      * Determine if the input is a numeric type
      *
      * @param n {Object} anything
      * @returns {boolean}
      */
    static isNumber: (n: any) => boolean;
    static roundFloat(value: number, numDecimals: number): number;
    static zeroPad(numberValue: number, minDigits: number): string;
}

export class PromiseQueue {
    constructor(maxConcurrent?: number);
    add(promiseFunction: () => Promise<any>): Promise<any>;
    clear(resolvedResult: any): void;
    runAllCancellable<T>(promiseFunctions: Array<() => Promise<T>>): Promise<Array<T>>;
    runAll<T>(promiseFunctions: Array<() => Promise<T>>): Promise<Array<T>>;
}

export class ResolvablePromise<T> {
    promise: Promise<T>;
    constructor(promise: Promise<T>);
    resolve: (value?: T | PromiseLike<T>) => void;
    reject: (reason?: any) => void;
}

export class RetryWithDelay {
    static retry(promiseFunction: (retryNumber: number) => Promise<any>, numRetries: number, delayMs: number): Promise<any>;
}

export class Arrays {
    static deduplicate<T>(array: Array<T>, isEqual: (a: T, b: T) => boolean): Array<T>;
}

export class Strings {
    static sanitizeEmail(email: string): string;
}


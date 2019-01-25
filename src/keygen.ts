/**
 * @module Keygen
 */

import * as crypto from 'crypto'

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
  public static uid(len: number): string {
    const buf = []
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const length = chars.length

    for (let i = 0; i < len; ++i) {
      buf.push(chars[getRandomInt(0, length - 1)])
    }

    return buf.join('')
  }

  /**
   * Create a HMAC using SHA512
   *
   * @param {String} key - encryption key
   * @param {String} message - message to be encrypted
   * @return {String} encrypted HMAC
   */
  public static hmacSHA512(key: string, message: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!message) {
        reject('hmacSHA512 input message was null or undefined.')
      } else if (!key) {
        reject('hmacSHA512 input key was null or undefined.')
      } else {
        const buf = new Buffer(key, 'utf-8')
        const hash = crypto.createHmac('sha512', buf)
        hash.update(new Buffer(message, 'utf-8'))
        resolve(hash.digest('hex'))
      }
    })
  }
}

/**
 * Return a random int between min and max inclusive.
 *
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 * @api private
 */

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

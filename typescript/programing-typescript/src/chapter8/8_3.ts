import { appendFile, readFile } from "fs"

function appendAndReadPromise(path: string, data: string): Promise<string> {
  return appendPromise(path, data)
    .then(() => readPromise(path))
    .catch(error => console.error(error))
}

function appendAndRead(
  path: string,
  data: string,
  callback: (error: Error | null, result: string | null) => void
) {
  appendFile(path, data, error => {
    if (error) {
      return callback(error, null)
    }
    readFile(path, (error, result) => {
      if (error) {
        return callback(error, null)
      }
      callback(null, result)
    })
  })
}

type Executor<T> = (
  resolve: (result: T) => void,
  reject: (error: unknown) => void
) => void

class Promise<T> {
  constructor(f: Executor<T>) {}
  then<U>(g: (result: T) => Promise<U> | U): Promise<U>
  catch<U>(g: (error: unknown) => Promise<U> | U): Promise<U>
}

import {readFile} from 'fs'

function readFilePromise(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    readFile(path, (error, result) => {
      if (error) {
        reject(error)
      } else {
        resolve(result)
      }
    })
  })
}

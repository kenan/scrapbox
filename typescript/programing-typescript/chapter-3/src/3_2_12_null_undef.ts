import { X_OK } from "constants";

function null_nundef() {

  function a(x: number) {
    if (x < 10) {
      return x;
    }
    return null
  }

  function b() {
    return undefined
  }

  function c() {
    let a = 2 + 2
    let b = a * a
  }

  function d() {
    throw TypeError('I always error')
  }
}
